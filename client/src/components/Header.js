import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss";

import logo from "../images/logo.png";

const Header = () => {
	return (
		<header>
			<div className={`${styles.wrapper} ${styles.container}`}>
				<Link to="/">
					<img src={logo} alt="logo" className={styles.logo} />
				</Link>
				<div className={styles.navigation}>
					<ul className={styles.menu}>
						<li>
							<Link to="/about" className={styles.link}>
								About
							</Link>
						</li>
					</ul>
					<Button label="Login" />
				</div>
			</div>
		</header>
	);
};

export default Header;
