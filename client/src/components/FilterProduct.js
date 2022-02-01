import React from "react";
import { Paper, Container, InputBase, IconButton } from "@material-ui/core";

import { Search } from "@material-ui/icons";

{
	/*import SelectCategory from "./SelectCategory";*/
}
import "./FilterProduct.scss";

// const FilterProduct = () => {
// 	return (
// 		<>
// 			<h1>FilterProduct</h1>
// 		</>
// 	);
// };

const FilterProduct = () => {
	return(
<div className="filter-bar">
		<Container>
			<Paper component="form" className="root" onSubmit={() => {}}>
				<SelectCategory />
				<InputBase
					className="input"
					onChange={() => {}}
					placeholder="Search for a product"
					inputProps={{ "aria-label": "Search for a product" }}
				/>
				<IconButton type="submit" aria-label="search">
					{/*<Search />)*/}
				</IconButton>
			</Paper>
		</Container>
	</div>
	)
	
};

export default FilterProduct;
