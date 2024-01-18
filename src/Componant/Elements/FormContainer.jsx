import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="title w-[90%] mt-10 mx-auto h-full px-5 md:px-12 py-10 bg-white rounded-[11px] shadow-md">
      {children}
    </div>
  );
};

export default FormContainer;