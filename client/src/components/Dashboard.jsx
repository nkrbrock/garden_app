import React, { Fragment, useEffect, useState } from "react";
import PlantInput from "./PlantInput";
import PlantList from "./PlantList";
import Footer from "./Footer";

const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("")
    const [allPlants, setAllPlants] = useState([]);
    const [plantsChange, setPlantsChange] = useState(false);

    async function getName () {
        try {
            const response = await fetch("http://localhost:5000/dashboard/",
            {
                method: "GET",
                headers: {jwt_token: localStorage.token}
            });

            const parseRes = await response.json();

            setAllPlants(parseRes);

            setName(parseRes[0].uname);

            
        } catch (error) {
            console.error(error.message);
        }
    }

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    };

    useEffect(() => {
        getName();
        setPlantsChange(false);
    }, [plantsChange]);

    return(
        <Fragment>
            <div className="container">
                <h1 className="mt-5">Hello, {name}!</h1>
                <PlantInput setPlantsChange={setPlantsChange}/>
                <PlantList allPlants = {allPlants} setPlantsChange={setPlantsChange} />
                <button className="btn btn-primary" onClick={e => logout(e)}>
                        Log Out
                </button>
            </div>
            
            <Footer />
        </Fragment>
    )
};

export default Dashboard;
