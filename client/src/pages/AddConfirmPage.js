import React from "react";
import { useAddNewAd } from "../formContext/AddNewAdContext";

const AddConfirmPage = () => {
	const { data } = useAddNewAd();
	console.log(data);
	return <div></div>;
};

export default AddConfirmPage;
