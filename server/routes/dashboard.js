const router = require("express").Router();
const pool = require("../db");
const authorize = require("../middleware/authorization");

//Create user plant entry
router.put("/", authorize, async(req, res) => {
    try {
        const { plantName } = req.body;

        const newPlant = await pool.query(
            "UPDATE users u SET plants = array_append(plants, (SELECT id FROM plant_db WHERE sname=$1)) WHERE u.user_id = $2;",
            [plantName, req.user.id]
            );

        res.json("User data updated!");
    } catch (error) {
        console.error(error.message);
    }
});

//Read all plant entries for a user
router.get("/", authorize, async(req, res) => {
    try {
        const userPlants = await pool.query(
            "SELECT * FROM users u LEFT JOIN plant_db p ON p.id = ANY (u.plants) WHERE u.user_id=$1;",
            [req.user.id]
            );

        res.json(userPlants.rows);
    } catch (error) {
        console.error(error.message);   
    }
});

//Read one plant entry for a specified user
router.get("/:plantid", authorize, async(req, res) => {
    try {
        const { plantid } = req.params;

        const userPlant = await pool.query(
            "SELECT * FROM users u JOIN plant_db p ON p.id = ANY (u.plants) WHERE u.user_id = $1 AND p.id = $2;",
            [req.user.id, plantid]
        );

        res.json(userPlant.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});



//Delete plant entry
router.put("/:plantid", authorize, async(req, res) => {
    try {
        const { plantid } = req.params;

        const deletePlant = await pool.query(
            "UPDATE users u SET plants = array_remove(plants, $1) where u.user_id = $2 RETURNING *", 
            [plantid, req.user.id]);

            res.json("Deleted plant from user's inventory!");
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
