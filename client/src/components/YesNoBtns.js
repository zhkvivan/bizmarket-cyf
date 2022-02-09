import React from "react";
import styles from "./YesNoBtns.module.scss";

const YesNoBtns = ({ yesAction, yesLable, noAction, noLable }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles["no-btn"]} onClick={noAction}>
				{noLable}
			</button>
			<button className={styles["yes-btn"]} onClick={yesAction}>
				{yesLable}
			</button>
		</div>
	);
};

export default YesNoBtns;
