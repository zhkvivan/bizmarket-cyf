import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Hero.module.scss";

const Hero = () => {
	const navigate = useNavigate();
	const openRegisterPopup = () => {
		navigate("add-new-ad");
	};
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1> Take your business online.</h1>
				<p className={styles["description"]}>
					Post your ads. Find new buyers. Buy from 10 pieces.
				</p>
				<Button label={"Post new Ad"} action={openRegisterPopup} />
			</div>
		</section>
	);
};

export default Hero;
