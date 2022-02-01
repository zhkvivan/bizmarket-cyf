import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
import styles from "./Home.module.scss";
import Hero from "../components/Hero";


export default function Home() {
	return (
		<>
			<Hero />

			<Slider />
			<Banner />
		</>
	);
}
