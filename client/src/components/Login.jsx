import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Footer  from "./Footer";
import { toast } from "react-toastify";

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

            const response = await fetch("http://localhost:5000/authentication/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("login successful");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }

            
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <Fragment>
            <div className="container">
                <Link className="navigation" to="/">Back</Link>
                <form onSubmit={onSubmitForm}>
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
                <Link className="navigation" to="/register">Register</Link>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Login;