const router = require("express").Router();
const pool = require("../db");
const authorize = require("../middleware/authorization");

router.post("/", authorize, async(req, res) => {
    console.log("Here is a check from dashboard.js");
    try {
        const user = await pool.query(
            "SELECT uname FROM users WHERE user_id = $1",
            [req.user]
        );

        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
