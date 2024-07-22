/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/styles/login/loginPage.styles.scss";
import heroImage from "../assets/images/kv-login.png";
import logo from "../assets/images/kv-logo.png";
import Button from "../components/login/Button.jsx";
import LoginTextField from "../components/login/TextField.jsx";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/login/api.login.jsx";
import { notifyError } from "../utils/Toast.js";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const navigate = useNavigate();
  const [login, { isSuccess, isError, data, error: apiError }] =
    useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.token);
      navigate("/employee");
    } else if (isError) {
      let notification =
        apiError.data.message +
        (apiError.data.errors.length > 0
          ? ": " + apiError.data.errors.join(", ")
          : "");
      notifyError(notification);
    }
  }, [isSuccess, isError, data, apiError, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Collect form data
    const formData = new FormData(event.target);
    // Access specific fields by name
    const username = formData.get("username");
    const password = formData.get("password");

    // Call the login mutation
    login({ email: username, password: password });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/employee");
    } // go back to the employee page if the user is already logged in
  }, []);

  useEffect(() => {
    setError(userName.length > 100);
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, [userName]);

  return (
    <main className="logopage">
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
            label="User Email"
            type="text"
            name="username"
            value={userName}
            onUserNameChange={setUserName}
            error={error}
          />
          {userName.length > 100 && (
            <div
              className="warning"
              style={{ color: "red", marginLeft: "10px", fontSize: "14px" }}
            >
              User Email cannot be more than 100 characters
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
