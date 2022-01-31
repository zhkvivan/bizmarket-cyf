import React from "react";
import Button from "./Button";
import styles from "./Hero.module.scss";

const Hero = () => {
	const openRegisterPopup = () => {
		console.log("Popup should be opend");
	};
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1> Take your business online.</h1>
				<p className={styles["description"]}>
					Post your ads. Find new buyers. Buy from 10 pieces.
				</p>
				{/* <a href="/login">
					<button type="button">Create Your Store</button>
				</a> */}
				<Button label={"Create Your Store"} action={openRegisterPopup} />
			</div>
		</section>
	);
};

export default Hero;
