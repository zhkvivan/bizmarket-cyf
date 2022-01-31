import React from "react";
import styles from "./SliderItem.module.scss";

const SliderItem = ({ label, icon }) => {
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
