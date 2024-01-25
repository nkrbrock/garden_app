import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <h1>The page you are looking for could not be found</h1>
                <Link to="/">
                    <button className="btn btn-dark">
                        Go to main page
                    </button>
                </Link>
            </div>
            <Footer />
        </Fragment>
    );
}

export default NotFound;
