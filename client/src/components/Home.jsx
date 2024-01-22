import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import PlantInput from "./PlantInput";
import PlantList from "./PlantList";
import Footer from "./Footer";

function Home() {
    return(
        <Fragment>
            <PlantInput />
            <PlantList />
            <Link to="/">
                <button className="btn btn-primary w-100 py-2">
                    Log Out
                </button>
            </Link>
            <Footer />
        </Fragment>
    )
};

export default Home;
