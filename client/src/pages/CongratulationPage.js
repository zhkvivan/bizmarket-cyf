import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import YesNoBtns from "../components/YesNoBtns";
import { useContextBM } from "../context/Context";
import styles from "./CongratulationPage.module.scss";
import Confetti from "react-confetti";

const CongratulationPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { categories } = useContextBM();

	useEffect(() => {
		!location.state && navigate("/");
	}, []);

	const newAdInfo = {
		categoryId: location.state && location.state.categoryId,
		categoryLink:
			location.state &&
			categories.filter(
				(category) => category.id === +location.state.categoryId
			)[0].link,
		adId: location.state && location.state.response.ad.id,
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
			<Confetti
				recycle={false}
				confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 0 }}
				initialVelocityY={-20}
			/>
			<div className={styles.content}>
				<h1>Congratulations! You've just created an Ad!</h1>
				<p>Would you like to go to your Ad?</p>
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
