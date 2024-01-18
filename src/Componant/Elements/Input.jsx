import React, { useState } from "react";

const Input = (props) => {

  return (
    <input
      id={props.id}
      type="text"
      placeholder={props.placeHolder}
      value={props.inputValue}
      onChange={props.onChange}
      className={`rounded-md border max-md:w-[100%] border-[#e9f5fe] text-sm md:text-base font-['Poppins'] mb-8 py-3 px-5 focus:outline-none bg-[#e9f5fe] focus:border-blue-500
       ${props.isFullWidth ? "w-[100%]" : "w-[50%] "} `}
    />
  );
};

export default Input;
