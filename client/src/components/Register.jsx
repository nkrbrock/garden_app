import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
    return(
        <Fragment>
            <div>
                <Link to="/">Back</Link>
                <h1>This is the registration page!</h1>
                <form>
                    <img className="mb-4" src="" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                        <label>Confirm password</label>
                    </div>

                    <Link to="/user">
                    <button className="btn btn-primary w-100 py-2">Register</button>
                    </Link>
                </form>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Register;