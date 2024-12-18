import React from "react";

const HeaderImage = ({ children }) => {
  console.log(children);

  return (
    <div className="relative min-h-96 flex items-center justify-center font-poppins">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Image.png')", opacity: 0.9 }}
      ></div>
      <div className="relative text-black hover:text-white">
        <h4 className="text-4xl font-bold">{children}</h4>
      </div>
    </div>
  );
};

export default HeaderImage;
