import React, { useEffect, useState } from "react";
import { Paper, Container, InputBase, IconButton } from "@material-ui/core";

import { Search } from "@material-ui/icons";
import data from "./Data.json";

import "./FilterProduct.scss";
import { string } from "prop-types";
import { Form } from "react-bootstrap";

const FilterProduct = () => {
	const [input, setInput] = useState("");
	const [form, setForm] = useState("");
	useEffect(() => {
		fetch("http://localhost:3100/api/categories")
			.then((res) => console.log("res", res))
			.catch((error) => console.log("error", error));
	});
	const handleSubmit = (e) => {
		console.log("e", e);
	};
	console.log("Form", form);
	console.log("Data", data.activeAds[0].title);
	return (
		<div className="filter-bar">
			<Container>
				<Form.Group controlId="formBasicSelect">
					<Form.Label>Select Norm Type</Form.Label>
					<Form.Control
						as="select"
						value={form}
						onChange={(e) => {
							console.log("e.target.value", e.target.value);
							setForm(e.target.value);
						}}
					>
						<option value="Electronics">Electronics</option>
						<option value="Toys and Games">Toys and Games</option>
					</Form.Control>
				</Form.Group>

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
