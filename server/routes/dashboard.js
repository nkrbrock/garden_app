const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async(req, res) => {
    try {
        const user = await pool.query(
            "SELECT uname FROM userdata WHERE id = $1",
            [req.user]
        );

        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
