import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./CategoryPage.module.scss";
import { useContextBM } from "../context/Context";
import BizMarketApi from "../api/BizMarketApi";
import AdCard from "../components/AdCard";
import Filters from "../components/Filters";

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
						queryString: "queryString",
						categoryId: categoryId,
					},
				});

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
						adTitle: "Chicken nuggets coca cola burgers pepsi fries",
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
						id: 3,
						adTitle: "Chicken nuggets coca cola burgers pepsi fries",
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
						id: 433,
						adTitle: "Chicken nuggets coca cola burgers pepsi fries",
						sellerName: "John Doe",
						sellerCompany: "Food LTD",
						createdDate: "",
						updatetDate: "",
						expiryDate: "",
						minimumQuantity: "",
						price: 50,
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
						price: 540,
						description: "Sugar - very good sugar!",
						location: "",
						imageURL: undefined,
						categoryId: 1,
						sellerEmail: "test@bizmarket.com",
						sellerPhone: "3434t34634",
					},
				];
				// setCurrentSearchResult(mockResponse);

				console.log(response.data.results);
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
				<Filters />
				{currentSearchResult && currentCategory ? (
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
							{/* {currentSearchResult.map((ad) => {
								return <AdCard product={ad} key={ad.id} />;
							})} */}
							{currentSearchResult.map((ad) => {
								return (
									<>
										{ad.price >= min && ad.price <= max ? (
											<AdCard ad={ad} key={ad.id} />
										) : null}
									</>
								);
							})}
							{/* {data.map((item, index) => (
								<div key={index}>
									{item.price >= min && item.price <= max ? (
										<Cards props={item} />
									) : null}
								</div>
							))} */}
						</div>
					</div>
				) : (
					"Nothing"
				)}
			</div>
		</div>
	);
};

export default CategoryPage;
