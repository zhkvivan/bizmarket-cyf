import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./CategoryPage.module.scss";
import { useContextBM } from "../context/Context";
import BizMarketApi from "../api/BizMarketApi";
import AdCard from "../components/AdCard";
import Filters from "../components/Filters";
import { Slider } from "../components/Slider";

const CategoryPage = () => {
	const { categoryId } = useParams();

	const {
		categories,
		currentCategory,
		setCurrentCategory,
		currentSearchResult,
		setCurrentSearchResult,
		isFilterOpen,
		setIsFilterOpen,
		filterByPrice,
	} = useContextBM();

	if (categories.length > 0) {
		const category = categories.filter(
			(category) => category.id === +categoryId
		)[0];

		setCurrentCategory(category);
	}

	const [sortWay, setSortWay] = useState("most popular");

	let min, max;
	if (currentSearchResult) {
		max =
			filterByPrice.max === 0
				? currentSearchResult
						.map((item) => {
							return item.price;
						})
						.reduce((a, b) => {
							return Math.max(a, b);
						})
				: filterByPrice.max;
		min =
			filterByPrice.min === 0
				? currentSearchResult
						.map((item) => {
							return item.price;
						})
						.reduce((a, b) => {
							return Math.min(a, b);
						})
				: filterByPrice.min;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await BizMarketApi.get("/category", {
					params: {
						categoryId: categoryId,
					},
				});
				if (response.data.results.length === 0) {
					setCurrentSearchResult(null);
				} else {
					setCurrentSearchResult(response.data.results);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [currentCategory]);

	const handleFiltersOpen = () => {
		isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
	};

	return (
		<div className={styles.container}>
			{/* <Breadcrumbs /> */}
			<div className={styles.inner}>
				{currentSearchResult && currentCategory ? (
					<>
						<Filters />
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
								{currentSearchResult.map((ad) => {
									return (
										<>
											{ad.price >= min && ad.price <= max ? (
												<AdCard ad={ad} key={ad.id} />
											) : null}
										</>
									);
								})}
							</div>
						</div>
					</>
				) : (
					<div className={styles["no-results-wrap"]}>
						<div className={styles["no-results-inner"]}>
							<h2>
								{`There are no ads in category ${
									currentCategory && currentCategory.name
								}.`}
							</h2>
							<h3>Try to choose another one</h3>
							{/* <Link to="/" className={styles.btn}>
								To All Categories
							</Link> */}
						</div>
						<Slider />
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoryPage;
