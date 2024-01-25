import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Register = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        uname: "",
        password: "",
        email: ""
    });

    const {fname, lname, uname, password, email } = inputs;

    const onChange = e => {
        setInputs(
            {...inputs, [e.target.name]: e.target.value}
            )
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {fname, lname, uname, password, email,};

            const response = await fetch("http://localhost:5000/auth/register",
            {
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
    }

    return(
        <Fragment>
            <div className="container">
                <Link to="/">Back</Link>
                <h1 className="text-center my-5">Register</h1>
                <form onSubmit={onSubmitForm}>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="fname" 
                            placeholder="First Name" 
                            value={fname}
                            onChange={e => onChange(e)}
                        />
                        <label>First name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="lname" 
                            placeholder="Last Name" 
                            value={lname}
                            onChange={e => onChange(e)}
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="uname" 
                            placeholder="Username" 
                            value={uname}
                            onChange={e => onChange(e)}
                        />
                        <label>Username</label>
                    </div>
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

                    <button 
                        className="btn btn-primary w-100 py-2"
                    >
                        Register
                    </button>
                </form>
                <Link to="/login">Log In</Link>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Register;