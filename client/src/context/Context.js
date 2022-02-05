import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	// Adding new ad form
	const [formData, setFormData] = useState({
		adTitle: "",
		description: "",
		price: "",
		sellerName: "",
		sellerCompany: "",
		sellerPhone: "",
		sellerEmail: "",
		minimumQuantity: "",
	});

	const setFormValues = (values) => {
		setFormData((prevData) => ({
			...prevData,
			...values,
		}));
	};

	//Burger menu
	const [isOpen, setIsOpen] = useState(false);

	// Saving categories from server
	const [categories, setCategories] = useState([]);

	// Saving current category
	const [currentCategory, setCurrentCategory] = useState(null);

	return (
		<Context.Provider
			value={{
				formData,
				setFormValues,
				categories,
				setCategories,
				currentCategory,
				setCurrentCategory,
				isOpen,
				setIsOpen,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useContextBM = () => useContext(Context);
