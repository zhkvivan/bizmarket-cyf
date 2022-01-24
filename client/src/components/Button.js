import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, onClick }) => {
	return (
		<>
			<button className={styles.btn} onClick={onClick}>
				{label}
			</button>
		</>
	);
};

export default Button;
