import React from "react";
import styles from "./SliderItem.module.scss";

const SliderItem = ({ label, icon }) => {
	return (
		<div className={styles.wrapper}>
			<img src={icon} alt={label} />
			<span>{label}</span>
		</div>
	);
};

export default SliderItem;
