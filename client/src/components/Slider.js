import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "./SliderItem";
import styles from "./Slider.module.scss";
import { useContextBM } from "../context/Context";

import "./Slider.css";
import { Link } from "react-router-dom";

export const Slider = () => {
	const { categories } = useContextBM();

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
					const icon = "icon-" + category.link.split("-")[0] + ".png";

					return (
						<Link
							key={category.id}
							to={`/category/${category.id}/${category.link}`}
							className={styles.link}
						>
							<SliderItem icon={icon} label={category.name} />
						</Link>
					);
				})}
			</Carousel>
		</section>
	);
};
