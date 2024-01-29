import React, { Fragment, useEffect, useState } from "react";
import PlantInput from "./PlantInput";
import PlantList from "./PlantList";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("")

    const token = localStorage.token;
    const decoded = jwtDecode(token);

    async function getName () {
        try {
            const response = await fetch("http://localhost:5000/dashboard/",
            {
                method: "POST",
                headers: {jwt_token: localStorage.token}
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
        toast.success("Logged out successfully");
    };

    useEffect(() => {
        getName();
    }, []);

    

    return(
        <Fragment>
            <div className="container">
                <h1 className="mt-5">Hello, {name}!</h1>
                <PlantInput user_id = {decoded.user.id}/>
                <PlantList user_id = {decoded.user.id}/>
                <button className="btn btn-primary" onClick={e => logout(e)}>
                        Log Out
                </button>
            </div>
            
            <Footer />
        </Fragment>
    )
};

export default Dashboard;
