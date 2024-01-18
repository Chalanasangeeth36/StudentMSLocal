import React from "react";

const Title = (props) => {
  return (
    <div className="title w-[90%] mx-auto mt-10  h-full px-[23px] py-3 bg-white rounded-[11px] gap-2.5 shadow-md md:py-4">
      <div className=" text-blue-950 text-xl text-center  font-bold font-['Poppins'] leading-[39.20px] md:text-left md:text-[1.75rem] ">
        {props.title}
      </div>
    </div>
  );
};

export default Title;
