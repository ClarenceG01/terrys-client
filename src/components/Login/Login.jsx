import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../../utils/baseUrl";
import successToast from "../../utils/successToast";
import LoadingButton from "../LoadingButton";
import PasswordInput from "../PasswordInput";

const Login = () => {
  const url = baseUrl();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    credential: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
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
          username: user.credential,
          email: user.credential,
          pwd: user.password,
        },
        { withCredentials: true }
      );
      const role = response.data.role;
      if (response.data.success) {
        setResponse(true);
        setError(false);
        setResponseMsg(response.data.message);
        successToast("Login successfull");
        setTimeout(() => {
          if (role === "user") {
            navigate("/shop", { state: { username: user.username } });
          } else if (role === "Admin") {
            navigate("/dashboard", { state: { username: user.username } });
          }
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="font-inter w-full h-screen flex flex-col md:w-1/2 justify-center items-center">
      <div className="flex flex-col items-center text-[#333] mb-2">
        <span className="text-2xl">Hello!</span>
        <span className="text-lg">Welcome Back</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full h-1/3 flex flex-col justify-between items-center"
      >
        <div>
          <input
            type="text"
            placeholder="Enter Username / email"
            value={user.credential}
            name="credential"
            onChange={handleChange}
            className="border-1 border-[#b9b8b8] py-3 px-7 w-80 rounded-3xl text-lg"
          />
        </div>
        <PasswordInput value={user.password} onChange={handleChange} />
        {response && (
          <span className={error ? "error-msg" : "success-msg"}>
            {responseMsg}
          </span>
        )}
        <LoadingButton
          className={
            user.username === "" || user.password === ""
              ? "bg-slate-300 "
              : "bg-primary "
          }
          isLoading={isLoading}
          disabled={!user.credential || !user.password}
        >
          Twende
        </LoadingButton>
        <Link to="signup">
          <span className="font-inter underline hover:text-slate-800">
            Don't have an account,Sign Up
          </span>
        </Link>
      </form>
    </section>
  );
};

export default Login;
