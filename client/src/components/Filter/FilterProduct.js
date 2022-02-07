import React, { useEffect, useState } from "react";
import { Paper, Container, InputBase, IconButton } from "@material-ui/core";

import { Search } from "@material-ui/icons";
import data from "./Data.json";

import "./FilterProduct.scss";
import { string } from "prop-types";

const FilterProduct = () => {
	const [input, setInput] = useState("");
	useEffect(() => {
		fetch("http://localhost:3100/api/categories")
			.then((res) => console.log("res", res))
			.catch((error) => console.log("error", error));
	});
	const handleSubmit = (e) => {
		console.log("e", e);
	};
	return (
		<div className="filter-bar">
			<form onSubmit={handleSubmit}>
				<select name="categories" value="categories">
					<option value="auto">Auto</option>
					<option value="Elect">Elect</option>
					<option value="phone">Phone</option>
				</select>
				<input type="submit" value="submit" />
			</form>
			<Container>
				<Paper component="form" className="root" onSubmit={() => {}}>
					<InputBase
						className="input"
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search for a product"
						inputProps={{ "aria-label": "Search for a product" }}
					/>

					<IconButton type="submit" aria-label="search">
						<Search />
					</IconButton>
				</Paper>
				{data.activeAds
					.filter((item) => {
						console.log("i", item.title.includes(input));
						if (item.title.toLowerCase().includes(input)) {
							return true;
						}
					})
					.map((item, index) => (
						<div key={index}>
							<h1>{item.title}</h1>
							<p>{item.text}</p>
						</div>
					))}
			</Container>
		</div>
	);
};

export default FilterProduct;