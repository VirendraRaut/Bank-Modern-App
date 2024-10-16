import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient outline-none text-[18px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
