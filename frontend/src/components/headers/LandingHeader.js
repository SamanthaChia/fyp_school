import React from 'react';
import { Link } from "react-router-dom";

import logoFYP from '../../static/img/logoFYP.png';

const LandingHeader = () => {
	return (
		<header className="landing-header">
			<div className="landing-header__section">
				<Link to="/" style={{backgroundColor:"transparent"}}>
					<img className="landing-header__logo" alt="logoImage" src={logoFYP} />
				</Link>
			</div>

			<div className="landing-header__section">
				<ul className="landing-header__list">
					<li className="landing-header__li">
						<Link to="/login">
							Login
						</Link>
					</li>
					<li className="landing-header__li">
						<Link to="/register" className="btn">
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default LandingHeader;
