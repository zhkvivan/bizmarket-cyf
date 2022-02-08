import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import BizMarketApi from "../api/BizMarketApi";

const SearchResultPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location.state);

	// const [sortWay, setSortWay] = useState("most popular");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await BizMarketApi.post("/search");

				console.log(response.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [location.state]);

	return <div></div>;
};

export default SearchResultPage;
