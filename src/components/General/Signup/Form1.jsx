import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import successToast from "../../../utils/successToast";
import errorToast from "../../../utils/errorToast";

const Form1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const url = baseUrl();
  const [details, setDetails] = useState({
    address_1: "",
    address_2: "",
    city: "",
    mobile_number: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${url}/user`, location.state)
        .then((res) => {
          if (res.status === 200) {
            setUser(true);
          }
        })
        .catch((err) => console.log(err));
      await axios
        .post(`${url}/profile`, { ...details, email: location.state.email })
        .then((res) => {
          if (res.status === 200) {
            setProfile(true);
          }
        })
        .catch((err) => console.log(err));
      successToast("Signup successfull");
      setTimeout(() => {
        navigate("/login");
      }, [3000]);
    } catch (err) {
      console.log(err);
      errorToast(err.response.data.message);
    }
  };
  return (
    <section className="signup-section">
      <form onSubmit={handleSubmit}>
        <div className="words">
          <span className="head">Hello!</span>
          <span className="tail">Sign Up to Get Started</span>
        </div>
        <div className="input-holder">
          <label htmlFor="address1">Address Line 1:</label>
          <input
            type="text"
            id="address1"
            placeholder="123 Main Street"
            name="address_1"
            value={details.address_1}
            onChange={handleChange}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="address2">Address Line 2 (optional):</label>
          <input
            type="text"
            id="address2"
            placeholder="123 Main Street"
            value={details.address_2}
            name="address_2"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            placeholder="e.g Nairobi"
            value={details.city}
            name="city"
            onChange={handleChange}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            id="mobile"
            type="text"
            placeholder="e.g 0748567464"
            value={details.mobile_number}
            name="mobile_number"
            onChange={handleChange}
          />
        </div>
        <div className="div-btn">
          <NavLink to="/signup">
            <button>Back</button>
          </NavLink>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form1;
