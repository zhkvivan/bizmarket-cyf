import { useContext, useState } from "react";
import "./Form.css";
import { Form, Button } from "react-bootstrap";
import { Context } from "../Context/Context";
import Login from "./Login";

const Register = () => {
	const popUp = useContext(Context);

	const [text, setText] = useState({
		email: "",
		password: "",
		password2: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.password !== text.password2) {
			alert("The passwords are not the same");
			e.target.reset();
		}
	};

	return (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={popUp.togglePopUp}>
					X
				</span>
				<h1 className="header">Register into BizMarket</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Email here"
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
					<Form.Group className="mb-3" controlId="formBasicPassword2">
						<Form.Label>Confirm you password</Form.Label>
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
				<p>
					Already a Member?{" "}
					<button className="button" onClick={() => popUp.setForm(<Login />)}>
						Log In
					</button>
				</p>
			</div>
		</div>
	);
};

export default Register;
