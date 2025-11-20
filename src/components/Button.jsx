import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat 
        text-lg leading-none bg-[#FF6452] rounded-full text-white border-[#FF6452]
    "
    >
      {label}
      <img
        src={iconUrl}
        alt="arrow right full"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
