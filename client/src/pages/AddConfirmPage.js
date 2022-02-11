import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextBM } from "../context/Context";
import AdPage from "./AdPage";
import styles from "./AddConfirmPage.module.scss";
import BizMarketApi from "../api/BizMarketApi";

const AddConfirmPage = () => {
	const navigate = useNavigate();
	const { formData, setFormData, setFormValues } = useContextBM();

	console.log(formData);
	useEffect(() => {
		if (formData.adTitle.length === 0) {
			navigate("/no-draft");
		}
	});

	const formDataDemo = {
		...formData,
	};

	console.log(formDataDemo);
	console.log(formData);

	if (formData.image) {
		let image = formData.image[0];
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = () => {
			formData.image = reader.result;
		};
		console.log(formData);
	}

	const postHandler = async () => {
		try {
			setFormValues({
				category: undefined,
				adTitle: "",
				description: "",
				price: "",
				sellerName: "",
				sellerCompany: "",
				sellerPhone: "",
				sellerEmail: "",
				minimumQuantity: "",
			});
			console.log(formData);
			const response = await BizMarketApi.post("/addad", formData);
			console.log(response);
			if (response.status === 201) {
				navigate("/congratulations", {
					state: {
						response: response.data,
						categoryId: formData.category,
					},
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.h2}>
					Here's what your Ad is going to look like. Want to post it?
				</h2>
				<div className={styles["buttons-wrapper"]}>
					<button
						className={styles["cancel-btn"]}
						onClick={() => {
							navigate(-1);
						}}
					>
						Back to edit
					</button>
					<button className={styles["submit-btn"]} onClick={postHandler}>
						Post it now
					</button>
				</div>
			</div>
			<div>
				<AdPage noAccordion={true} product={formDataDemo} isDemo={true} />
			</div>
		</>
	);
};

export default AddConfirmPage;
