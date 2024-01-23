import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PlantInput from "./PlantInput";
import PlantList from "./PlantList";
import Footer from "./Footer";

function Home() {
    return(
        <Fragment>
            <div className="container">
                <PlantInput />
                <PlantList />
                <Link to="/">
                    <button className="btn btn-primary">
                        Log Out
                    </button>
                </Link>
            </div>
            <Footer />
        </Fragment>
    )
};

export default Home;
