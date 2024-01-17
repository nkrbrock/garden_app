import React, {Fragment} from "react";
import { Link } from "react-router-dom";

function Portal() {
    return(
        <div className="container mt-10">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome!</h1>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <button className="btn btn-lg btn-outline-secondary">
                                    Log in with Google
                                </button>
                                <button className="btn btn-lg btn-outline-secondary">
                                    Log in with Twitter
                                </button>
                                <button className="btn btn-lg btn-outline-secondary">
                                    Log in with Facebook
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <Link to="/login">
                                    <button className="btn btn-lg btn-primary">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/Register">
                                    <button className="btn btn-lg btn-primary">
                                        Register
                                    </button>
                                </Link>
                            </div>      
                        </div>
                    </div>
                    
                                          
                </div>
            </div>
  
        </div>
    )
}

export default Portal;
