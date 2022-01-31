import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./CategoryPage.module.scss";
import { useContextBM } from "../context/Context";
import BizMarketApi from "../api/BizMarketApi";

const CategoryPage = () => {
	const { categoryName } = useParams();

	const { categories } = useContextBM();
	console.log(categories);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await BizMarketApi.get("/search");
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className={styles.container}>
			{/* <Breadcrumbs /> */}
			<h1>I am a category {categoryName}</h1>
		</div>
	);
};

export default CategoryPage;
