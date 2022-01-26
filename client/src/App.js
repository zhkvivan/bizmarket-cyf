import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";

import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/about" element={<About />} />
					</Route>
				</Routes>

				{/* <Hero /> */}
				{/* <About/> */}
			</Layout>
		</>
	);
}

export default App;
