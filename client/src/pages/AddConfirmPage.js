import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextBM } from "../context/Context";

const AddConfirmPage = () => {
	const navigate = useNavigate();
	const { formData } = useContextBM();
	useEffect(() => {
		if (formData.title.length === 0) {
			navigate("/no-draft");
		}
	});

	console.log(formData);
	return <div></div>;
};

export default AddConfirmPage;
