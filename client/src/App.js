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
import { useEffect } from "react";
import BizMarketApi from "./api/BizMarketApi";
import { useContextBM } from "./context/Context";
import BurgerMenu from "./components/BurgerMenu";
import SearchResultPage from "./pages/SearchResultPage";
import CongratulationPage from "./pages/CongratulationPage";

function App() {
	// Getting categories from server
	const { setCategories } = useContextBM();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await BizMarketApi.get("/categories");

				response.data.results.sort((a, b) => {
					const catA = a.name;
					const catB = b.name;

					if (catA > catB) {
						return 1;
					} else if (catB > catA) {
						return -1;
					} else {
						return 0;
					}
				});
				console.log(response.data.results);
				setCategories(response.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<BurgerMenu />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route exact path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="confirm-add-new-ad" element={<AddConfirmPage />} />
					<Route path="add-new-ad" element={<AddNewAdPage />} />
					<Route path="page-not-found" element={<NotFoundPage />} />
					<Route path="no-draft" element={<NoDraftPage />} />
					<Route
						path="category/:categoryId/:categoryName"
						element={<CategoryPage />}
					/>
					<Route path="search" element={<SearchResultPage />} />
					<Route
						path="category/:categoryId/:categoryName/:adId"
						element={<AdPage />}
					/>
					<Route path="congratulations" element={<CongratulationPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
