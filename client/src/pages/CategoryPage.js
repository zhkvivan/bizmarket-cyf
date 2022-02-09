import Filters from "../components/CategoryPage/Filters";
import Cards from "../components/CategoryPage/Cards";
import styles from "./CategoryPage.module.scss";
import data from "../components/CategoryPage/Data.json";
import { useContextBM } from "../context/Context";

const CategoryPage = () => {
	const { filterByPrice } = useContextBM();
	const max = data
		.map((item) => {
			return item.price;
		})
		.reduce((a, b) => {
			return Math.max(a, b);
		});
	const min = data
		.map((item) => {
			return item.price;
		})
		.reduce((a, b) => {
			return Math.min(a, b);
		});

	console.log("max", max);
	console.log("min", min);
	console.log("filterByPrice", filterByPrice.min === 0);

	// const { filterByPrice, setFilterByPrice } = useContextBM();
	// const maximum =
	// 	filterByPrice.max === 0
	// 		? data.reduce((prev, current) => {
	// 				return prev.price > current.price ? prev : current;
	// 		  })
	// 		: filterByPrice.max;
	// const minimum = data.reduce((prev, current) => {
	// 	return prev.price < current.price ? prev : current;
	// });

	// setFilterByPrice(maximum.price);

	// console.log("max", maximum);
	// console.log("min", minimum);
	// console.log("f", filterByPrice.min);

	// const filtered = data.filter((element) => {
	// 	return element.price >= minimum.price && element.price <= maximum.price
	// 		? true
	// 		: false;
	// });

	// console.log("filtered", filtered);
	// console.log("F", filterByPrice.max !== 0 ? 1 : 2);

	return (
		<>
			<Filters />
			<div className={styles.ads}>
				{/* <Cards props={data} /> */}
				{data.map((item, index) => (
					<div key={index}>
						<Cards props={item} />
					</div>
				))}
				{/* {data.map((item, index) => {
					return (
						<div key={index}>
							<h3>{item.price}</h3>
						</div>
					);
				})} */}
			</div>
		</>
	);
};

export default CategoryPage;

// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs";
// import styles from "./CategoryPage.module.scss";
// import { useContextBM } from "../context/Context";
// import BizMarketApi from "../api/BizMarketApi";
// import AdCard from "../components/AdCard";
// import Filters from "../components/CategoryPage/Filters";

// const CategoryPage = () => {
// 	const { categoryId } = useParams();

// 	const {
// 		categories,
// 		currentCategory,
// 		setCurrentCategory,
// 		currentSearchResult,
// 		setCurrentSearchResult,
// 		isFilterOpen,
// 		setIsFilterOpen,
// 	} = useContextBM();

// 	if (categories.length > 0) {
// 		const category = categories.filter(
// 			(category) => category.id === +categoryId
// 		)[0];

// 		setCurrentCategory(category);
// 	}

// 	const [sortWay, setSortWay] = useState("most popular");

// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 		const fetchData = async () => {
// 			try {
// 				// const response = await BizMarketApi.get("/category", {
// 				// 	params: {
// 				// 		categoryId: currentCategory.id,
// 				// 	},
// 				// });
// 				// console.log(response);

// 				const mockResponse = [
// 					{
// 						id: 1,
// 						adTitle: "Sugar",
// 						sellerName: "John Doe",
// 						sellerCompany: "Food LTD",
// 						createdDate: "",
// 						updatetDate: "",
// 						expiryDate: "",
// 						minimumQuantity: "",
// 						price: 5,
// 						description: "Sugar - very good sugar!",
// 						location: "",
// 						imageURL: undefined,
// 						categoryId: 1,
// 						sellerEmail: "test@bizmarket.com",
// 						sellerPhone: "3434t34634",
// 					},
// 					{
// 						id: 4,
// 						adTitle: "Chicken nuggets",
// 						sellerName: "John Doe",
// 						sellerCompany: "Food LTD",
// 						createdDate: "",
// 						updatetDate: "",
// 						expiryDate: "",
// 						minimumQuantity: "",
// 						price: 5,
// 						description: "Sugar - very good sugar!",
// 						location: "",
// 						imageURL: undefined,
// 						categoryId: 1,
// 						sellerEmail: "test@bizmarket.com",
// 						sellerPhone: "3434t34634",
// 					},
// 					{
// 						id: 41,
// 						adTitle: "iMac 2022",
// 						sellerName: "Tim Cook",
// 						sellerCompany: "Food LTD",
// 						createdDate: "",
// 						updatetDate: "",
// 						expiryDate: "",
// 						minimumQuantity: "",
// 						price: 5,
// 						description: "Sugar - very good sugar!",
// 						location: "",
// 						imageURL: undefined,
// 						categoryId: 1,
// 						sellerEmail: "test@bizmarket.com",
// 						sellerPhone: "3434t34634",
// 					},
// 				];

// 				setCurrentSearchResult(mockResponse);
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};
// 		fetchData();
// 	}, []);

// 	const ad = {
// 		id: 1,
// 		adTitle: "Sugar",
// 		sellerName: "John Doe",
// 		sellerCompany: "Food LTD",
// 		createdDate: "",
// 		updatetDate: "",
// 		expiryDate: "",
// 		minimumQuantity: "",
// 		price: 5,
// 		description: "Sugar - very good sugar!",
// 		location: "",
// 		imageURL: undefined,
// 		categoryId: 1,
// 		sellerEmail: "test@bizmarket.com",
// 	};

// 	const handleFiltersOpen = () => {
// 		isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
// 	};

// 	return (
// 		<div className={styles.container}>
// 			{/* <Breadcrumbs /> */}
// 			<div className={styles.inner}>
// 				<Filters />
// 				{currentSearchResult ? (
// 					<div className={styles.content}>
// 						<div className={styles["top-bar"]}>
// 							<h1 className={styles.h1}>
// 								Most recent ads in category {currentCategory.name}
// 							</h1>
// 							<div className={styles.options}>
// 								<span
// 									onClick={handleFiltersOpen}
// 									className={styles["filters-toggle"]}
// 								>
// 									Filters
// 								</span>
// 								<div className={styles["sort-wrap"]}>
// 									<span>Sort by: </span>
// 									<span> {sortWay}</span>
// 								</div>
// 							</div>
// 						</div>
// 						<div className={styles.ads}>
// 							{currentSearchResult.map((ad) => {
// 								return <AdCard product={ad} key={ad.id} />;
// 							})}
// 						</div>
// 					</div>
// 				) : (
// 					"Nothing"
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default CategoryPage;
