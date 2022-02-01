import React from "react";
import styles from "./AdCard.module.scss";

const AdCard = () => {
	return (
		<div className={styles.wrap}>
			<div className={styles["img-wrap"]}>
				<img src={""} alt="" className={styles.photo} />
			</div>
		</div>
	);
};

export default AdCard;
