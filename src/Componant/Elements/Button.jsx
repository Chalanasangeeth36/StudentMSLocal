import React from "react";

const Button = (props) => {
  const { bgColor, fronticon, button, backicon, borderColor, fontColor } = props;
  const isIconPresent = fronticon || backicon;
  const buttonWidth = isIconPresent ? "w-auto" : "w-[15%] max-sm:w-[50%] max-md:w-[30%] max-lg:w-[30%]";
  
  return (
    <div
      className={`${buttonWidth}  mt-4 h-5 md:h-10 px-8 py-5 rounded justify-center items-center gap-2.5 inline-flex ${bgColor} ${borderColor} border-2`}
    >
      <div className={`mr-1 text-xl ${fontColor} md:text-2xl`}>{fronticon}</div>
      <div
        className={`text-center ${fontColor} text-[19px] font-semibold font-['Poppins'] leading-relaxed`}
      >
        {button}
      </div>
      <div className={`ml-1 text-xl ${fontColor} md:text-2xl`}>{backicon}</div>
    </div>
  );
};

export default Button;
