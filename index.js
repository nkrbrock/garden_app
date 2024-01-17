const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Create plant entry

//Read all plant entries

//Read plant entry 

//Update plant entry

//Delete plant update

//Create user entry

//Read all user entries

//Read user entry 

//Update user entry

//Delete user update

app.listen(5000, () => {
    console.log("server running!");
});