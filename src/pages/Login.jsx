import "../assets/styles/login/loginPage.styles.css";
import heroImage from "../assets/images/kv-login.png";
import logo from "../assets/images/kv-logo.png";
import Button from "../components/login/Button.jsx";
import LoginTextField from "../components/login/TextField.jsx";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState(false);
	const userNameRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		const session = localStorage.getItem("sessionKey");
		if (session) {
			navigate("/employee");
		}
	});

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent default form submission
		// Collect form data
		const formData = new FormData(event.target);
		// Access specific fields by name
		const username = formData.get("username");
		const password = formData.get("password");
		if (username === "shaheen" && password === "key") {
			localStorage.setItem("sessionKey", "true");
			navigate("/employee");
		} else {
			alert("Invalid Credentials");
		}
	};

	useEffect(() => {
		setError(userName.length > 10);
		if (userNameRef.current) {
			userNameRef.current.focus();
		}
	}, [userName]);

	return (
		<main>
			{/* <!-- Hero Section --> */}
			<div className="hero">
				<div className="wrapper-hero">
					<img src={heroImage} alt="Login Image" className="login-image" />
				</div>
			</div>
			{/* <!-- Login Section --> */}
			<div className="login">
				<form onSubmit={handleSubmit}>
					<img src={logo} alt="Logo" className="logo" />
					<LoginTextField
						ref={userNameRef}
						label="Username"
						type="text"
						name="username"
						value={userName}
						onUserNameChange={setUserName}
						error={error}
					/>
					{userName.length > 10 && (
						<div className="warning" style={{ color: "red", marginLeft: "10px", fontSize: "14px" }}>
							Username cannot be more than 10 characters
						</div>
					)}
					<LoginTextField label="Password" type="password" name="password" />
					<Button text="Login" error={error} />
				</form>
			</div>
		</main>
	);
};

export default Login;
