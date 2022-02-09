import { useContextBM } from "../../context/Context";
import styles from "./Filters.module.scss";

const Filters = () => {
	const { isFilterOpen, setIsFilterOpen, filterByPrice, setFilterByPrice } =
		useContextBM();

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<h2>Filters</h2>
			<input
				type="number"
				placeholder="min"
				name="min"
				onChange={(e) =>
					setFilterByPrice({ ...filterByPrice, min: parseInt(e.target.value) })
				}
			/>
			<input
				type="number"
				placeholder="max"
				name="max"
				onChange={(e) =>
					setFilterByPrice({ ...filterByPrice, max: parseInt(e.target.value) })
				}
			/>
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
