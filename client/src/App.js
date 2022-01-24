import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AddAnAdPage from "./pages/AddAnAdPage";
import Layout from "./components/Layout";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
					<Route path="/add-an-ad" element={<AddAnAdPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
