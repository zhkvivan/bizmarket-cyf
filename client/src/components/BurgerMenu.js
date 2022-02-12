import React from "react";
import { useContextBM } from "../context/Context";
import styles from "./BurgerMenu.module.scss";
import Button from "./Button";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
	const navigate = useNavigate();

	const { isOpen, setIsOpen, setIsFilterOpen, isFilterOpen } = useContextBM();

	const handleClose = () => {
		setIsOpen(false);
		setIsFilterOpen(false);
	};

	const toAddNewAdPage = () => {
		setIsOpen(false);
		navigate("/add-new-ad");
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
		<div
			className={`${isOpen || isFilterOpen ? styles["wrapper-bg"] : ""}`}
			onClick={handleClose}
		>
			<div
				className={`${styles.menu} ${isOpen ? styles.open : ""}`}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<span className={styles["close-icon"]} onClick={handleClose}></span>
				<NavMenu resetDraft={resetDraft} />
				<Button label={"Post new Ad"} action={toAddNewAdPage} />
			</div>
		</div>
	);
};

export default BurgerMenu;
