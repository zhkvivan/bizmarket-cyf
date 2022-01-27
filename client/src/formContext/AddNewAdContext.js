import React, { createContext, useContext, useState } from "react";

const AddNewAdContext = createContext();

export const AddNewAdProvider = ({ children }) => {
	const [data, setData] = useState({
		title: "",
		description: "",
		price: "",
	});

	const setValues = (values) => {
		setData((prevData) => ({
			...prevData,
			...values,
		}));
	};

	return (
		<AddNewAdContext.Provider value={{ data, setValues }}>
			{children}
		</AddNewAdContext.Provider>
	);
};

export const useAddNewAd = () => useContext(AddNewAdContext);
