import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-md shadow-card` + " " + className}>
      {children}
    </div>
  );
};

export default Card;