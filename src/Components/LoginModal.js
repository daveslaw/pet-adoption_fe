import React from "react";
import { Button, Modal } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import { AppContext } from "../Context/AppContext";
import { useContext, useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import { userSchema } from "../Validations/userSchema";
import { loginSchema } from "../Validations/loginSchema";

function LoginModal() {
	const appContext = useContext(AppContext);
	const [isLoginModal, setLoginModal] = useState(false);
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userContactNumber, setUserContactNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClose = () => appContext.setShow(false);
	const handleLoginModal = () => setLoginModal(true);
	const handleSignupModal = () => setLoginModal(false);

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleUserFirstName = (e) => {
		setUserFirstName(e.target.value);
	};

	const handleUserLastName = (e) => {
		setUserLastName(e.target.value);
	};

	const handleUserContactNumber = (e) => {
		setUserContactNumber(e.target.value);
	};

	const handleNewEmail = (e) => {
		setNewEmail(e.target.value);
	};

	const handleNewPassword = (e) => {
		setNewPassword(e.target.value);
	};

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	axios.defaults.withCredentials = true;
	const handleSignup = async () => {
		const formData = {
			userFirstName: userFirstName,
			userLastName: userLastName,
			newEmail: newEmail,
			newPassword: newPassword,
			userContactNumber: userContactNumber,
		};
		const isValid = await userSchema.isValid(formData);
		console.log(isValid);

		if (isValid & (newPassword === confirmPassword)) {
			axios
				.post(`http://localhost:3001/adduser`, {
					user_id: uuid(),
					password: newPassword,
					email: newEmail,
					userFirstName: userFirstName,
					userLastName: userLastName,
					userContactNumber: userContactNumber,
				})

				.then((response) => {
					console.log(response);
				})
				.catch((error) => console.log(error));

			handleClose();
			setNewEmail("");
			setNewPassword("");
			setConfirmPassword("");
			setUserContactNumber("");
			setUserFirstName("");
			setUserLastName("");
		} else alert("Please confirm all the details are correct");
	};

	const handleLogin = async () => {
		const userInfo = {
			email: email,
			password: password,
		};

		const isValid = await loginSchema.isValid(userInfo);
		console.log(isValid);

		if (isValid) {
			axios
				.post("http://www.localhost:3001/users/login", userInfo)
				.then((response) => {
					console.log(response);
					appContext.setLoggedIn(true);
					handleClose();
				})
				.catch((error) => console.log(error));
		} else {
			alert("Please make sure your details are correct");
		}
	};

	return (
		<div>
			{isLoginModal ? (
				<Modal
					show={appContext.show}
					onHide={handleClose}
					className="modal"
					dialogClassName="modal-20w"
				>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modal-body">
						<div>
							<TextField
								required
								id="standard-required"
								label="Email"
								placeholder="email@example.com"
								value={email}
								onInput={handleEmail}
							/>
						</div>
						<div>
							<TextField
								id="standard-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								value={password}
								onInput={handlePassword}
							/>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleLogin}>
							Sign in
						</Button>
						<Button onClick={handleSignupModal}>New user?</Button>
					</Modal.Footer>
				</Modal>
			) : (
				<Modal
					show={appContext.show}
					onHide={handleClose}
					dialogClassName="modal-20w"
				>
					<Modal.Header closeButton>
						<Modal.Title>Sign up</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="form-spacing-parent">
							<div className="form-spacing-child">
								<TextField
									required
									id="standard-required"
									label="Email"
									placeholder="email@example.com"
									value={newEmail}
									onInput={handleNewEmail}
								/>
							</div>

							<div className="form-spacing-child">
								{/* <input
									value={newPassword}
									onInput={handleNewPassword}
									placeholder="password"
									type="password"
								></input> */}
								<TextField
									id="standard-password-input"
									label="Password"
									type="password"
									autoComplete="current-password"
									placeholder="Between 6 and 12 characters"
									value={newPassword}
									onInput={handleNewPassword}
									width="100%"
								/>
							</div>

							<div className="form-spacing-child">
								<TextField
									id="standard-password-input"
									label="Confirm password"
									type="password"
									autoComplete="current-password"
									value={confirmPassword}
									onInput={handleConfirmPassword}
								/>
							</div>

							<div>
								<div className="form-spacing-child">
									<TextField
										required
										id="standard-required"
										label="First Name"
										className="form-spacing-child"
										value={userFirstName}
										onInput={handleUserFirstName}
									/>
								</div>
								<div className="form-spacing-child">
									<TextField
										required
										id="standard-required"
										label="Last Name"
										className="form-spacing-child"
										value={userLastName}
										onInput={handleUserLastName}
									/>
								</div>
							</div>
							<div className="form-spacing-child">
								<TextField
									required
									id="standard-required"
									label="Phone Number"
									value={userContactNumber}
									onInput={handleUserContactNumber}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleSignup}>
							Sign Up
						</Button>
						<Button onClick={handleLoginModal}>Already registered?</Button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	);
}

export default LoginModal;
