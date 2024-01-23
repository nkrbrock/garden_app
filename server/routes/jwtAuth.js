const router = require("express").Router();
const pool = require('../db');
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");

//REGISTERING
//Create user entry
router.post("/register", validInfo, async (req, res) => {
    try {
        const { fname, lname, uname, password, email } = req.body;

        // check if user exists
        const user = await pool.query(
            "SELECT * FROM userdata WHERE email=$1",
            [email]
        );

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists");
        }

        const saltRound = 15;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptpw = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO userdata (fname, lname, uname, password, email) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [fname, lname, uname, bcryptpw, email]
        );

        const token = jwtGenerator(newUser.rows[0].id);

        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

//Read user entry 
router.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
    
    try {

        const user = await pool.query(
            "SELECT * FROM userdata WHERE email=$1",
            [email]
        );

        if(user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const token = jwtGenerator(user.rows[0].id);

        res.json(token);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/verify", authorization, async (req,  res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
