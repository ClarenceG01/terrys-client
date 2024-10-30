import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import errorToast from "../../utils/errorToast";
import { useNavigate, NavLink } from "react-router-dom";
const Form1 = () => {
  const navigate = useNavigate();
  //regex
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{6,24}/;
  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //username usestates
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCpwdVisibility = () => {
    setShowCPassword(!showCPassword);
  };
  // validate function
  const validate = (values) => {
    let errors = {};
    if (values.username === "") {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(values.username)) {
      errors.username = "Username is invalid";
    }
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Should be 8 characters long and should contain atleast one uppercase,lowercase,number and special character";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password does not match";
    }
    return errors;
  };
  const handleNext = (e) => {
    e.preventDefault();
    const values = {
      username: username,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    const errors = validate(values);
    setFormErrors(errors);
    setTimeout(() => setFormErrors({}), [5000]);
    if (Object.keys(errors).length > 0) {
      errorToast("Please fix the form errors before proceeding");
      return;
    }
    navigate("/signup/credentials", {
      state: {
        username: username,
        email: email,
        pwd: password,
      },
    });
  };

  return (
    <section className="signup-section">
      <div className="words">
        <span className="head">Hello!</span>
        <span className="tail">Sign Up to Get Started</span>
      </div>
      <form>
        <div className="input-holder">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            aria-describedby="usernote"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            className={
              formErrors.hasOwnProperty("username") ? "error" : "no-error"
            }
          />
        </div>
        <span
          className={
            formErrors.hasOwnProperty("username")
              ? "show-error"
              : "offset-error"
          }
        >
          {formErrors.username}
        </span>
        <div className="input-holder">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            aria-describedby="usernote"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className={
              formErrors.hasOwnProperty("email") ? "error" : "no-error"
            }
          />
        </div>
        <span
          className={
            formErrors.hasOwnProperty("email") ? "show-error" : "offset-error"
          }
        >
          {formErrors.email}
        </span>
        <div className="input-holder">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              formErrors.hasOwnProperty("password") ? "error" : "no-error"
            }
          ></input>
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
        <span
          className={
            formErrors.hasOwnProperty("password")
              ? "show-error"
              : "offset-error"
          }
        >
          {formErrors.password}
        </span>
        <div className="input-holder">
          <label htmlFor="cpassword">Confirm Password:</label>
          <input
            id="cpassword"
            type={showCPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className={
              formErrors.hasOwnProperty("cpassword") ? "error" : "no-error"
            }
          />
          {showCPassword ? (
            <AiOutlineEyeInvisible
              onClick={toggleCpwdVisibility}
              className="cp-eye"
            />
          ) : (
            <AiOutlineEye onClick={toggleCpwdVisibility} className="cp-eye" />
          )}
        </div>
        <span
          className={
            formErrors.hasOwnProperty("cpassword")
              ? "show-error"
              : "offset-error"
          }
        >
          {formErrors.cpassword}
        </span>
        <div className="div-btn">
          <NavLink to="/">
            <button>Back Home</button>
          </NavLink>

          <button onClick={(e) => handleNext(e)}>Next</button>
        </div>
      </form>
      <NavLink to="/login">
        <span className="link">Already have an account,Login</span>
      </NavLink>
    </section>
  );
};

export default Form1;
