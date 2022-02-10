import React, { useEffect, useState } from "react";
import {
	useSearchParams,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { useContextBM } from "../context/Context";
import styles from "./CategoryPage.module.scss";

import BizMarketApi from "../api/BizMarketApi";
import Filters from "../components/Filters";
import AdCard from "../components/AdCard";

const SearchResultPage = () => {
	const {
		categories,
		currentSearchResult,
		setCurrentSearchResult,
		isFilterOpen,
		setIsFilterOpen,
	} = useContextBM();

	const [searchParams, setSearchParams] = useSearchParams();
	const queryString = searchParams.get("query");
	const categoryId = searchParams.get("categoryId");

	console.log(categoryId);
	let categoryName;
	if (categoryId !== "0") {
		categoryName = categories.filter(
			(category) => category.id === +categoryId
		)[0].name;
	}

	console.log(categoryName);

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				// const response = await BizMarketApi.get("/search", {
				// 	queryString: queryString,
				// 	categoryId: categoryId,
				// });

				// console.log(response.data.results);
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
					{
						id: 411,
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
				];

				setCurrentSearchResult(mockResponse);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const handleFiltersOpen = () => {
		isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
	};
	const [sortWay, setSortWay] = useState("most popular");

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<Filters />
				{currentSearchResult ? (
					<div className={styles.content}>
						<div className={styles["top-bar"]}>
							<h1 className={styles.h1}>
								{!queryString
									? "Recent ads"
									: `${
											currentSearchResult.length
									  } results for "${queryString}" in ${
											categoryId === "0"
												? "all categories"
												: `category ${categoryName}`
									  }`}
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
								return <AdCard product={ad} key={ad.id} />;
							})}
						</div>
					</div>
				) : (
					"Nothing is here"
				)}
			</div>
		</div>
	);
};

export default SearchResultPage;
