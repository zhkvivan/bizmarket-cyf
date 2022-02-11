import React, { useState } from "react";
import BizMarketApi from "../api/BizMarketApi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContextBM } from "../context/Context";
import stylesHeader from "./SearchBar.module.scss";
import stylesHome from "./SearchBarHomePage.module.scss";

const SearchBar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { categories, setFormValues } = useContextBM();

	let styles = {
		...stylesHeader,
	};
	if (location.pathname === "/") {
		styles = { ...stylesHeader, ...stylesHome };
	}

	const [searchParams, setSearchParams] = useSearchParams();
	const queryString = searchParams.get("query");
	const categoryId = searchParams.get("categoryId");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			category: categoryId || 0,
			query: queryString || "",
		},
	});

	const onSubmit = (data) => {
		console.log(data);

		navigate(`search?query=${data.query}&categoryId=${data.category}`, {
			state: {
				query: data.query,
				category: data.category,
			},
		});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles["form-inner"]}>
						<div className={styles["select-wrapper"]}>
							<select
								id="categories"
								className={styles.select}
								{...register("category")}
							>
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
							<input
								name="query"
								type="search"
								placeholder="Type here to search"
								{...register("query", {
									required: "Please enter someting to the search field",
									minLength: {
										value: 2,
										message: "Your query is too short",
									},
								})}
							/>
							<div className={styles["btn-wrap"]}>
								<button type="submit" className={styles.btn}></button>
							</div>
						</div>
					</div>
				</form>
				{errors.query && (
					<div className={styles["error-text"]}>{errors.query.message}</div>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
