import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="title w-[60%] h-full px-[23px] py-[19px] bg-white rounded-[11px] shadow-md">
      {children}
    </div>
  );
};

export default FormContainer;