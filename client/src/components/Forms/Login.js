import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

const Login = () => {
	const popUp = useContext(Context);
	const [text, setText] = useState({
		email: "",
		password: "",
	});

	console.log("text", text);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Posting", text);
	};

	return (
		<>
			<div className="popup-box">
				<div className="box">
					<span className="close-icon" onClick={popUp.togglePopUp}>
						X
					</span>
					<b>Login into BizMarket</b>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={(e) =>
									setText({
										...text,
										email: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={(e) =>
									setText({
										...text,
										password: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<p>Not a Member? Sign Up</p>
				</div>
			</div>
		</>
	);
};

export default Login;
