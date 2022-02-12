import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
import styles from "./Home.module.scss";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import SearchBar from "../components/SearchBar";

export default function Home() {
	return (
		<>
			<Hero />
			<SearchBar />
			<Slider />
			<Banner />
			<Accordion />
		</>
	);
}
