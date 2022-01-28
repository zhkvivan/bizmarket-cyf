import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				 <Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
