import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	// Adding new ad form
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
	});

	const setFormValues = (values) => {
		setFormData((prevData) => ({
			...prevData,
			...values,
		}));
	};

	// Saving categories from server
	const [categories, setCategories] = useState([]);

	return (
		<Context.Provider
			value={{ formData, setFormValues, categories, setCategories }}
		>
			{children}
		</Context.Provider>
	);
};

export const useContextBM = () => useContext(Context);
