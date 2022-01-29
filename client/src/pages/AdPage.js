import React from "react";
import styles from "./AdPage.module.scss";
import { useLocation, Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const AdPage = () => {
	const product = {
		id: 1,
		adTitle: "Sugar",
		createdDate: "",
		updatetDate: "",
		expiryDatae: "",
		quantity: "",
		description: "Sugar - very good sugar!",
		location: "",
		imageURL: "",
		categoryId: 1,
	};

	const categoryName = "Automotive";

	console.log(useLocation());
	const { id } = useParams();
	console.log();
	return (
		<>
			<div className={styles.container}>
				<Breadcrumbs />
				<h1>I am an ad with id {id}</h1>
			</div>
		</>
	);
};

export default AdPage;
