import React, { useEffect, useState } from "react";
import {
	useSearchParams,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { useContextBM } from "../context/Context";
import styles from "./CategoryPage.module.scss";
import Loading from "../components/Loading";
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
		filterByPrice,
		setFormValues,
		isPreloader,
		setIsPreloader,
	} = useContextBM();

	const [searchParams, setSearchParams] = useSearchParams();
	const queryString = searchParams.get("query");
	const categoryId = searchParams.get("categoryId");
	let categoryName;
	if (categoryId && categoryId !== "0") {
		categoryName = categories.filter(
			(category) => category.id === +categoryId
		)[0].name;
	}

	const location = useLocation();
	const navigate = useNavigate();

	// Filter set up
	let min, max;
	if (currentSearchResult.length > 0) {
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
		setFormValues({
			category: undefined,
			adTitle: "",
			description: "",
			price: "",
			sellerName: "",
			sellerCompany: "",
			sellerPhone: "",
			sellerEmail: "",
			minimumQuantity: "",
		});
		const fetchAllAds = async () => {
			try {
				setIsPreloader(true);
				setCurrentSearchResult([]);
				const response = await BizMarketApi.get("/viewads");
				setCurrentSearchResult(response.data.results);
				setIsPreloader(false);
			} catch (error) {
				console.error(error);
			}
		};
		const fetchSearch = async () => {
			try {
				setIsPreloader(true);
				setCurrentSearchResult([]);
				const response = await BizMarketApi.get("/search", {
					params: {
						query: queryString,
						categoryId: categoryId,
					},
				});

				setCurrentSearchResult(response.data.results);
				setIsPreloader(false);
			} catch (error) {
				console.error(error);
			}
		};
		if (queryString != null || categoryId != null) {
			fetchSearch();
		} else {
			fetchAllAds();
		}
	}, [queryString, categoryId]);

	const handleFiltersOpen = () => {
		isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
	};
	const [sortWay, setSortWay] = useState("most popular");

	return (
		<div className={styles.container}>
			<div>
				{currentSearchResult.length > 0 ? (
					<>
						<div className={styles["top-bar"]}>
							<h1 className={styles.h1}>
								{!queryString
									? "Recent ads from all categories:"
									: `${
											currentSearchResult.length
									  } results for "${queryString}" from ${
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
								{/* <div className={styles["sort-wrap"]}>
									<span>Sort by: </span>
									<span> {sortWay}</span>
								</div> */}
							</div>
						</div>
						<div className={styles.inner}>
							<Filters />
							<div className={styles.content}>
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
						</div>
					</>
				) : isPreloader ? (
					<div className={styles.ads}>
						<Loading />
						<Loading />
						<Loading />
					</div>
				) : (
					<div className={styles["no-results-wrap"]}>
						<div className={styles["no-results-inner"]}>
							<h2 className={styles.h2}>
								{`Sorry, we couldn't find anything for the query "${queryString}" in ${
									categoryId === +0
										? "all categories"
										: "the category " + categoryName
								}.`}
							</h2>
							<h3>Try to change your query or category</h3>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchResultPage;
