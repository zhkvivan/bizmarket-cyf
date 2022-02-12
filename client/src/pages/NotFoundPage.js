import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
	const navigate = useNavigate();
	const goTwoPagesBack = () => {
		navigate(-1);
	};
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>404 Page Not Found</h1>
				<Button label={"Back"} action={goTwoPagesBack} />
			</div>
		</div>
	);
};

export default NotFoundPage;
