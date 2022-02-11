import React from "react";
import { useLocation } from "react-router-dom";
import stylesAllPages from "./SliderItem.module.scss";
import stylesCategPage from "./SliderItemCategPage.module.scss";

const SliderItem = ({ label, icon }) => {
	let styles;
	const location = useLocation();
	if (location.pathname === "/") {
		styles = {
			...stylesAllPages,
		};
	} else {
		styles = {
			...stylesCategPage,
		};
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<img src={require(`../images/${icon}`)} alt={label} />
				<span>{label}</span>
			</div>
		</div>
	);
};

export default SliderItem;
