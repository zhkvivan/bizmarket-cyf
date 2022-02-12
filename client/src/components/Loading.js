import React from "react";
import styles from "./Loading.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";

const Loading = () => {
	return (
		<div>
			<div className={styles.wrap}>
				<div className={styles["img-wrap"]}></div>
				<div className={styles.content}>
					<div className={styles.info}>
						<h3>titletitletitle</h3>
						<div className={styles.from}>from:</div>
						<button className={styles.btn}>Show details</button>
					</div>
					<div className={styles["price-wrapper"]}>
						<div>from</div>
						<div className={styles.price}>£ 5</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
