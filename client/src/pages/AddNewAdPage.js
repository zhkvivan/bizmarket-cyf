import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./AddNewAdPage.module.scss";
import iconUpload from "../images/icon-upload.png";
import { useContextBM } from "../context/Context";

const AddNewAdPage = () => {
	// console.log(useLocation());
	// Getting values from context
	const { formData, setFormValues, categories } = useContextBM();

	// Passing form data object to the next page
	const onSubmit = (data) => {
		setFormValues(data);
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
			category: formData.category,
			adTitle: formData.adTitle,
			description: formData.description,
			price: formData.price,
			sellerName: formData.sellerName,
			sellerCompany: formData.sellerCompany,
			sellerPhone: formData.sellerPhone,
			sellerEmail: formData.sellerEmail,
			minimumQuantity: formData.minimumQuantity,
		},
	});

	// Manual registering image
	useEffect(() => {
		register("image");
	}, []);

	const [adTitle, description, sellerName, sellerCompany] = watch([
		"adTitle",
		"description",
		"sellerName",
		"sellerCompany",
	]);

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
									{categories.map((category) => {
										return (
											<option value={category.id} key={category.id}>
												{category.name}
											</option>
										);
									})}
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
					{/* adTitle */}
					<div className={styles["field-base"]}>
						<label htmlFor="adTitle">Ad title:</label>
						<div className={styles["input-wrapper"]}>
							<div className={styles["input-box"]}>
								<input
									{...register("adTitle", {
										required: "This field is required",
										minLength: {
											value: 2,
											message: "Title is too short",
										},
									})}
									className={`${styles.input} ${
										errors.adTitle && styles["error-field"]
									}`}
									type="text"
									placeholder="Type here.."
									maxLength={100}
								/>
								{/* Error handling message: */}
								<div>
									{errors.adTitle && (
										<span className={styles["error-text"]}>
											{errors.adTitle.message}
										</span>
									)}
								</div>
							</div>
							<span className={styles.remaining}>
								{100 - adTitle.length} characters remaining
							</span>
						</div>
					</div>
					{/* Description */}
					<div className={styles["field-base"]}>
						<label htmlFor="description">Description:</label>
						<div className={styles["input-wrapper"]}>
							<div className={styles["input-box"]}>
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
					</div>
					{/* Price */}
					<div className={styles["field-base"]}>
						<label htmlFor="price">Price:</label>
						<div>
							<div className={styles["price-wrap"]}>
								<input
									type="number"
									min="0"
									placeholder="0"
									{...register("price", {
										required: "This field is required",
									})}
									className={`${styles.input} ${styles.price} ${
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
					{/* Minimum Quantity */}
					<div className={styles["field-base"]}>
						<label htmlFor="minimumQuantity">Minimum order quantity:</label>
						<div>
							<input
								type="number"
								min="1"
								placeholder="1"
								{...register("minimumQuantity", {
									required: "This field is required",
								})}
								className={`${styles.input} ${styles.price} ${
									errors.price && styles["error-field"]
								}`}
							/>

							<div>
								{errors.minimumQuantity && (
									<span className={styles["error-text"]}>
										{errors.minimumQuantity.message}
									</span>
								)}
							</div>
						</div>
					</div>
					{/* Image */}
					<div className={styles["field-base"]}>
						<label htmlFor="image">Image:</label>
						<div className={styles["img-box"]}>
							<div>
								<input
									style={{ display: "none" }}
									type="file"
									accept="image/*"
									ref={fileInputRef}
									onChange={(e) => {
										setValue("image", e.target.files);
										console.log(e.target.files);
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
					</div>
					{/* Contact info */}
					<h2>Contact information</h2>
					{/* Seller name */}
					<div className={styles["field-base"]}>
						<label htmlFor="sellerName">Your name:</label>
						<div className={styles["input-wrapper"]}>
							<div className={styles["input-box"]}>
								<input
									{...register("sellerName", {
										required: "This field is required",
										minLength: {
											value: 2,
											message: "Name is too short",
										},
									})}
									className={`${styles.input} ${
										errors.sellerName && styles["error-field"]
									}`}
									type="text"
									placeholder="Type here.."
									maxLength={100}
								/>
								{/* Error handling message: */}
								<div>
									{errors.sellerName && (
										<span className={styles["error-text"]}>
											{errors.sellerName.message}
										</span>
									)}
								</div>
							</div>
							<span className={styles.remaining}>
								{100 - sellerName.length} characters remaining
							</span>
						</div>
					</div>
					{/* Seller company */}
					<div className={styles["field-base"]}>
						<label htmlFor="sellerCompany">Your company name:</label>
						<div className={styles["input-wrapper"]}>
							<div className={styles["input-box"]}>
								<input
									{...register("sellerCompany", {
										minLength: {
											value: 2,
											message: "Company name is too short",
										},
									})}
									className={`${styles.input} ${
										errors.sellerCompany && styles["error-field"]
									}`}
									type="text"
									placeholder="Type here.."
									maxLength={100}
								/>
								{/* Error handling message: */}
								<div>
									{errors.sellerCompany && (
										<span className={styles["error-text"]}>
											{errors.sellerCompany.message}
										</span>
									)}
								</div>
							</div>
							<span className={styles.remaining}>
								{100 - sellerCompany.length} characters remaining
							</span>
						</div>
					</div>
					{/* Phone number */}
					<div className={styles["field-base"]}>
						<label htmlFor="sellerPhone">Your phone number:</label>
						<div className={styles["input-wrapper"]}>
							<input
								{...register("sellerPhone", {
									required: "This field is required",
									minLength: {
										value: 4,
										message: "Number is too short",
									},
								})}
								className={`${styles.input} ${
									errors.sellerPhone && styles["error-field"]
								}`}
								type="number"
								placeholder="Type here.."
								maxLength={100}
							/>
							{/* Error handling message: */}
							<div>
								{errors.sellerPhone && (
									<span className={styles["error-text"]}>
										{errors.sellerPhone.message}
									</span>
								)}
							</div>
						</div>
					</div>
					{/* sellerEmail */}
					<div className={styles["field-base"]}>
						<label htmlFor="sellersellerEmail">Your email:</label>
						<div className={styles["input-wrapper"]}>
							<input
								{...register("sellerEmail", {
									required: "This field is required",
									minLength: {
										value: 4,
										message: "Number is too short",
									},
								})}
								className={`${styles.input} ${
									errors.sellerEmail && styles["error-field"]
								}`}
								type="sellerEmail"
								placeholder="Type here.."
								maxLength={100}
							/>
							{/* Error handling message: */}
							<div>
								{errors.sellerEmail && (
									<span className={styles["error-text"]}>
										{errors.sellerEmail.message}
									</span>
								)}
							</div>
						</div>
					</div>
					{/* Buttons */}
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
