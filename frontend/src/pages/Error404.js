import React, { useContext } from "react";
import { Link } from "react-router-dom";

import globalContext from "../context/globalContext";
import bg from "../static/img/404.jpg";

const Error404 = () => {
    const { authUser } = useContext(globalContext);

    return (
        <div className="error-page">
            <img className="error-page__image" alt="errorImg" src={bg} />
            <div className="error-page__content">
                <h1 className="error-page__title">
                    Error finding the page.
                </h1>
                <h4 className="error-page__subtitle">
                    {!authUser ? (
                        <>
                            Maybe you could try {" "}
                            <Link className="error-page__link" to="/login">
                                logging in
                            </Link>
                            {" "}to view this page
                        </>
                    ) : (
                        "Not a valid url link"
                    )}
                </h4>
            </div>
        </div>
    );
};

export default Error404;
