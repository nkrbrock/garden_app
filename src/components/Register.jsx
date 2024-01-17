import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div>
            <Link to="/">Back</Link>
            <h1>This is the registration page!</h1>
            <Link to="/user">Register</Link>
        </div>
    );
}

export default Register;