import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AddNewAdPage from "./pages/AddNewAdPage";
import Layout from "./components/Layout";
import AddConfirmPage from "./pages/AddConfirmPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoDraftPage from "./pages/NoDraftPage";
import Home from "./pages/Home";
import AdPage from "./pages/AdPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route exact path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="confirm-add-new-ad" element={<AddConfirmPage />} />
					<Route path="add-new-ad" element={<AddNewAdPage />} />
					<Route path="page-not-found" element={<NotFoundPage />} />
					<Route path="no-draft" element={<NoDraftPage />} />
					<Route path="category/:categoryName" element={<CategoryPage />} />
					<Route path="category/:categoryName/:id" element={<AdPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
