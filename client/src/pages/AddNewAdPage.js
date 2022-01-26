import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./AddNewAdPage.module.scss";
import iconUpload from "../images/icon-upload.png";
import { useAddNewAd } from "../formContext/AddNewAdContext";

const AddNewAdPage = () => {
	// Getting values from context
	const { data, setValues } = useAddNewAd();

	// Passing form data object to the next page
	const onSubmit = (data) => {
		setValues(data);
		navigate("/confirm-add-new-ad");
	};

	// Defining form
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			category: data.category,
			title: data.title,
			description: data.description,
			price: data.price,
		},
	});

	// Manual registering image
	useEffect(() => {
		register("image");
	}, []);

	const [title, description] = watch(["title", "description"]);

	// // Making img upload and preview
	const fileInputRef = useRef();
	const [image, setImage] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(image);
		} else {
			setPreview(null);
		}
	}, [image]);

	// Cancelation confirm
	const navigate = useNavigate();
	const cancelConfirm = () => {
		if (
			confirm("Are you sure you want to cancel? Draft won't be saved anywhere.")
		) {
			navigate(-1);
		}
	};

	return (
		<div className={styles["page-wrap"]}>
			<div className={styles.container}>
				<h1>Post new Ad</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Category */}
					<div className={styles["field-base"]}>
						<label htmlFor="categories">Categories:</label>
						<div className={styles.flex}>
							<div className={styles["select-wrapper"]}>
								<select
									{...register("category", {
										required: "This field is required",
									})}
									id="categories"
									className={`${styles.select} ${
										errors.category && styles["error-field"]
									}`}
								>
									<option value="">Select category</option>
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
							{/* Error handling message: */}
							<div>
								{errors.category && (
									<span className={styles["error-text"]}>
										{errors.category.message}
									</span>
								)}
							</div>
						</div>
					</div>
					{/* Title */}
					<div className={styles["field-base"]}>
						<label htmlFor="title">Ad title:</label>
						<div className={styles["input-wrapper"]}>
							<input
								{...register("title", {
									required: "This field is required",
									minLength: {
										value: 2,
										message: "Title is too short",
									},
								})}
								className={`${styles.input} ${
									errors.title && styles["error-field"]
								}`}
								type="text"
								placeholder="Type here.."
								maxLength={100}
							/>
							{/* Error handling message: */}
							<div>
								{errors.title && (
									<span className={styles["error-text"]}>
										{errors.title.message}
									</span>
								)}
							</div>
						</div>
						<span className={styles.remaining}>
							{100 - title.length} characters remaining
						</span>
					</div>
					{/* Description */}
					<div className={styles["field-base"]}>
						<label htmlFor="description">Description:</label>
						<div className={styles["input-wrapper"]}>
							<textarea
								{...register("description", {
									required: "This field is required",
									minLength: {
										value: 2,
										message: "Title is too short",
									},
								})}
								className={`${styles.textarea} ${
									errors.description && styles["error-field"]
								}`}
								placeholder="Type here.."
								maxLength={1000}
							/>
							<div>
								{errors.description && (
									<span className={styles["error-text"]}>
										{errors.description.message}
									</span>
								)}
							</div>
						</div>
						<span className={styles.remaining}>
							{1000 - description.length} characters remaining
						</span>
					</div>
					{/* Price */}
					<div className={styles["field-base"]}>
						<label htmlFor="price">Price:</label>
						<div>
							<div className={styles["price-wrap"]}>
								<input
									type="number"
									placeholder="0"
									{...register("price", {
										required: "This field is required",
									})}
									className={`${styles.input} ${
										errors.price && styles["error-field"]
									}`}
								/>
							</div>
							<div>
								{errors.price && (
									<span className={styles["error-text"]}>
										{errors.price.message}
									</span>
								)}
							</div>
						</div>
					</div>
					{/* Image */}
					<div className={styles["field-base"]}>
						<label htmlFor="image">Image:</label>
						<div>
							<input
								style={{ display: "none" }}
								type="file"
								accept="image/*"
								ref={fileInputRef}
								onChange={(e) => {
									setValue("image", e.target.files);
									const file = e.target.files[0];
									if (file) {
										setImage(file);
									} else {
										setImage(null);
									}
								}}
							/>

							<button
								className={styles["upload-btn"]}
								onClick={(e) => {
									e.preventDefault();
									fileInputRef.current.click();
								}}
							>
								<div className={styles["upload-btn-box"]}>
									<img src={iconUpload} alt="Upload icon" />
									<span>Upload..</span>
								</div>
							</button>
						</div>
						{preview ? (
							<div className={styles.preview}>
								<img src={preview} alt="Uploaded preview" />
								<button
									className={styles["del-btn"]}
									onClick={(e) => {
										e.preventDefault();
										setImage(null);
										setValue("image", null);
									}}
								>
									Delete
								</button>
							</div>
						) : (
							<div></div>
						)}
					</div>
					<div className={styles["buttons-wrapper"]}>
						<button
							className={styles["cancel-btn"]}
							onClick={(e) => {
								e.preventDefault();
								cancelConfirm();
							}}
						>
							Cancel
						</button>
						<input
							type="submit"
							className={styles["submit-btn"]}
							value={"Next"}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddNewAdPage;
