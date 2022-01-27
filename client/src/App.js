import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AddNewAdPage from "./pages/AddNewAdPage";
import Layout from "./components/Layout";
import AddConfirmPage from "./pages/AddConfirmPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoDraftPage from "./pages/NoDraftPage";
import Home from "./pages/Home";

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

					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
