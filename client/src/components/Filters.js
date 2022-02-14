import { useState } from "react";
import { useContextBM } from "../context/Context";
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
		setIsFilterOpen(false);
	};

	const [isBadValue, setIsBadValue] = useState(false);

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<span
				className={styles["close-icon"]}
				onClick={() => setIsFilterOpen(false)}
			></span>
			<h2>Filters</h2>
			<div className={styles.content}>
				<div className={styles["filter-type-heading"]}>Filter by price</div>
			</div>
			<div className={styles.form}>
				<form onSubmit={resetFilters}>
					<div className={styles.inputs}>
						<input
							type="number"
							placeholder="min"
							name="min"
							onChange={(e) => {
								if (filterByPrice.max !== 0) {
									if (e.target.value > filterByPrice.max) {
										setIsBadValue(true);
									} else {
										setIsBadValue(false);
									}
								}
								setFilterByPrice({
									...filterByPrice,
									min: e.target.value ? parseInt(e.target.value) : 0,
								});
							}}
						/>
						<span> – </span>
						<input
							type="number"
							placeholder="max"
							name="max"
							onChange={(e) => {
								if (filterByPrice.min !== 0) {
									if (
										e.target.value < filterByPrice.min &&
										e.target.value.length > 0
									) {
										setIsBadValue(true);
									} else {
										setIsBadValue(false);
									}
								}
								setFilterByPrice({
									...filterByPrice,
									max: e.target.value ? parseInt(e.target.value) : 9999999999,
								});
							}}
						/>
					</div>
					{isBadValue ? (
						<div className={styles["bad-value"]}>
							Please enter correct values
						</div>
					) : (
						""
					)}
					<div className={styles["btn-wrap"]}>
						<button
							className={styles["btn-filter-apply"]}
							onClick={(e) => {
								e.preventDefault();
								setIsFilterOpen(false);
							}}
						>
							Apply
						</button>
						<button type="submit" className={styles["btn-filter-reset"]}>
							Reset
						</button>
					</div>
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
