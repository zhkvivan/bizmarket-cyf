import React from "react";
import { useForm } from "react-hook-form";
import BizMarketApi from "../api/BizMarketApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContextBM } from "../context/Context";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
	const navigate = useNavigate();
	const { categories } = useContextBM();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const query = form.searchTerm.value;
		const category = form.categories.value;

		navigate(`search?query=${query}&categoryId=${category}`, {
			state: {
				query: query,
				category: category,
			},
		});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<div className={styles["form-inner"]}>
						<div className={styles["select-wrapper"]}>
							<select id="categories" className={styles.select}>
								<option value={"0"}>All categories</option>
								{categories.map((category) => {
									return (
										<option value={category.id} key={category.id}>
											{category.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className={styles.search}>
							<input name="searchTerm" type="search" />
							<div className={styles["btn-wrap"]}>
								<button type="submit" className={styles.btn}></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
