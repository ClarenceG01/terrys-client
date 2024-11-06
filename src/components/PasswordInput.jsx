import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const PasswordInput = ({ value, onChange, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name="password"
        onChange={onChange}
        className="border-1 border-[#b9b8b8] py-3 px-7 w-80 rounded-3xl text-lg"
      />
      {showPassword ? (
        <AiOutlineEyeInvisible
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute right-5 bottom-4 size-6"
        />
      ) : (
        <AiOutlineEye
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute right-5 bottom-4 size-6"
        />
      )}
    </div>
  );
};

export default PasswordInput;
