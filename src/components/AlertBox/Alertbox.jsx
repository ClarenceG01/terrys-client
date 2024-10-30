import React from "react";
import "./alertbox.css";

const Alertbox = ({ content, status }) => {
  console.log(content);
  console.log(status);
  return (
    <div className="main-alert">
      <div className={status === "error" ? "error" : "success"}>
        <span className="span-content">{content}</span>
      </div>
    </div>
  );
};

export default Alertbox;
