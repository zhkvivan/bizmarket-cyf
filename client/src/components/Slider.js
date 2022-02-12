import React from "react";
import Carousel from "react-elastic-carousel";
import SliderItem from "./SliderItem";
import stylesAllPages from "./Slider.module.scss";
import stylesCategPage from "./SliderCategPage.module.scss";
import { useContextBM } from "../context/Context";

import "./Slider.css";
import { Link, useLocation } from "react-router-dom";

export const Slider = () => {
	const location = useLocation();

	let styles;
	if (location.pathname === "/") {
		styles = {
			...stylesAllPages,
		};
	} else {
		styles = {
			...stylesCategPage,
		};
	}

	const { categories } = useContextBM();

	const breakPoints = [
		{ width: 1, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 360, itemsToShow: 3, itemsToScroll: 3 },
		{ width: 445, itemsToShow: 4, itemsToScroll: 4 },
		{ width: 550, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 580, itemsToShow: 3, itemsToScroll: 3 },
		{ width: 760, itemsToShow: 4, itemsToScroll: 4 },
		{ width: 960, itemsToShow: 5, itemsToScroll: 5 },
		{ width: 1080, itemsToShow: 6, itemsToScroll: 6 },
	];

	return (
		<section className={`${styles.wrapper} ${styles.container}`}>
			<div className={styles.carousel}>
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
			</div>
			<div className={styles.slabs}>
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
			</div>
		</section>
	);
};
