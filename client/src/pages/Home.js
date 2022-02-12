import React from "react";
import Banner from "../components/Banner";
import { Slider } from "../components/Slider";
import styles from "./Home.module.scss";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import SearchBar from "../components/SearchBar";

export default function Home() {
	const faq = [
		{
			question: "Who is this marketplace for?",
			answer:
				"This marketplace was created to connect entrepreneurs and wholesalers. If you are starting your own business and do not know where to get goods for sale, you will find your suppliers here.",
		},
		{
			question: "Who can post an ad?",
			answer:
				"Any supplier that sells wholesale can place an ad on our marketplace. This does not require registration.",
		},
		{
			question: "How is the buying process going?",
			answer:
				"Our site does not provide a shopping cart or payment. All you need is to find the right ad, and contact the seller by phone or email and arrange a deal.",
		},
		{
			question: "I have a question that I didn't get an answer to",
			answer:
				"If you need any help, we will be happy to help you. Send your questions to help@bizmarket.com.",
		},
	];
	return (
		<>
			<Hero />
			<SearchBar />
			<Slider />
			<Banner />
			<Accordion faq={faq} />
		</>
	);
}
