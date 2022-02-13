import React, { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = () => {
	const [selected, setSelected] = useState(0);

	const openHandler = (i) => {
		if (i === selected) {
			setSelected(null);
		} else {
			setSelected(i);
		}
	};

	const faq = [
		{
			question: "Who is this marketplace for?",
			answer:
				"This marketplace was created to connect entrepreneurs and wholesalers. If you are starting your own business and don't know where to get goods for sale, you will find your suppliers here.",
		},
		{
			question: "Who can post an ad?",
			answer:
				"Any supplier that sells wholesale can place an ad on our marketplace. This does not require registration.",
		},
		{
			question: "How does the buying process work?",
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
		<div className={`${styles.wrapper} ${styles.container}`}>
			{faq.map((item, index) => {
				return (
					<div key={index} className={styles.item}>
						<div
							className={styles["question-wrap"]}
							onClick={() => openHandler(index)}
						>
							<h2 className={styles.question}>{item.question}</h2>
							<span className={styles.symbols}>
								{selected === index ? "✕" : "?"}
							</span>
						</div>
						<div
							className={
								selected === index
									? `${styles.answer} ${styles.opened}`
									: `${styles.answer} ${styles.closed}`
							}
						>
							<p>{item.answer}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
