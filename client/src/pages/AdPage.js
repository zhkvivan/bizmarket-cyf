import React, { useState } from "react";
import styles from "./AdPage.module.scss";
import { useLocation, Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import iconHeart from "../images/icon-heart.png";
import productImg from "../images/product.jpg";
import Button from "../components/Button";
import Accordion from "../components/Accordion";

const AdPage = () => {
	const [emailText, setEmailText] = useState(
		"Hi, I would be interested in this item.."
	);
	const textAreaHandler = (e) => {
		setEmailText(e.target.value);
	};

	const product = {
		id: 1,
		adTitle: "Sugar",
		createdDate: "",
		updatetDate: "",
		expiryDatae: "",
		quantity: "",
		price: 5,
		description: "Sugar - very good sugar!",
		location: "",
		imageURL: "",
		categoryId: 1,
		sellerEmail: "test@bizmarket.com",
		minimumOrder: 10,
	};

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
			<div className={styles.container}>
				<div className={styles["top-info"]}>
					<div className={styles.heading}>
						<h1 className={styles.h1}>{product.adTitle}</h1>
						<div className={styles.price}>
							from <span>£ {product.price}</span>
						</div>
					</div>
					<img
						src={iconHeart}
						alt="Heart icon"
						className={styles["icon-heart"]}
					/>
				</div>
				<div className={styles["middle-inner"]}>
					<div className={styles["image-wrapper"]}>
						<img src={productImg} alt={`${product.adTitle}`} />
					</div>
					<div className={styles["seller-info"]}>
						<div className={styles["seller-name-wrapper"]}>
							<div className={styles["seller-img"]}>
								<div className={styles["seller-pic"]}></div>
							</div>
							<div className={styles["seller-name-inner"]}>
								<span className={styles["seller-name"]}>John Doe</span>
								<span className={styles["seller-company"]}>Food LTD</span>
							</div>
						</div>
						<div className={styles["contact-info"]}>
							<h3 className={styles["contact-info-title"]}>Contact seller</h3>
							<span className={styles["seller-phone"]}>073849583728</span>
							<span className={styles["seller-email"]}>
								<a
									href={`mailto:test@bizmarket.com?subject=Question about ${product.adTitle} from BizMarket`}
								>
									{product.sellerEmail}
								</a>
							</span>

							<textarea
								className={styles.message}
								value={emailText}
								onChange={textAreaHandler}
							></textarea>
							<div className={styles["btn-wrap"]}>
								<a
									href={`mailto:${product.sellerEmail}?subject=Question about ${product.adTitle} from BizMarket&body=${emailText}`}
								>
									Send an email
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles["under-photo"]}>
					<div className={styles["description"]}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum
						</p>
					</div>
					<div className={styles.details}>
						<div className={styles["details-header"]}>Details</div>
						<div className={styles["details-string"]}>
							<span>Minimum order quantity</span>
							<span>{product.minimumOrder}</span>
						</div>
					</div>
				</div>
				<Accordion faq={faq} />
			</div>
		</>
	);
};

export default AdPage;
