import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
import styles from "./Home.module.scss";
import Hero from "../components/Hero";
import FilterProduct from "../components/FilterProduct";

export default function Home() {
	return (
		<>
			<Hero />
			<FilterProduct />
			<Slider />
			<Banner />
		</>
	);
}
