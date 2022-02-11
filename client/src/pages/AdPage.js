import React, { useEffect, useState } from "react";
import styles from "./AdPage.module.scss";
import { useLocation, Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import iconHeart from "../images/icon-heart.png";
import productImg from "../images/product.jpg";
import Accordion from "../components/Accordion";
import imgPlaceholder from "../images/no-image.jpeg";
import BizMarketApi from "../api/BizMarketApi";

const AdPage = ({ product, noAccordion, isDemo }) => {
	const [currentProduct, setCurrentProduct] = useState({});
	const location = useLocation();
	const { categoryId, adId } = useParams();

	const [emailText, setEmailText] = useState(
		"Hi, I would be interested in this item.."
	);
	const textAreaHandler = (e) => {
		setEmailText(e.target.value);
	};

	const [image, setImage] = useState(null);

	useEffect(() => {
		console.log(product);
		if (product) {
			setCurrentProduct(product);
		} else if (location.state != null) {
			setCurrentProduct(location.state.product);
		} else {
			const fetchData = async () => {
				try {
					// const response = await BizMarketApi.get("/ad", {
					// 	params: {
					// 		categoryId: categoryId,
					// 		adId: adId,
					// 	},
					// });
					console.log("inside fetchData");
					// console.log(response);
					const adExpamle = {
						id: 1,
						adTitle: "Iphone",
						sellerName: "Steve Jobs",
						sellerCompany: "Apple",
						createdDate: "",
						updatetDate: "",
						expiryDate: "",
						minimumQuantity: "100",
						price: 395,
						description:
							"Смартфоны производства корпорации Apple. iPhone 13 является базовой моделью 15-го поколения. Содержит процессор Apple A15 в котором 15 млрд транзисторов. представлен 14 сентября 2021 года вместе со своим «младшим братом» iPhone 13 mini и «профессиональными» моделями iPhone 13 Pro и iPhone 13 Pro Max. Продажи начались 24 сентября. Дата предварительного заказа - 17 сентября 2021 года.",
						location: "",
						imageURL: undefined,
						categoryId: 1,
						sellerEmail: "test@bizmarket.com",
						sellerPhone: "34340688",
					};
					setCurrentProduct(adExpamle);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}

		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (currentProduct.image != undefined) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(currentProduct.image[0]);
		}
	}, [currentProduct.image]);

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
			<div className={`${styles.container}`}>
				<div className={styles["top-info"]}>
					<div className={styles.heading}>
						<h1 className={styles.h1}>{currentProduct.adTitle}</h1>
						<div className={styles.price}>
							from <span>£ {currentProduct.price}</span>
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
						<img
							src={currentProduct.image === undefined ? imgPlaceholder : image}
							alt={`${currentProduct.adTitle}`}
						/>
					</div>
					<div className={`${styles["seller-info"]}`}>
						<div className={styles["seller-name-wrapper"]}>
							<div className={styles["seller-img"]}>
								<div className={styles["seller-pic"]}></div>
							</div>
							<div className={styles["seller-name-inner"]}>
								<span className={styles["seller-name"]}>
									{currentProduct.sellerName}
								</span>
								<span className={styles["seller-company"]}>
									{currentProduct.sellerCompany
										? currentProduct.sellerCompany
										: ""}
								</span>
							</div>
						</div>
						<div className={styles["contact-info"]}>
							<h3 className={styles["contact-info-title"]}>Contact seller</h3>
							<div className={styles.communications}>
								<span className={styles["seller-phone"]}>
									{currentProduct.sellerPhone}
								</span>
								<span className={styles["seller-email"]}>
									<a
										href={`mailto:${currentProduct.sellerEmail}?subject=Question about ${currentProduct.adTitle} from BizMarket`}
									>
										{currentProduct.sellerEmail}
									</a>
								</span>
							</div>

							<div className={styles["message-wrapper"]}>
								<textarea
									className={styles.message}
									value={emailText}
									onChange={textAreaHandler}
								></textarea>
								<div className={styles["btn-wrap"]}>
									<a
										href={`mailto:${currentProduct.sellerEmail}?subject=Question about ${currentProduct.adTitle} from BizMarket&body=${emailText}`}
									>
										Send an email
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles["under-photo"]}>
					<div className={styles["description"]}>
						<p>{currentProduct.description}</p>
					</div>
					<div className={`${styles.details}`}>
						<div className={styles["details-header"]}>Details</div>
						<div className={styles["details-string"]}>
							<span>Minimum order quantity</span>
							<span>{currentProduct.minimumQuantity}</span>
						</div>
					</div>
				</div>
				{noAccordion ? "" : <Accordion faq={faq} />}
			</div>
		</>
	);
};

export default AdPage;
