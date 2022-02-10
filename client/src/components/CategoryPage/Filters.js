import { useContextBM } from "../../context/Context";
import styles from "./Filters.module.scss";

const Filters = () => {
	const { isFilterOpen, setIsFilterOpen, filterByPrice, setFilterByPrice } =
		useContextBM();

	const resetFilters = (e) => {
		e.preventDefault();
		const form = e.target;
		setFilterByPrice({ min: 0, max: 0 });
		form.min.value = "";
		form.max.value = "";
	};

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<h2>Filters</h2>
			<div className={styles.content}>
				<div className={styles["filter-type-heading"]}>Filter by price</div>
			</div>
			<div className={styles.inputs}>
				<form onSubmit={resetFilters}>
					<input
						type="number"
						placeholder="min"
						name="min"
						onChange={(e) =>
							setFilterByPrice({
								...filterByPrice,
								min: e.target.value ? parseInt(e.target.value) : 0,
							})
						}
					/>
					<span> — </span>
					<input
						type="number"
						placeholder="max"
						name="max"
						onChange={(e) =>
							setFilterByPrice({
								...filterByPrice,
								max: e.target.value ? parseInt(e.target.value) : 0,
							})
						}
					/>
					<button type="submit">Reset filters</button>
				</form>
			</div>
		</div>
	);
};

export default Filters;

// import RAeact, { useState } from "react";
// import { useContextBM } from "../../context/Context";
// import styles from "./Filters.module.scss";

// const Filters = () => {
// 	const { isFilterOpen, setIsFilterOpen } = useContextBM();

// 	return (
// 		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
// 			<h2>Filters</h2>
// 		</div>
// 	);
// };

// export default Filters;
