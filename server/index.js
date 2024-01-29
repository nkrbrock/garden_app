const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

//LOGIN AND REGISTRATION ROUTES
app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

//Read all plant entries available in the database (not secure data so I'm putting it here)
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

app.listen(5000, () => {
    console.log("server running!");
});
