import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Footer  from "./Footer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Fragment>
            <Link to="/">Back</Link>
            <div className="container">
                <form>
                    <img className="mb-4" src="" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Email address</label>
                    </div>
                    <div className="form-floating">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                    </div>

                    <Link to="/user">
                    <button className="btn btn-primary w-100 py-2">Log In</button>
                    </Link>
                </form>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Login;