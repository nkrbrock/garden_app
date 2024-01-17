import React, {Fragment} from "react";
import { Link } from "react-router-dom";

function Login() {
    return(
        <Fragment>
            <Link to="/">Back</Link>
            <div className="container">
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

                    <Link to="/user">
                    <button className="btn btn-primary w-100 py-2">Log In</button>
                    </Link>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
            </div>
            
        </Fragment>
    )
}

export default Login;