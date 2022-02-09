import { useContextBM } from "../../context/Context";

const Cards = () => {
	const { filterByPrice } = useContextBM();
	console.log("filter", filterByPrice);
	return (
		<div>
			<h1>This is the card component</h1>
		</div>
	);
};

export default Cards;
