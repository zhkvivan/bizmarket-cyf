import React, { useEffect, useState } from "react";
import styles from "./AdPage.module.scss";
import { useLocation, Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import iconHeart from "../images/icon-heart.png";
import productImg from "../images/product.jpg";
import Accordion from "../components/Accordion";
import imgPlaceholder from "../images/no-image.jpeg";
import BizMarketApi from "../api/BizMarketApi";
import { useContextBM } from "../context/Context";

const AdPage = ({ product, noAccordion, isDemo }) => {
	const { formData } = useContextBM();
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
		if (product) {
			const ad = {
				adTitle: formData.adTitle,
				category: formData.category,
				description: formData.description,
				imageURL: formData.image,
				minimumQuantity: formData.minimumQuantity,
				price: formData.price,
				sellerCompany: formData.sellerCompany,
				sellerEmail: formData.sellerEmail,
				sellerName: formData.sellerName,
				sellerPhone: formData.sellerPhone,
			};
			setCurrentProduct(ad);
			setImage(ad.imageURL);
		} else if (location.state != null) {
			setCurrentProduct(location.state.product);
		} else {
			const fetchData = async () => {
				try {
					const response = await BizMarketApi.get("/ad", {
						params: {
							categoryId: categoryId,
							adId: adId,
						},
					});
					const ad = {
						id: response.data.results[0].id,
						adTitle: response.data.results[0].adtitle,
						sellerName: response.data.results[0].sellername,
						sellerCompany: response.data.results[0].sellercompany,
						createdDate: response.data.results[0].createddate,
						updatetDate: response.data.results[0].updateddate,
						expiryDate: response.data.results[0].expirydate,
						minimumQuantity: response.data.results[0].minquantity,
						price: response.data.results[0].price,
						description: response.data.results[0].description,
						location: response.data.results[0].location,
						imageURL: response.data.results[0].imageurl,
						categoryId: response.data.results[0].categoryid,
						sellerEmail: response.data.results[0].selleremail,
						sellerPhone: response.data.results[0].sellerphone,
					};
					setCurrentProduct(ad);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}

		window.scrollTo(0, 0);
	}, [formData]);

	return (
		<>
			{currentProduct && (
				<div className={`${styles.container}`}>
					<div className={styles["top-info"]}>
						<div className={styles.heading}>
							<h1 className={styles.h1}>{currentProduct.adTitle}</h1>
							<div className={styles.price}>
								from <span>£ {currentProduct.price}</span>
							</div>
						</div>
						{/* <img
							src={iconHeart}
							alt="Heart icon"
							className={styles["icon-heart"]}
						/> */}
					</div>
					<div className={styles["middle-inner"]}>
						<div className={styles["image-wrapper"]}>
							<img
								src={
									currentProduct.imageURL === undefined ||
									currentProduct.imageURL === null
										? imgPlaceholder
										: currentProduct.imageURL
								}
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
					{noAccordion ? "" : <Accordion />}
				</div>
			)}
		</>
	);
};

export default AdPage;
