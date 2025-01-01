import React, { useState } from "react";
import errorToast from "../utils/errorToast";
import { useNavigate, Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";

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
  const [formErrors, setFormErrors] = useState({});
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
    navigate("/registration/complete", {
      state: {
        username: username,
        email: email,
        pwd: password,
      },
    });
  };

  return (
    <section className="w-full md:w-1/2 h-screen font-poppins flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-[#333]">
        <span className="text-2xl">Hello!</span>
        <span className="text-lg">Sign Up to Get Started</span>
      </div>
      <form className="w-2/3 flex flex-col justify-between items-center">
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          aria-describedby="usernote"
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          className={`border-1 border-[#b9b8b8] py-3 px-7 w-80 rounded-3xl text-lg mb-2 ${
            formErrors.hasOwnProperty("username") ? " border-red-600" : ""
          }`}
        />
        <span
          className={
            formErrors.hasOwnProperty("username")
              ? "text-red-600 w-full text-center"
              : "hiddden"
          }
        >
          {formErrors.username}
        </span>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          aria-describedby="usernote"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          className={`border-1 py-3 px-7 w-80 rounded-3xl text-lg mb-2 ${
            formErrors.hasOwnProperty("username")
              ? " border-red-600"
              : "border-[#b9b8b8]"
          }`}
        />
        <span
          className={
            formErrors.hasOwnProperty("email")
              ? "text-red-600 w-full text-center"
              : "hiddden"
          }
        >
          {formErrors.email}
        </span>
        <PasswordInput
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={
            formErrors.hasOwnProperty("password") ? "border-red-600" : ""
          }
        />
        <span
          className={
            formErrors.hasOwnProperty("password")
              ? "text-red-600 w-full text-center"
              : "hiddden"
          }
        >
          {formErrors.password}
        </span>
        <PasswordInput
          placeholder="Confirm Password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          className={
            formErrors.hasOwnProperty("password") ? "border-red-600" : ""
          }
        />
        <span
          className={
            formErrors.hasOwnProperty("cpassword")
              ? "text-red-600 w-full text-center"
              : "hiddden"
          }
        >
          {formErrors.cpassword}
        </span>
        <div className="my-4 w-full px-20 text-white flex justify-between">
          <Link to="/">
            <button className="bg-primary py-1 px-2 rounded-lg cursor-pointer">
              Back Home
            </button>
          </Link>
          <button
            className="bg-primary py-1 px-2 rounded-lg cursor-pointer"
            onClick={(e) => handleNext(e)}
          >
            Next
          </button>
        </div>
      </form>
      <Link to="/user">
        <span className="font-inter underline hover:text-slate-800">
          Already have an account,Login
        </span>
      </Link>
    </section>
  );
};

export default Form1;
