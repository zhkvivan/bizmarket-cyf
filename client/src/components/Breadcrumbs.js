import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	const pathnames = pathname.split("/").filter((x) => x);
	console.log(pathnames);
	return (
		<div>
			<Link to="/">Home</Link>
			{/* / <Link to="/">{pathnames[1]}</Link> */}
		</div>
	);
};

export default Breadcrumbs;
