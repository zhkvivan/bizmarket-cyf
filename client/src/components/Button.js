import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, action, color }) => {
	const onClickHandler = () => {
		action();
	};

	return (
		<>
			<button
				style={color ?? { backgroundColor: "green" }}
				className={styles.btn}
				onClick={onClickHandler}
			>
				{label}
			</button>
		</>
	);
};

export default Button;
