import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import baseUrl from "../../../utils/baseUrl";

const Login = () => {
  const url = baseUrl();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseMsg, setResponseMsg] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (user.username === "" || user.password === "") {
        setResponse(true);
        setError(true);
        setResponseMsg("Please fill all fields");
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      }
      const response = await axios.post(
        `${url}/login`,
        {
          username: user.username,
          password: user.password,
        },
        { withCredentials: true }
      );
      const role = response.data.role;
      if (response.data.success) {
        setResponse(true);
        setError(false);
        setResponseMsg(response.data.message);
        setTimeout(() => {
          if (role === "Member") {
            navigate("/shop", { state: { username: user.username } });
          } else if (role === "Admin") {
            navigate("/dashboard", { state: { username: user.username } });
          }
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="signup">
      <section className="left-section"></section>
      <section className="signup-section">
        <div className="words">
          <span className="head">Hello Again!</span>
          <span className="tail">Welcome Back</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={user.username}
            name="username"
            onChange={handleChange}
          />
          <div className="input-holder">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisibility}
                className="p-eye"
              />
            ) : (
              <AiOutlineEye
                onClick={togglePasswordVisibility}
                className="p-eye"
              />
            )}
          </div>
          {response && (
            <span className={error ? "error-msg" : "success-msg"}>
              {responseMsg}
            </span>
          )}
          <button
            type="submit"
            className={
              user.username === "" || user.password === "" ? "no-btn" : "btn"
            }
          >
            {isLoading ? (
              <ThreeDots
                height="50"
                width="50"
                radius="10"
                color="gray"
                ariaLabel="three-dots-loading"
              />
            ) : (
              <span>Login</span>
            )}
          </button>
          <NavLink to="/signup">
            <span className="link">Don't have an account,Sign Up</span>
          </NavLink>
        </form>
      </section>
    </div>
  );
};

export default Login;
