import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
const Form1 = () => {
  const navigate = useNavigate();
  //regex
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{6,24}/;
  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  //username usestates
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    console.log(values.username === "");
    if (values.username === "") {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(values.username)) {
      errors.username = "Username is invalid";
      toast(
        "Username should be 6-24 characters long and can contain only letters,numbers,hyphen and underscore",
        {
          icon: "⛔",
          position: "top-right",
        }
      );
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password is invalid";
      toast(
        "Password should be 8 characters long and should contain atleast one uppercase,lowercase,number and special character",
        {
          icon: "⛔",
          position: "top-right",
        }
      );
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password does not match";
      toast("Password does not match", {
        icon: "⛔",
        position: "top-right",
      });
    }
    console.log(errors);
    return errors;
  };
  const CreateUser = async (e) => {
    e.preventDefault();
    const values = {
      username: username,
      password: password,
      cpassword: cpassword,
    };
    const errors = validate(values);
    setFormErrors(errors);
  };
  const handleNext = () => {
    if (!username || !password || !cpassword) {
      toast("Submit all necessary details", {
        icon: "⛔",
        position: "top-right",
      });
    }
    navigate("/signup/credentials", {
      state: {
        username: username,
        password: password,
      },
    });
  };
  return (
    <section className="signup-section">
      <div className="words">
        <span className="head">Hello!</span>
        <span className="tail">Sign Up to Get Started</span>
      </div>
      <form onSubmit={CreateUser}>
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

          <button onClick={handleNext}>Next</button>
        </div>
      </form>
      <NavLink to="/login">
        <span className="link">Already have an account,Login</span>
      </NavLink>
    </section>
  );
};

export default Form1;
