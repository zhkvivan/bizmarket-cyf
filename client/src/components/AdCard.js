import React from "react";
import styles from "./AdCard.module.scss";
import imagePlaceholder from "../images/no-image.jpeg";
import { Link } from "react-router-dom";

const AdCard = ({ ad }) => {
	return (
		<div className={styles.wrap}>
			<div className={styles["img-wrap"]}>
				<img
					src={ad.image === undefined ? imagePlaceholder : ad.image}
					alt={ad.adTitle}
					className={styles.photo}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.info}>
					<h3>{ad.adTitle}</h3>
					<div className={styles.from}>
						from:
						{ad.sellerCompany.length === 0 ? ad.sellerName : ad.sellerCompany}
					</div>
					<Link to="" className={styles.btn}>
						Show details
					</Link>
				</div>
				<div className={styles.price}></div>
			</div>
		</div>
	);
};

export default AdCard;
