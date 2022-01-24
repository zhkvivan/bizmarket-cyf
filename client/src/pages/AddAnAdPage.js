import React, { useState } from "react";
import styles from "./AddAnAdPage.module.scss";
import dropdownArrow from "../images/dropdownArrow.png";

const AddAnAdPage = () => {
	const [category, setCategory] = useState("Select category");

	const [adName, setAdName] = useState("");
	const [nameCounter, setNameCounter] = useState("0");
	const nameHandler = (e) => {
		setAdName(e.target.value);
		setNameCounter(e.target.value.length);
	};

	return (
		<div className={styles["page-wrap"]}>
			<div className={styles.container}>
				<h1>Post new Ad</h1>
				<form>
					<div className={styles["field-base"]}>
						<label htmlFor="categories">Categories:</label>
						<div className={styles["select-wrapper"]}>
							<select
								id="categories"
								value={category}
								onChange={(e) => {
									setCategory(e.target.value);
								}}
								className={styles.select}
							>
								<option disabled>Select category</option>
								<option value="Automotive">Automotive</option>
								<option value="Electronics">Electronics</option>
								<option value="Fashion, Clothing">Fashion, Clothing</option>
								<option value="Floral, Garden">Floral, Garden</option>
								<option value="Food, Drinks">Food, Drinks</option>
								<option value="Health, Beauty">Health, Beauty</option>
								<option value="Home, Decor">Home, Decor</option>
								<option value="Industial, Materials">
									Industial, Materials
								</option>
								<option value="Pets, Animals">Pets, Animals</option>
								<option value="Sports, Outdoors">Sports, Outdoors</option>
								<option value="Toys, Games">Toys, Games</option>
								<option value="Others">Others</option>
							</select>
						</div>
					</div>
					<div className={styles["field-base"]}>
						<label htmlFor="name">Name of the Ad:</label>
						<input
							type="text"
							placeholder="Type here.."
							value={adName.name}
							onChange={nameHandler}
							maxLength={100}
						/>
						<span className={styles.remaining}>
							{100 - nameCounter} characters remaining
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAnAdPage;
