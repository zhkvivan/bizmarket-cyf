// import { useEffect, useState } from "react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import "./Home.css";
import logo from "./logo.svg";
import { Context } from "../components/Context/Context";

export function Home() {
	const popUp = useContext(Context);
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
			{/* <div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
			</div> */}
			<Header />
			{popUp.isOpen && popUp.form}
			<Hero />
			<Footer />
		</main>
	);
}

export default Home;
