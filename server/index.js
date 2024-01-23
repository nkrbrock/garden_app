const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

//Create user plant entry
app.put("/user/:id", async(req, res) => {
    try {
        const { plantName } = req.body;
        const { id } = req.params;

        const newPlant = await pool.query(
            "UPDATE userdata u SET plants = array_append(plants, (SELECT id FROM plant_db WHERE sname=$1)) WHERE u.id = $2;",
            [plantName, id]
            );

        res.json("User data updated!");
    } catch (error) {
        console.error(error.message);
    }
});

//Read all plant entries for a user
app.get("/user/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const userPlants = await pool.query(
            "SELECT * FROM userdata u JOIN plant_db p ON p.id = ANY (u.plants) WHERE u.id=$1;",
            [id]
            );

        res.json(userPlants.rows);
    } catch (error) {
        console.error(error.message);   
    }
});

//Read one plant entry for a specified user
app.get("/user/:userid/:plantid", async(req, res) => {
    try {
        const { userid, plantid } = req.params;

        const userPlant = await pool.query(
            "SELECT * FROM userdata u JOIN plant_db p ON p.id = ANY (u.plants) WHERE u.id = $1 AND p.id = $2;",
            [userid, plantid]
        );

        res.json(userPlant.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//Read all plant entries available in the database
app.get("/plants", async(req, res) => {
    try {
        const allPlants = await pool.query(
            "SELECT id, sname FROM plant_db"
        );

        res.json(allPlants.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//Delete plant entry
app.put("/user/:userid/:plantid", async(req, res) => {
    try {
        const { userid, plantid } = req.params;

        const deletePlant = await pool.query(
            "UPDATE userdata u SET plants = array_remove(plants, $1) where u.id = $2", 
            [plantid, userid]);

            res.json("Deleted plant from user's inventory!");
    } catch (error) {
        console.error(error.message);
    }
});

//LOGIN AND REGISTRATION ROUTES
app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
    console.log("server running!");
});
