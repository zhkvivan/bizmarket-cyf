import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
// import styles from "./Home.module.scss";
import Hero from "../components/Hero";
<<<<<<< HEAD
import FilterProduct from "../components/Filter/FilterProduct";
=======
import Accordion from "../components/Accordion";
>>>>>>> e436f018b19b2029ee53d137a8231c155269bd0d

export default function Home() {
	const faq = [
		{
			question: "Question 1",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			question: "Question 2",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			question: "Question 3",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			question: "Question 4",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];
	return (
		<>
			<Hero />
			<FilterProduct />
			<Slider />
			<Banner />
			<Accordion faq={faq} />
		</>
	);
}
