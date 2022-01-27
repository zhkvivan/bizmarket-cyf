import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { AddNewAdProvider } from "./formContext/AddNewAdContext";

ReactDOM.render(
	<BrowserRouter>
		<AddNewAdProvider>
			<App />
		</AddNewAdProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
