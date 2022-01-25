import React, { createContext, useState } from "react";
import Login from "../Forms/Login.js";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [form, setForm] = useState(<Login />);

	const togglePopUp = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Context.Provider value={{ isOpen, setIsOpen, form, setForm, togglePopUp }}>
			{children}
		</Context.Provider>
	);
};
