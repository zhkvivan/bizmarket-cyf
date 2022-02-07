import React from "react";
import { useForm } from "react-hook-form";
import BizMarketApi from "../api/BizMarketApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContextBM } from "../context/Context";

const SearchBar = () => {
	const navigate = useNavigate();
	const { categories } = useContextBM();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const query = form.searchTerm.value;
		const category = form.categories.value;

		navigate(`search?term=${query}`, {
			state: {
				query: query,
				category: category,
			},
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<select id="categories">
					<option value="">Select category</option>
					{categories.map((category) => {
						return (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						);
					})}
				</select>
				<label htmlFor="searchTerm">Search</label>
				<input name="searchTerm" type="search" />

				<input type="submit" />
			</form>
		</div>
	);
};

export default SearchBar;
