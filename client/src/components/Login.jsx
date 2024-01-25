import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Footer  from "./Footer";

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {email, password};

            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            localStorage.setItem("token", parseRes.jwtToken);

            setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <Fragment>
            <Link to="/">Back</Link>
            <div className="container">
                <form onSubmit={onSubmitForm}>
                    <img className="mb-4" src="" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={e => onChange(e)}
                    />
                    <label>Email address</label>
                    </div>
                    <div className="form-floating">
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => onChange(e)}
                    />
                    <label>Password</label>
                    </div>
                    <button className="btn btn-primary py-2">Log In</button>
                </form>
                <Link to="/register">Register</Link>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Login;