import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Form1 = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDetails({
      ...details,
      [name]: value,
    });
  };

  return (
    <section className="signup-section">
      <form>
        <div className="words">
          <span className="head">Hello!</span>
          <span className="tail">Sign Up to Get Started</span>
        </div>
        <div className="input-holder">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Username"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            placeholder="e.g 0744 444 444"
            value={details.phone}
            name="phone"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            placeholder="e.g"
            value={details.address}
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className="btn-div">
          <NavLink to="/signup">
            <button>Back</button>
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Form1;
