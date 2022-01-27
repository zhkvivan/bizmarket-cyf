import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "./SliderItem";
import styles from "./Slider.module.scss";
import iconAutomotive from "../images/icon-automotive.png";
import iconElectronics from "../images/icon-electronics.png";
import iconFashion from "../images/icon-fashion.png";
import iconFood from "../images/icon-food.png";
import iconHealth from "../images/icon-health.png";
import iconHome from "../images/icon-home.png";
import iconIndustial from "../images/icon-industrial.png";
import iconPets from "../images/icon-pets.png";
import iconSports from "../images/icon-sports.png";
import iconToys from "../images/icon-toys.png";
import iconOthers from "../images/icon-others.png";

export const Slider = () => {
	const categories = [
		"Automotive",
		"Electronics",
		"Fashion, Clothing",
		"Floral, Garden",
		"Food, Drinks",
		"Health, Beauty",
		"Home, Decor",
		"Industrial, Materials",
		"Pets, Animals",
		"Sports, Outdoors",
		"Toys, Games",
		"Others",
	];

	const icons = [
		iconAutomotive,
		iconElectronics,
		iconFashion,
		iconFood,
		iconHealth,
		iconHome,
		iconIndustial,
		iconPets,
		iconSports,
		iconToys,
		iconOthers,
	];

	return (
		<div className={styles.wrapper}>
			<Carousel>
				<SliderItem label={"Automotive"} icon={iconAutomotive} />
				<SliderItem />
			</Carousel>
		</div>
	);
};
