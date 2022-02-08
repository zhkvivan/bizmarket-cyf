import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import YesNoBtns from "../components/YesNoBtns";
import { useContextBM } from "../context/Context";
import styles from "./CongratulationPage.module.scss";

const CongratulationPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { categories } = useContextBM();
	console.log(location);
	const newAdInfo = {
		categoryId: location.state.categoryId,
		categoryName: categories.filter(
			(category) => category.id === +location.state.categoryId
		)[0].name,
		adId: location.state.adId,
	};

	const backButtonHandler = () => {
		navigate("/");
	};

	const toAdButtonHandler = () => {
		navigate(
			`/category/${newAdInfo.categoryId}/${newAdInfo.categoryName}/${newAdInfo.adId}`
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Congratulations! You've just created an Ad!</h1>
				<div>Would you like to go to your Ad?</div>
				<YesNoBtns
					yesLable={"Go to my Ad"}
					yesAction={toAdButtonHandler}
					noLable={"Back to Home"}
					noAction={backButtonHandler}
				/>
			</div>
		</div>
	);
};

export default CongratulationPage;
