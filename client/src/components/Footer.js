import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logoWhite from "../images/logo-white.png";

const Footer = () => {
	const column1 = {
		header: "Tips and Support",
		lines: [
			{ text: "About BizMarket", url: "/about" },
			{ text: "Help", url: "/help" },
			{ text: "Contact Us", url: "/contact-us" },
		],
	};

	const column2 = {
		header: "Legal",
		lines: [
			{ text: "Terms of Use", url: "/terms-of-use" },
			{ text: "Posting policy", url: "/posting-policy" },
			{ text: "Cookie policy", url: "/cookie-policy" },
		],
	};

	const column3 = {
		header: "For Business",
		lines: [
			{ text: "Register", url: "/register" },
			{ text: "Post an ad", url: "/add-new-ad" },
			{ text: "F.A.Q.", url: "/faq" },
		],
	};

	return (
		<>
			<footer>
				<div className={styles.container}>
					<div className={styles["logo-wrap"]}>
						<img src={logoWhite} alt="logo" />
					</div>
					<div className={styles.content}>
						<Column column={column1} />
						<Column column={column2} />
						<Column column={column3} />
					</div>
				</div>
			</footer>
		</>
	);
};

const Column = ({ column }) => {
	return (
		<div className={styles.column}>
			<h5>{column.header}</h5>
			<div className={styles.line}></div>
			<ul className={styles.menu}>
				{column.lines.map((line, index) => {
					return (
						<li key={index}>
							<Link to={line.url} className={styles.link}>
								{line.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Footer;
