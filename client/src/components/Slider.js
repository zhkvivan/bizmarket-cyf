import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "./SliderItem";
import styles from "./Slider.module.scss";
import iconAutomotive from "../images/icon-automotive.png";
import iconElectronics from "../images/icon-electronics.png";
import iconFashion from "../images/icon-fashion.png";
import iconFloral from "../images/icon-floral.png";
import iconFood from "../images/icon-food.png";
import iconHealth from "../images/icon-health.png";
import iconHome from "../images/icon-home.png";
import iconIndustial from "../images/icon-industrial.png";
import iconPets from "../images/icon-pets.png";
import iconSports from "../images/icon-sports.png";
import iconToys from "../images/icon-toys.png";
import iconOthers from "../images/icon-others.png";

import "./Slider.css";

export const Slider = () => {
	const categories = [
		{ name: "Automotive", icon: iconAutomotive },
		{ name: "Electronics", icon: iconElectronics },
		{ name: "Fashion, Clothing", icon: iconFashion },
		{ name: "Floral, Garden", icon: iconFloral },
		{ name: "Food, Drinks", icon: iconFood },
		{ name: "Health, Beauty", icon: iconHealth },
		{ name: "Home, Decor", icon: iconHome },
		{ name: "Industrial, Materials", icon: iconIndustial },
		{ name: "Pets, Animals", icon: iconPets },
		{ name: "Sports, Outdoors", icon: iconSports },
		{ name: "Toys, Games", icon: iconToys },
		{ name: "Others", icon: iconOthers },
	];

	const breakPoints = [
		{ width: 1, itemsToShow: 1, itemsToScroll: 1 },
		{ width: 360, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 560, itemsToShow: 3, itemsToScroll: 3 },
		{ width: 760, itemsToShow: 4, itemsToScroll: 4 },
		{ width: 960, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1080, itemsToShow: 6, itemsToScroll: 6 },
	];

	return (
		<section className={`${styles.wrapper} ${styles.container}`}>
			<Carousel breakPoints={breakPoints} itemPadding={[30, 0]}>
				{categories.map((category, index) => {
					return (
						<SliderItem
							label={category.name}
							key={index}
							icon={category.icon}
						/>
					);
				})}
			</Carousel>
		</section>
	);
};
