import React, { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ faq }) => {
	const [selected, setSelected] = useState(0);

	const openHandler = (i) => {
		if (i === selected) {
			setSelected(null);
		} else {
			setSelected(i);
		}
	};

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
