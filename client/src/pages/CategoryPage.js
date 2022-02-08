import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./CategoryPage.module.scss";
import { useContextBM } from "../context/Context";
import BizMarketApi from "../api/BizMarketApi";
import AdCard from "../components/AdCard";

const CategoryPage = () => {
	const { categoryId } = useParams();

	const {
		categories,
		currentCategory,
		setCurrentCategory,
		currentSearchResult,
		setCurrentSearchResult,
	} = useContextBM();

	if (categories.length > 0) {
		const category = categories.filter(
			(category) => category.id === +categoryId
		)[0];

		setCurrentCategory(category);
	}

	const [sortWay, setSortWay] = useState("most popular");

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				const response = await BizMarketApi.get("/category", {
					params: {
						categoryId: currentCategory.id,
					},
				});
				// console.log(response);

				const mockResponse = [
					{
						id: 1,
						adTitle: "Sugar",
						sellerName: "John Doe",
						sellerCompany: "Food LTD",
						createdDate: "",
						updatetDate: "",
						expiryDate: "",
						minimumQuantity: "",
						price: 5,
						description: "Sugar - very good sugar!",
						location: "",
						imageURL: undefined,
						categoryId: 1,
						sellerEmail: "test@bizmarket.com",
						sellerPhone: "3434t34634",
					},
					{
						id: 4,
						adTitle: "Chicken nuggets",
						sellerName: "John Doe",
						sellerCompany: "Food LTD",
						createdDate: "",
						updatetDate: "",
						expiryDate: "",
						minimumQuantity: "",
						price: 5,
						description: "Sugar - very good sugar!",
						location: "",
						imageURL: undefined,
						categoryId: 1,
						sellerEmail: "test@bizmarket.com",
						sellerPhone: "3434t34634",
					},
					{
						id: 41,
						adTitle: "iMac 2022",
						sellerName: "Tim Cook",
						sellerCompany: "Food LTD",
						createdDate: "",
						updatetDate: "",
						expiryDate: "",
						minimumQuantity: "",
						price: 5,
						description: "Sugar - very good sugar!",
						location: "",
						imageURL: undefined,
						categoryId: 1,
						sellerEmail: "test@bizmarket.com",
						sellerPhone: "3434t34634",
					},
				];

				setCurrentSearchResult(mockResponse);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const ad = {
		id: 1,
		adTitle: "Sugar",
		sellerName: "John Doe",
		sellerCompany: "Food LTD",
		createdDate: "",
		updatetDate: "",
		expiryDate: "",
		minimumQuantity: "",
		price: 5,
		description: "Sugar - very good sugar!",
		location: "",
		imageURL: undefined,
		categoryId: 1,
		sellerEmail: "test@bizmarket.com",
	};

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const handleFiltersOpen = () => {
		isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
	};

	return (
		<div className={styles.container}>
			{/* <Breadcrumbs /> */}
			<div className={styles.inner}>
				<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
					<h2>Filters</h2>
				</div>
				{currentCategory ? (
					<div className={styles.content}>
						<div className={styles["top-bar"]}>
							<h1 className={styles.h1}>
								Most recent ads in category {currentCategory.name}
							</h1>
							<div className={styles.options}>
								<span
									onClick={handleFiltersOpen}
									className={styles["filters-toggle"]}
								>
									Filters
								</span>
								<div className={styles["sort-wrap"]}>
									<span>Sort by: </span>
									<span> {sortWay}</span>
								</div>
							</div>
						</div>
						<div className={styles.ads}>
							<AdCard product={ad} />
							<AdCard product={ad} />
							<AdCard product={ad} />
							<AdCard product={ad} />
							<AdCard product={ad} />
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default CategoryPage;
