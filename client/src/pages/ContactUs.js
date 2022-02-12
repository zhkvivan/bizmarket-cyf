import React from "react";
import styles from "./About.module.scss";

const ContactUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>Contact Us</h1>
				<div className={styles.content}>
					<p>
						If you need any help, we will be happy to help you. Send your
						questions to help@bizmarket.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
