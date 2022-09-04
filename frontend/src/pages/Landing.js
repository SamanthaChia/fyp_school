import React from "react";
import { Link } from "react-router-dom";

import bgImage from "../static/img/bg1.jpg";

const Landing = () => {
    return (
        <div className="main-banner">
            <img className="main-banner__image" alt="landingImg" src={bgImage} />
            <div className="main-banner__content">
                <h1 className="main-banner__title">
                    Working collaboratively, for group projects!
                </h1>
                <h4 className="main-banner__subtitle">
                    Kanban boards to help with project management for students, including
                    gamification to increase motivation amongst members 
                </h4>
                <Link to="/register" className="btn">
                    Sign Up Now!
                </Link>
            </div>
        </div>
    );
};

export default Landing;
