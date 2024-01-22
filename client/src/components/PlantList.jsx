import React, {Fragment, useState, useEffect} from "react";
import Delete from "./Delete";

function PlantList() {
    const [plants, setPlants] = useState([]);

    const host = "http://localhost:5000";

    const getPlants = async() => {
        try {
            //TODO: replace 1 with user id
            const response = await fetch(`${host}/user/1`);
            const jsonData = await response.json();

            setPlants(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        getPlants();
    }, []);

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    {plants.map(plant => (
                        <div className="col-md-3 mb-5"  key={plant.id}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">Common Name: {plant.cname}</p>
                                    <p className="card-text">Scientific Name: {plant.sname}</p>
                                    <p className="card-text">Height: {plant.height}</p>
                                    <p className="card-text">Width: {plant.width}</p>
                                    <p className="card-text">Hardiness Zone: {plant.zones}</p>
                                    <Delete plant={plant} />
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </Fragment>
    )
}

export default PlantList;