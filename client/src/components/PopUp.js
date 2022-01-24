import { useContext } from "react";
import { Context } from "./Context/Context";
import "./PopUp.css";

const PopUp = () => {
	const popUp = useContext(Context);
	return (
		<>
			<div className="popup-box">
				<div className="box">
					<span className="close-icon" onClick={popUp.togglePopUp}>
						X
					</span>
					<b>Login into BizMarket</b>
				</div>
			</div>
		</>
	);
};

export default PopUp;
