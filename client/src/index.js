import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";



import "./index.scss";
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
		<Hero />
	</BrowserRouter>,
	document.getElementById("root")
);
