import { useContext, useState } from "react";
import { Context } from "./Context/Context";
import "./PopUp.css";

const PopUp = () => {
	const popUp = useContext(Context);
	const [text, setText] = useState({
		name: "",
		password: "",
	});

	console.log("text", text);

	return (
		<>
			<div className="popup-box">
				<div className="box">
					<span className="close-icon" onClick={popUp.togglePopUp}>
						X
					</span>
					<b>Login into BizMarket</b>
					<form>
						<div>
							<label>Name:</label>
							<br />
							<input
								type="text"
								name="name"
								className="input-tag"
								onChange={(e) =>
									setText({
										...text,
										name: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label>Password:</label>
							<br />
							<input
								type="password"
								name="password"
								className="input-tag"
								onChange={(e) =>
									setText({
										...text,
										password: e.target.value,
									})
								}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default PopUp;
