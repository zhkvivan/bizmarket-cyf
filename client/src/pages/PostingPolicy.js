import React from "react";
import styles from "./About.module.scss";

const PostingPolicy = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.h1}>Posting Policy</h1>
				<div className={styles.content}>
					<p>
						Advertisers are solely responsible for all information that is
						submitted to BizMarket and any consequences that my result from your
						post. BizMarket reserves the right at our discretion to refuse or
						delete content that we believe is inappropriate or that breaches our
						Terms of Use.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PostingPolicy;
