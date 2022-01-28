import React from "react";
import styles from "./Banner.module.scss";
import Button from "./Button";

const Banner = () => {
	return (
		<section className={styles.wrapper}>
			<div className={`${styles.inner} ${styles.container}`}>
				<h2>Find what you need</h2>
				<p>
					On our marketplace you will be able to find suppliers who are ready to
					sell small wholesale.
				</p>
				<p>No extra charges. Just buy and sell.</p>
				<div className={styles["btn-wrap"]}>
					<Button bgColor={"banner-btn"} label={"Search"} />
				</div>
			</div>
		</section>
	);
};

export default Banner;
