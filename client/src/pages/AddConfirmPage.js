import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewAd } from "../formContext/AddNewAdContext";

const AddConfirmPage = () => {
	const navigate = useNavigate();
	const { data } = useAddNewAd();
	useEffect(() => {
		if (data.title.length === 0) {
			navigate("/no-draft");
		}
	});

	console.log(data);
	return <div></div>;
};

export default AddConfirmPage;
