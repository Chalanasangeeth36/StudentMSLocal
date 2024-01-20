import React from "react";

const RadioButton = ({ id, name, checked, value, onChange, label }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        className="hidden"
      />
      <span className="relative w-5 h-5 border-2 border-gray-300 rounded-full focus-within:ring-5 focus-within:ring-blue-500 focus-within:ring-opacity-75">
        <span
          className={`absolute inset-x-[2.5px] inset-y-0.5 w-3 h-3 rounded-full bg-blue-500 opacity-0 transition-opacity duration-200 ease-in-out ${
            checked ? "opacity-100" : ""
          }`}
        />
      </span>
      <span className="ml-3 text-blue-800 text-base font-semibold font-['Poppins'] leading-tight">
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
