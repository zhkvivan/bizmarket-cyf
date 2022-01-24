import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopUp = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Context.Provider value={{ isOpen, setIsOpen, togglePopUp }}>
			{children}
		</Context.Provider>
	);
};
