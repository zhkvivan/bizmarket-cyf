import React, { useState } from "react";
import { useContextBM } from "../../context/Context";
import styles from "./Filters.module.scss";

const Filters = () => {
	const { isFilterOpen, setIsFilterOpen } = useContextBM();

	return (
		<div className={isFilterOpen ? styles["filter-open"] : styles.filters}>
			<h2>Filters</h2>
		</div>
	);
};

export default Filters;
