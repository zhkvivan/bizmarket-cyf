import React from "react";
import styles from "./NavMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useContextBM } from "../context/Context";

const NavMenu = ({ place, resetDraft }) => {
	const { setIsOpen } = useContextBM();
	return (
		<>
			<ul
				className={`${
					place === "header" ? styles.menu : styles["menu-burger"]
				}`}
			>
				<li
					onClick={() => {
						setIsOpen(false);
						resetDraft();
					}}
				>
					<NavLink
						to="/"
						className={`${
							place === "header" ? styles.link : styles["link-burger"]
						}`}
					>
						Home
					</NavLink>
				</li>
				<li
					onClick={() => {
						setIsOpen(false);
						resetDraft();
					}}
				>
					<NavLink
						to="/search"
						className={`${
							place === "header" ? styles.link : styles["link-burger"]
						}`}
					>
						Search
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={`${
							place === "header" ? styles.link : styles["link-burger"]
						}`}
					>
						About
					</NavLink>
				</li>
				{/* <li className={styles.link}>Login / Register</li> */}
			</ul>
		</>
	);
};

export default NavMenu;
