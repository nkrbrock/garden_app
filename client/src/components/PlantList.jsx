import React, {Fragment, useState, useEffect} from "react";
import Delete from "./Delete";

const PlantList = ({allPlants, setPlantsChange}) => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);

    const host = "http://localhost:5000";


    useEffect(() => {
        setLoading(true);
        setPlants(allPlants);
        setTimeout(() => {
            setLoading(false)
        }, 500);
        console.log(allPlants);
    }, [allPlants]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return(
        <Fragment>
            <div className="container plantlist">
                <div className="row">
                    {plants.length !== 0 && plants[0].id !== null && plants.map(plant => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-5"  key={plant.id}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">Common Name: {plant.cname}</p>
                                    <p className="card-text">Scientific Name: {plant.sname}</p>
                                    <p className="card-text">Height: {plant.height}</p>
                                    <p className="card-text">Width: {plant.width}</p>
                                    <p className="card-text">Hardiness Zone: {plant.zones}</p>
                                    <Delete plant={plant} setPlantsChange={setPlantsChange} />
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