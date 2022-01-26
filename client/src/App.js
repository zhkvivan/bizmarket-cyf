// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";

function App() {
	return (
		<>
			{/* <Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
				</Route>
			</Routes> */}
			<Home />
		</>
	);
}

export default App;
