import React from "react";
import styles from "./CongratulationPage.module.scss";

const CongratulationPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Congratulations! You've just created an Ad!</h1>
			</div>
		</div>
	);
};

export default CongratulationPage;
