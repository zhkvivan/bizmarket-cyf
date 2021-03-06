import React, { useEffect, useRef } from "react";
import styles from "./AdCard.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";
import { Link, useLocation } from "react-router-dom";
import AdPage from "../pages/AdPage";
import { useContextBM } from "../context/Context";

const AdCard = ({ ad }) => {
	const { categories } = useContextBM();

	const product = {
		id: ad.id,
		adTitle: ad.adtitle,
		sellerName: ad.sellername,
		sellerCompany: ad.sellercompany,
		createdDate: ad.createddate,
		updatetDate: ad.updateddate,
		expiryDate: ad.expirydate,
		minimumQuantity: ad.minquantity,
		price: ad.price,
		description: ad.description,
		location: ad.location,
		imageURL: ad.imageurl,
		categoryId: ad.categoryid,
		sellerEmail: ad.selleremail,
		sellerPhone: ad.sellerphone,
	};


	const categoryLink = categories.filter(
		(category) => category.id === product.categoryId
	)[0].link;

	const location = useLocation();
	const showDetailsRef = useRef();

	return (
		<div className={styles.outer}>
			<Link
				to={`/category/${product.categoryId}/${categoryLink}/${product.id}`}
				className={styles.link}
				state={{
					product: product,
				}}
				ref={showDetailsRef}
			>
				<div className={styles.wrap}>
					<div className={styles["img-wrap"]}>
						<img
							src={
								product.imageURL === undefined || product.imageURL === null
									? imagePlaceholder
									: product.imageURL
							}
							alt={product.adTitle}
							className={styles.photo}
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.info}>
							<h3>{product.adTitle}</h3>
							<div className={styles.from}>
								from:
								{product.sellerCompany.length === 0
									? product.sellerName
									: product.sellerCompany}
							</div>
							<button className={styles.btn}>Show details</button>
						</div>
						<div className={styles["price-wrapper"]}>
							<div>from</div>
							<div className={styles.price}>£ {product.price}</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AdCard;
