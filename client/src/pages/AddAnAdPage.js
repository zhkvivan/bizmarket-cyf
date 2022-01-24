import React, { useState } from "react";
import styles from "./AddAnAdPage.module.scss";
import dropdownArrow from "../images/dropdownArrow.png";

const AddAnAdPage = () => {
	const [category, setCategory] = useState("Select category");

	const [adTitle, setAdTitle] = useState("");
	const [nameCounter, setNameCounter] = useState("0");
	const titleHandler = (e) => {
		setAdTitle(e.target.value);
		setNameCounter(e.target.value.length);
	};

	const [description, setDescription] = useState("");
	const [descriptionCounter, setDescriptionCounter] = useState("0");
	const descriptionHandler = (e) => {
		setDescription(e.target.value);
		setDescriptionCounter(e.target.value.length);
	};

	const [price, setPrice] = useState(0);
	const priceHandler = (e) => {
		setPrice(e.target.value);
	};

	return (
		<div className={styles["page-wrap"]}>
			<div className={styles.container}>
				<h1>Post new Ad</h1>
				<form>
					{/* Category */}
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
					{/* Title */}
					<div className={styles["field-base"]}>
						<label htmlFor="title">Ad title:</label>
						<input
							type="text"
							placeholder="Type here.."
							value={adTitle}
							onChange={titleHandler}
							maxLength={100}
						/>
						<span className={styles.remaining}>
							{100 - nameCounter} characters remaining
						</span>
					</div>
					{/* Description */}
					<div className={styles["field-base"]}>
						<label htmlFor="description">Description:</label>
						<textarea
							placeholder="Type here.."
							value={description}
							onChange={descriptionHandler}
							maxLength={1000}
						/>
						<span className={styles.remaining}>
							{1000 - descriptionCounter} characters remaining
						</span>
					</div>
					<div className={styles["field-base"]}>
						<label htmlFor="price">Price:</label>
						<div className={styles["price-wrap"]}>
							<input
								type="number"
								placeholder="0"
								value={price}
								onChange={priceHandler}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAnAdPage;
