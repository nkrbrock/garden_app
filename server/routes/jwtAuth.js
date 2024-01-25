const router = require("express").Router();
const pool = require('../db');
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorize = require("../middleware/authorization");

//REGISTERING
//Create user entry
router.post("/register", validInfo, async (req, res) => {
    const { fname, lname, uname, password, email } = req.body;
    try {
        // check if user exists
        const user = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (user.rows.length !== 0) {
            return res.status(401).json("User already exists");
        }

        const salt = await bcrypt.genSalt(15);

        const bcryptpw = await bcrypt.hash(password, salt);

        let newUser = await pool.query(
            "INSERT INTO users (fname, lname, uname, password, email) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [fname, lname, uname, bcryptpw, email]
        );

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

        return res.json({ jwtToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

//LOGIN
//Read user entry 
router.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
    
    try {

        const user = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if(user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const jwtToken = jwtGenerator(user.rows[0].user_id);

        return res.json({jwtToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post("/verify", authorize, async (req,  res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
