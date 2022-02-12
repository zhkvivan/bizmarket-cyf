import React from "react";
import styles from "./About.module.scss";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>About us</h1>
				<div className={styles.content}>
					<p>
						Our platform is powered by real people – buying, selling, searching
						and connecting. So, the first rule of BizMarket is to be respectful,
						be kind and be helpful to each other. We reserve the right to block
						any users who are reported for abusive, harmful or discriminatory
						content. It’s important to us that our site is safe, and we have
						several measures in place to keep it that way. To help our community
						stay safe, aware, and informed we have extensive safety information
						on our site, and you can report any worrying activity to us via our
						Help Desk. But we encourage everyone to use their best judgment and
						to walk away if anything about a transaction doesn’t feel right to
						you. If it seems too good to be true, it probably is.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
