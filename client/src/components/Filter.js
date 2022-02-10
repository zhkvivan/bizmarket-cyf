import React, { useEffect } from "react";
import { useContextBM } from "../context/Context";
import styles from "./CategoryPage/Filters.module.scss";

const Filter = () => {
	const {
		currentSearchResult,
		setCurrentSearchResult,
		isFilterOpen,
		setIsFilterOpen,
		filterByPrice,
		setFilterByPrice,
	} = useContextBM();

	const updateFilter = (e) => {
		e.preventDefault();
		const form = e.target;
		console.log(form);
		setFilterByPrice({
			min: form.min.value ? parseInt(form.min.value) : 0,
			max: form.max.value ? parseInt(form.max.value) : 0,
		});
	};

	useEffect(() => {
		if (currentSearchResult) {
			setCurrentSearchResult((prev) => {
				const next = prev.filter((product) => {
					product.price >= filterByPrice.min &&
						product.price <= filterByPrice.max;
				});
				return next;
			});
		}
	}, []);

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<h2>Filters</h2>
			<form onSubmit={updateFilter}>
				<input type="number" placeholder="min" name="min" />
				<input type="number" placeholder="max" name="max" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Filter;
