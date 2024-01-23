import React, {Fragment, useState} from "react";
import Alert from "./Alert";

function PlantInput() {
    const [plantName, setPlantName] = useState("");

    const host = "http://localhost:5000";
    const [alert, setAlert] = useState("");

    const addPlant = async e => {
        e.preventDefault();
        try {
            //Retrieve list of possible plants and see if user entered valid name
            const possiblePlants = await fetch(`${host}/plants`);
            const jsonData = await possiblePlants.json();
            
            //TODO: MAKE DYNAMIC FOR EACH USER
            const userPlants = await fetch(`${host}/user/1`);
            const userData = await userPlants.json();

            var snames = [];
            jsonData.forEach(plant => {
                snames.push(plant.sname);
            });

            var userplants = [];
            userData.forEach(plant => {
                userplants.push(plant.sname);
            });

            if (snames.includes(plantName)) {
                if (userplants.includes(plantName)) {
                    setAlert("info");
                } else {
                    const body = {plantName}
                    const response = await fetch(
                        //TODO: MAKE DYNAMIC FOR EACH USER
                        `${host}/user/1`,
                        {
                            method: "PUT",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(body)
                        }
                    );

                    window.location = "/user";
                }
            } else {
                setAlert("missing");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Fragment>
            <h1 className="mt-5">Hello, UserName!</h1>
            <div className="container">
                <form className=" d-flex my-5" onSubmit={addPlant}>
                    <input
                        type="text"
                        className="me-3 form-control"
                        placeholder="Scientific Name"
                        value={plantName}
                        onChange={e => setPlantName(e.target.value)}
                    />
                    <button className="btn btn-primary">
                        Add
                    </button>
                </form>
                {alert === "info" ? <Alert alertMessage={"This plant is already in your database"} alertType={"info"} />: null}
                {alert === "missing" ? <Alert alertMessage={"This plant is currently not in our database"} alertType={"danger"} />: null}
            </div>
        </Fragment>
    )
};

export default PlantInput;
