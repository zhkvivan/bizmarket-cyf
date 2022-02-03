import React from "react";
import styles from "./AdCard.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";
import { Link, useLocation } from "react-router-dom";
import AdPage from "../pages/AdPage";

const AdCard = ({ product }) => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div className={styles.wrap}>
			<div className={styles["img-wrap"]}>
				<img
					src={product.image === undefined ? imagePlaceholder : product.image}
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
					<Link
						to={`${location.pathname}/${product.id}`}
						className={styles.btn}
						state={{
							product: product,
						}}
					>
						Show details
					</Link>
				</div>
				<div className={styles["price-wrapper"]}>
					<div>from</div>
					<div className={styles.price}>£ 5</div>
				</div>
			</div>
		</div>
	);
};

export default AdCard;
