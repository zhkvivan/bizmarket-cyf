import React from "react";
import styles from "./AdPage.module.scss";
import { useParams } from "react-router-dom";

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

	const { id } = useParams();

	console.log("aa");
	return (
		<>
			<div>Breadcrumbs</div>
			<div className={styles.content}>
				<h1>Sugar</h1>
			</div>
		</>
	);
};

export default AdPage;
