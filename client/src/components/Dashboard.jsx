import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantInput from "./PlantInput";
import PlantList from "./PlantList";
import Footer from "./Footer";

const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("");

    async function getName () {
        try {
            console.log("This is a check");
            const response = await fetch("http://localhost:5000/dashboard/",
            {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const parseRes = await response.json();

            setName(parseRes.uname);

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
    }, []);

    return(
        <Fragment>
            <div className="container">
                <h1 className="mt-5">Hello, {name}!</h1>
                <PlantInput />
                <PlantList />
            </div>
            <button className="btn btn-primary" onClick={e => logout(e)}>
                        Log Out
                </button>
            <Footer />
        </Fragment>
    )
};

export default Dashboard;
