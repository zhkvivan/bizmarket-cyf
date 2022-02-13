import React from "react";
import styles from "./About.module.scss";

const CookiePolicy = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>Cookie Policy</h1>
				<div className={styles.content}>
					<p>We don't save any cookies, so you shouldn't worry about it!</p>
				</div>
			</div>
		</div>
	);
};

export default CookiePolicy;
