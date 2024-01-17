import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
    return(
        <Fragment>
            <h1>Hello, UserName!</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-5">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                            <div className="card-body">
                                <p className="card-text">Common Name: lorum ipsum</p>
                                <p className="card-text">Scientific Name: lorum ipsum</p>
                                <p className="card-text">Description: lorum ipsum</p>
                                <p className="card-text">Height: 12345</p>
                                <p className="card-text">Width: 12345</p>
                                <p className="card-text">Hardiness Zone: 12345</p>
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Link to="/">Log Out</Link>
            <Footer />
        </Fragment>
    )
}

export default Home;