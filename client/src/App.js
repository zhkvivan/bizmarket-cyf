import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
