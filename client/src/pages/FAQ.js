import React, { useEffect } from "react";
import styles from "./About.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/");
	}, []);

	return <></>;
};

export default FAQ;
