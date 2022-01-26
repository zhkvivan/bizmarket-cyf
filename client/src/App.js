import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AddAnAdPage from "./pages/AddAnAdPage";
import Layout from "./components/Layout";
import AddConfirmPage from "./pages/AddConfirmPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoDraftPage from "./pages/NoDraftPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="about" element={<About />} />
					<Route path="confirm-add-new-ad" element={<AddConfirmPage />} />
					<Route path="add-an-ad" element={<AddAnAdPage />} />
					<Route path="page-not-found" element={<NotFoundPage />} />
					<Route path="no-draft" element={<NoDraftPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
