import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss";

import logo from "../images/logo.png";
import { Context } from "./Context/Context.js";

const Header = () => {
	const popUp = useContext(Context);
	const navigate = useNavigate();
	const toAddNewAdPage = () => navigate("/add-new-ad");

	return (
		<header>
			<div className={`${styles.wrapper} ${styles.container}`}>
				<NavLink to="/">
					<img src={logo} alt="logo" className={styles.logo} />
				</NavLink>
				<div className={styles.navigation}>
					<ul className={styles.menu}>
						<li>
							<NavLink to="/" className={styles.link}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={styles.link}>
								About
							</NavLink>
						</li>
						<li className={styles.link}>
							<button
								style={{ backgroundColor: "transparent", border: "none" }}
								onClick={popUp.togglePopUp}
							>
								Login / Register
							</button>
						</li>
					</ul>
					<div>
						<Button label="Post new Ad" action={toAddNewAdPage} />
					</div>
					{popUp.isOpen && popUp.form}
				</div>
			</div>
		</header>
	);
};

export default Header;
