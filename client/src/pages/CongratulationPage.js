import React, { useEffect } from "react";
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
		categoryLink: categories.filter(
			(category) => category.id === +location.state.categoryId
		)[0].link,
		adId: location.state.adId,
	};

	const backButtonHandler = () => {
		navigate("/");
	};

	const toMyAdButtonHandler = () => {
		navigate(
			`/category/${newAdInfo.categoryId}/${newAdInfo.categoryLink}/${newAdInfo.adId}`
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Congratulations! You've just created an Ad!</h1>
				<div>Would you like to go to your Ad?</div>
				<YesNoBtns
					yesLable={"Go to my Ad"}
					yesAction={toMyAdButtonHandler}
					noLable={"Back to Home"}
					noAction={backButtonHandler}
				/>
			</div>
		</div>
	);
};

export default CongratulationPage;
