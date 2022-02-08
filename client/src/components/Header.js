import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss";

import logo from "../images/logo.png";
import { useContextBM } from "../context/Context";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const toAddNewAdPage = () => {
		navigate("/add-new-ad");
		resetDraft();
	};

	const { isOpen, setIsOpen, setFormValues } = useContextBM();
	const menuHandler = () => {
		setIsOpen(true);
	};

	const resetDraft = () => {
		if (location.pathname === "/confirm-add-new-ad") {
			setFormValues({
				category: undefined,
				adTitle: "",
				description: "",
				price: "",
				sellerName: "",
				sellerCompany: "",
				sellerPhone: "",
				sellerEmail: "",
				minimumQuantity: "",
			});
		}
	};

	return (
		<header>
			<div className={`${styles.wrapper} ${styles.container}`}>
				<NavLink to="/" onClick={resetDraft}>
					<img src={logo} alt="logo" className={styles.logo} />
				</NavLink>
				<div className={styles.navigation}>
					<NavMenu place={"header"} resetDraft={resetDraft} />
					<div className={styles["btn-wrap"]}>
						<Button label="Post new Ad" action={toAddNewAdPage} />
					</div>
					<span className={styles["menu-icon"]} onClick={menuHandler}></span>
				</div>
			</div>
			{location.pathname === "/" ? "" : <SearchBar />}
		</header>
	);
};

export default Header;
