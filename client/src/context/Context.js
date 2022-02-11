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
	const [categories, setCategories] = useState([
		{ id: 2, name: "Automotive", link: "automotive" },
		{ id: 3, name: "Electronics", link: "electronics" },
		{ id: 4, name: "Fashion, Clothing", link: "fashion-clothing" },
		{ id: 5, name: "Floral, Garden", link: "floral-garden" },
		{ id: 1, name: "Food, Drinks", link: "food-drink" },
		{ id: 6, name: "Health, Beauty", link: "health-beauty" },
		{ id: 7, name: "Home, Decor", link: "home-decor" },
		{ id: 8, name: "Industrial, Materials", link: "industrial-materials" },
		{ id: 12, name: "Other", link: "other" },
		{ id: 9, name: "Pets, Animals", link: "pets-animals" },
		{ id: 10, name: "Sports, Outdoors", link: "sports-outdoors" },
		{ id: 11, name: "Toys, Games", link: "toys-games" },
	]);

	// Saving current category
	const [currentCategory, setCurrentCategory] = useState(null);

	// Saving current search result
	const [currentSearchResult, setCurrentSearchResult] = useState([]);

	// Setting up filter opening mechanism
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filterByPrice, setFilterByPrice] = useState({ min: 0, max: 0 });

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
				currentSearchResult,
				setCurrentSearchResult,
				isFilterOpen,
				setIsFilterOpen,
				filterByPrice,
				setFilterByPrice,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useContextBM = () => useContext(Context);
