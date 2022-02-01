import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "./SliderItem";
import styles from "./Slider.module.scss";
import { useContextBM } from "../context/Context";

import "./Slider.css";
import { Link } from "react-router-dom";

export const Slider = () => {
	const { categories } = useContextBM();
	// const categories = [
	// 	{ name: "Automotive", icon: iconAutomotive, link: "automotive" },
	// 	{ name: "Electronics", icon: iconElectronics, link: "electronics" },
	// 	{ name: "Fashion, Clothing", icon: iconFashion, link: "fashion-clothing" },
	// 	{ name: "Floral, Garden", icon: iconFloral, link: "floral-garden" },
	// 	{ name: "Food, Drinks", icon: iconFood, link: "food-drinks" },
	// 	{ name: "Health, Beauty", icon: iconHealth, link: "health-beauty" },
	// 	{ name: "Home, Decor", icon: iconHome, link: "home-decor" },
	// 	{
	// 		name: "Industrial, Materials",
	// 		icon: iconIndustial,
	// 		link: "industrial-materials",
	// 	},
	// 	{ name: "Pets, Animals", icon: iconPets, link: "pets-animals" },
	// 	{ name: "Sports, Outdoors", icon: iconSports, link: "sports-outdoors" },
	// 	{ name: "Toys, Games", icon: iconToys, link: "toys-games" },
	// 	{ name: "Others", icon: iconOthers, link: "others" },
	// ];

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
				{categories.map((category) => {
					const icon =
						"icon-" + category.name.split(", ")[0].toLowerCase() + ".png";

					return (
						<Link
							key={category.id}
							to={`/category/${category.id}/${category.name
								.split(", ")
								.join("-")
								.toLowerCase()}`}
							state={{
								category: category,
							}}
						>
							<SliderItem icon={icon} label={category.name} />
						</Link>
					);
				})}
			</Carousel>
		</section>
	);
};
