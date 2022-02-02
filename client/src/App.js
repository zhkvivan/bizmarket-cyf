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

function App() {
	// Getting categories from server
	const { setCategories } = useContextBM();
	useEffect(() => {
		const fetchData = async () => {
			try {
				// const response = await BizMarketApi.get("/categories");
				const response = await [
					{
						id: 1,
						name: "Food, Drinks",
					},
					{
						id: 2,
						name: "Automotive",
					},
					{
						id: 3,
						name: "Electronics",
					},
					{
						id: 4,
						name: "Fashion, Clothing",
					},
					{
						id: 5,
						name: "Floral, Garden",
					},
					{
						id: 6,
						name: "Health, Beauty",
					},
					{
						id: 7,
						name: "Home, Decor",
					},
					{
						id: 8,
						name: "Industrial, Materials",
					},
					{
						id: 9,
						name: "Pets, Animals",
					},
					{
						id: 10,
						name: "Sports, Outdoors",
					},
					{
						id: 11,
						name: "Toys, Games",
					},
					{
						id: 12,
						name: "Other",
					},
				];

				// response.data.results.sort((a, b) => {
				// 	const catA = a.name;
				// 	const catB = b.name;

				// 	if (catA > catB) {
				// 		return 1;
				// 	} else if (catB > catA) {
				// 		return -1;
				// 	} else {
				// 		return 0;
				// 	}
				// });
				// console.log(response.data.results);
				// setCategories(response.data.results);
				setCategories(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

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
					<Route
						path="category/:categoryId/:categoryName"
						element={<CategoryPage />}
					/>
					<Route
						path="category/:categoryId/:categoryName/:adId"
						element={<AdPage />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
