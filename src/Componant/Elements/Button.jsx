import React from "react";

const Button = (props) => {
  const { bgColor, fronticon, button, backicon, borderColor, fontColor } = props;

  return (
    <div
      className={`w-auto mt-4 h-5 md:h-10 px-8 py-5 rounded justify-center items-center gap-2.5 inline-flex ${bgColor} ${borderColor} border-2`}
    >
      <div className="mr-2 text-2xl text-white">{fronticon}</div>
      <div className={`text-center ${fontColor} text-[19px] font-semibold font-['Poppins'] leading-relaxed`}>
        {button}
      </div>
      <div className="ml-2 text-2xl text-white">{backicon}</div>
    </div>
  );
};

export default Button;
