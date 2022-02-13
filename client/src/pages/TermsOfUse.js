import React from "react";
import styles from "./About.module.scss";

const TermsOfUse = () => {
	const termsArray = [
		"violate any laws",
		"post any threatening, abusive, defamatory, obscene or indecent material",
		"post or otherwise communicate any false or misleading material or message of any kind",
		"infringe any third-party right",
		"distribute spam, chain letters, or promote pyramid schemes",
	];
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>Terms of Use</h1>
				<div className={styles.content}>
					<p>
						As a condition of your use of BizMarket you agree that you will not:
					</p>
					<ul>
						{termsArray.map((li, index) => {
							return (
								<li key={index} className={styles.li}>
									{li}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TermsOfUse;
