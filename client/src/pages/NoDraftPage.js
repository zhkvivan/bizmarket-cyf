import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./NoDraftPage.module.scss";

const NoDraftPage = () => {
	const navigate = useNavigate();
	const goToPostPage = () => {
		navigate("/add-new-ad");
	};
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Oops!</h1>
			<p>
				It seems that you are looking for your ad's draft? We don't have it. Try
				to create a new one.
			</p>
			<Button label={"Post an Ad"} action={goToPostPage} />
		</div>
	);
};

export default NoDraftPage;
