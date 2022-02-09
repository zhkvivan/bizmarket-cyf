import { useContextBM } from "../../context/Context";
import styles from "./Filters.module.scss";

const Filters = () => {
	const { isFilterOpen, setIsFilterOpen } = useContextBM();

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<h2>Filters</h2>
			<input type="number" placeholder="min" />
			<input type="number" placeholder="max" />
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
