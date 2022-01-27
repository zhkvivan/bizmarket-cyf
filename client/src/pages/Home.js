import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<>
			<div
				// className={styles.container}
				style={{
					textAlign: "center",
					height: "600px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#999",
				}}
			>
				Some Hero Placeholder
			</div>
			<Slider />
			<Banner />
		</>
	);
}
