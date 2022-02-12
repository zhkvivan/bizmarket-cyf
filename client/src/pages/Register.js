import React from "react";
import styles from "./About.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const btnHandler = () => {
		navigate("/add-new-ad");
	};
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>Register</h1>
				<div className={styles.content}>
					<p>You don't need to register to post an ad in our website.</p>
					<Button label={"Post new Ad"} action={btnHandler} />
				</div>
			</div>
		</div>
	);
};

export default Register;
