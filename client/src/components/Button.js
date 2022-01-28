import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, action, bgColor }) => {
	const onClickHandler = () => {
		action();
	};

	return (
		<>
			<button
				className={`${styles.btn} ${
					bgColor ? styles[bgColor] : styles["bg-color"]
				}`}
				onClick={onClickHandler}
			>
				{label}
			</button>
		</>
	);
};

export default Button;
