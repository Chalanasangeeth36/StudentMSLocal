import React from "react";

const Button = (props) => {
  const {
    bgcolor = "blue-600",
    bordercolor = "blue-600",
    fronticon,
    button,
    backicon,
  } = props;

  const isIconPresent = fronticon || backicon;

  const buttonWidth = isIconPresent ? "auto" : "w-500";

  return (
    <div
      className={` ${buttonWidth} mt-4 h-5 md:h-12 text-center px-8 py-5 bg-${bgcolor}  border-${bordercolor} border-2  rounded justify-center items-center inline-flex `}
    >
      {fronticon && <div className="mr-2 text-2xl text-white">{fronticon}</div>}
      <div className="text-white text-xl font-semibold font-['Poppins'] leading-relaxed">
        {button}
      </div>
      {backicon && <div className="ml-2 text-2xl text-white">{backicon}</div>}
    </div>
  );
};

export default Button;
