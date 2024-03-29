import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Portal = () => {
    return(
        <Fragment>
            <div className="container mt-5">
                        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                            <div className="container-fluid py-5">
                                <h1 className="display-5 fw-bold">Welcome!</h1>
                                <p>Note: Logging in with 3rd parties is not currently implemented.</p>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <button className="btn btn-lg btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                                </svg>
                                                Log in with Google
                                            </button>
                                            <button className="btn btn-lg btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                                </svg>
                                                Log in with Twitter
                                            </button>
                                            <button className="btn btn-lg btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                                </svg>
                                                Log in with Facebook
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <Link to="/login">
                                                <button className="btn btn-lg btn-primary portal">
                                                    Login
                                                </button>
                                            </Link>
                                            <Link to="/register">
                                                <button className="btn btn-lg btn-primary portal">
                                                    Register
                                                </button>
                                            </Link>
                                        </div>      
                                    </div>
                                </div>
                                
                                                    
                            </div>
                        </div>
                    </div>
                    <Footer />
        </Fragment>
        
    )
}

export default Portal;
