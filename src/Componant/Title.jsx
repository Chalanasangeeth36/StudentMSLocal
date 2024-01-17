import React from "react";

const Title = (props) => {
  return (
    <div className="title w-[60%] h-full px-[23px] py-[19px] bg-white rounded-[11px] gap-2.5">
      <div className=" text-blue-950 text-[28px] font-bold font-['Poppins'] leading-[39.20px]">
        {props.title}
      </div>
    </div>
  );
};

export default Title;
