import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Alertbox from "../AlertBox/Alertbox";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [alertContent, setAlertContent] = useState(null);

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
      const response = await axios.post("http://localhost:4040/login", {
        username: user.username,
        password: user.password,
      });
      const role = response.data.role;
      if (response.data.success) {
        setAlertContent("Login successfull");
        setTimeout(() => {
          if (role === "Member") {
            navigate("/shop", { state: { username: user.username } });
          } else if (role === "Admin") {
            navigate("/dashboard", { state: { username: user.username } });
          }
        }, 3000);
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
        {alertContent && <Alertbox content={alertContent} status="success" />}
      </section>
    </div>
  );
};

export default Login;
