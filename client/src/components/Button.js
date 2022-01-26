import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, action, to }) => {
	const onClickHandler = () => {
		action();
	};
	return (
		<>
			<button className={styles.btn} onClick={onClickHandler}>
				{label}
			</button>
		</>
	);
};

export default Button;
