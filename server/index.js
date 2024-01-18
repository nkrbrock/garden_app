const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

//Create user plant entry
app.post("/user/:id", async(req, res) => {
    try {
        const { plantName } = req.body;
        const { id } = req.params;

        const newPlant = await pool.query(
            "UPDATE userdata u SET plants = array_append(plants, (SELECT id FROM plant_db WHERE sname=$1)) WHERE u.id = $2;",
            [plantName, id]
            )
    } catch (error) {
        console.error(error.message);
    }
});

//Read all plant entries
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

//Read plant entry 

//Delete plant update

//Create user entry

//Read all user entries

//Read user entry 

//Update user entry

//Delete user update

app.listen(5000, () => {
    console.log("server running!");
});
