import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
	const { categoryName } = useParams();
	return (
		<div className={styles.container}>
			<Breadcrumbs />
			<h1>I am a category {categoryName}</h1>
		</div>
	);
};

export default CategoryPage;
