import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient outline-none text-[18px] text-primary font-poppins font-medium rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
