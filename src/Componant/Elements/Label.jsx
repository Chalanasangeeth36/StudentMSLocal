import React from "react";

const Lable = (props) => {
  return (
    <div className="lable text-[#0d2a64] text-sm md:text-base  mb-4 font-['Poppins'] font-semibold leading-[140%]">
      {props.label}
    </div>
  );
};

export default Lable;
