import React, { useRef } from "react";
import styles from "./AdCard.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";
import { Link, useLocation } from "react-router-dom";
import AdPage from "../pages/AdPage";

const AdCard = ({ product }) => {
	const location = useLocation();
	const showDetailsRef = useRef();
	return (
		<Link
			to={`${location.pathname}/${product.id}`}
			className={styles.link}
			state={{
				product: product,
			}}
			ref={showDetailsRef}
		>
			<div className={styles.wrap}>
				<div className={styles["img-wrap"]}>
					<img
						src={product.image === undefined ? imagePlaceholder : product.image}
						alt={product.adTitle}
						className={styles.photo}
						onClick={() => showDetailsRef.current.click()}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.info}>
						<h3 onClick={() => showDetailsRef.current.click()}>
							{product.adTitle}
						</h3>
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
							ref={showDetailsRef}
						>
							Show details
						</Link>
					</div>
					<div className={styles["price-wrapper"]}>
						<div>from</div>
						<div className={styles.price}>£ {product.price}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default AdCard;
