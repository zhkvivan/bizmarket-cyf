// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./components/Context/Context.js";
import Home from "./pages/Home.js";

function App() {
	return (
		<>
			{/* <Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
				</Route>
			</Routes> */}
			<Provider>
				<Home />
			</Provider>
		</>
	);
}

export default App;
