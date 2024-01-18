import React from 'react'

const Button = (props) => {
  return (
    <div className="w-[180px] mt-4 h-5 md:h-12 md:w-[200px] px-8 py-5 bg-blue-600 rounded justify-center items-center gap-2.5 inline-flex ">
      <div className="text-center text-white text-[19px] font-semibold font-['Poppins'] leading-relaxed">
        {props.button}
      </div>
    </div>
  );
}

export default Button
