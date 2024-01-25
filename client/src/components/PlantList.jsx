import React, {Fragment, useState, useEffect} from "react";
import Delete from "./Delete";

const PlantList = ({user_id}) => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);

    const host = "http://localhost:5000";

    const getPlants = async() => {
        try {
            //TODO: MAKE DYNAMIC FOR EACH USER
            const response = await fetch(`${host}/dashboard/${user_id}`);
            const jsonData = await response.json();

            setPlants(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        setLoading(true);
        getPlants();
        setTimeout(() => {
            setLoading(false)
        }, 500);
        
    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return(
        <Fragment>
            <div className="container plantlist">
                <div className="row">
                    {plants.map(plant => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-5"  key={plant.id}>
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