import React from "react";
import { useContextBM } from "../context/Context";
import styles from "./BurgerMenu.module.scss";
import Button from "./Button";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
	const navigate = useNavigate();

	const { isOpen, setIsOpen } = useContextBM();
	if (isOpen) {
		console.log("click inside burger menu");
	}
	const handleClose = () => {
		setIsOpen(false);
	};

	const toAddNewAdPage = () => {
		setIsOpen(false);
		navigate("/add-new-ad");
	};

	return (
		<div
			className={`${isOpen ? styles["wrapper-bg"] : ""}`}
			onClick={handleClose}
		>
			<div
				className={`${styles.menu} ${isOpen ? styles.open : ""}`}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<span className={styles["close-icon"]} onClick={handleClose}></span>
				<NavMenu />
				<Button label={"Post new Ad"} action={toAddNewAdPage} />
			</div>
		</div>
	);
};

export default BurgerMenu;
