import React, { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import AuthError from "../components/modals/AuthError";
import logo from "../static/img/logoFYP.png";
import bg from "../static/img/registrationLogin.jpg";
import { Link } from "react-router-dom";


const Login = ({ login }) => {
    const [errmsgs, setErrMsgs] = useState({ msgs: {}, err: false });
    return (
        <>
            <div className="out-of-focus"></div>
            {errmsgs.err ? (
                <AuthError
                    position={{ left: "50%", right: "50%" }}
                    msgs={errmsgs.msgs}
                    setErrMsgs={setErrMsgs}
                    signup={errmsgs.signup}
                />
            ) : null}
            <div className="sidebar sidebar--left">
                <div className="sidebar-logo">
                    <Link to="/" style={{ backgroundColor: "transparent" }}>
                        <img
                            className="sidebar-logo__img"
                            src={logo}
                            alt="logoImg"
                        />
                    </Link>
                    <p className="headerP" >{login ? "Login" : "Registration"}</p>
                </div>
                {login ? (
                    <LoginForm setErrMsgs={setErrMsgs} />
                ) : (
                    <RegisterForm setErrMsgs={setErrMsgs} />
                )}
            </div>
            <div className="sideImage" id="sideImage-container">
                <div id="sideImage">
                    <img className="sideImage__img" alt="sideImage" src={bg} />
                </div>
                <div className="splash-text">
                    <h1 className="splash-text__h1">Registration/Login</h1>
                    <p>Both are using same component page</p>
                </div>
            </div>
        </>
    );
};

Login.defaultProps = {
    login: true,
};

export default Login;
