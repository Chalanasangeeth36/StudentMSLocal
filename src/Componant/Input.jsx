import React, { useState } from "react";

const Input = (props) => {
  // State to hold the input value
  // const [inputValue, setInputValue] = useState("");

  // Handler function to update the input value
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // // Handler function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Do something with the input value, for example, send it to an API or perform some action
  //   console.log("Submitted value:", inputValue);
  // };

  return (
    <input
      type="text"
      placeholder={props.placeHolder}
      value={props.inputValue}
      onChange={props.onChange}
      style={{ width: `${props.dynamicWidth}` }}
      className="rounded-md border border-[#e9f5fe] py-[0.7%] px-5 focus:outline-none bg-[#e9f5fe] focus:border-blue-500"
    />
  );
};

export default Input;
