import React, { useEffect, useRef } from "react";
import styles from "./AdCard.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";
import { Link, useLocation } from "react-router-dom";
import AdPage from "../pages/AdPage";
import { useContextBM } from "../context/Context";

const AdCard = ({ product }) => {
	const { categories } = useContextBM();

	const categoryLink = categories.filter(
		(category) => category.id === product.categoryId
	)[0].link;

	console.log(categoryLink);

	const location = useLocation();
	const showDetailsRef = useRef();

	return (
		<div className={styles.outer}>
			<Link
				// to={`${location.pathname}/${product.id}`}
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
								product.image === undefined ? imagePlaceholder : product.image
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
							<div className={styles.price}>£ 5</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AdCard;
