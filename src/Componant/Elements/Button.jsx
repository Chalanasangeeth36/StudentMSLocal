import React from "react";

const Button = (props) => {
  const {
    bgcolor = "",
    fronticon,
    button,
    backicon,
    borderColor = "", 
  } = props;

  const isIconPresent = fronticon || backicon;

  const buttonWidth = isIconPresent ? "auto" : "w-[15%] max-sm:w-[50%]";

  return (
    <div
      className={` ${buttonWidth} mt-4 h-4 md:h-12 text-center bg-blue-600 px-8 py-5 bg-${bgcolor} border-${borderColor} border-2  rounded-md justify-center items-center inline-flex `}
    >
      {fronticon && <div className="mr-2 text-2xl text-white">{fronticon}</div>}
      <div className="text-white  md:text-xl font-semibold font-['Poppins'] leading-relaxed">
        {button}
      </div>
      {backicon && <div className="ml-2 text-2xl text-white ">{backicon}</div>}
    </div>
  );
};

export default Button;
