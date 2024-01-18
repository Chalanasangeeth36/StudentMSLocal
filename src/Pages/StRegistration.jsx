import React, { useState, useEffect } from "react";
import FormContainer from "../Componant/Elements/FormContainer";
import Title from "../Componant/Elements/Title";
import Label from "../Componant/Elements/Label";
import Input from "../Componant/Elements/Input";
import Button from "../Componant/Elements/Button";
import RadioButton from "../Componant/Elements/RadioButton";

function StRegistration() {
 const [name, setName] = useState("");
 const [address, setAddress] = useState("");
 const [tpNumber, setTpNumber] = useState("");
 const [stClass, setStClass] = useState("");

 // useEffect(() => {
 //   setDisplayName(name);
 // },[name]);

 const handleClick = (e) => {
   e.preventDefault();
   const student = {
     stName: name,
     stAddress: address,
     stTele: tpNumber,
     stClass: stClass,
   };

   console.log(student);
   fetch("http://127.0.0.1:8080/student/reg", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(student),
     mode: "cors",
     credentials: "include",
   });
 };

  return (
    <div className="App ">
      <Title title="Student Registration Form" />

      <form className="border-2 border-black w-[60%] mx-auto">
        <Label label="Student Full Name" />
        <Input
          placeHolder=" Name"
          dynamicWidth="30%"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Label label="Address :" />

        <Input
          placeHolder="Address"
          dynamicWidth="50%"
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />
        <Label label="Tp-Number :" />
        <Input
          placeHolder="Tp-Number"
          dynamicWidth="30%"
          onChange={(e) => setTpNumber(e.target.value)}
        />
        <br />

        <br />
        <Label label="Class" />
        <Input
          placeHolder="Class"
          dynamicWidth="30%"
          onChange={(e) => setStClass(e.target.value)}
        />
        <br />
        <br />
        <button
          className="border border-black"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>

      {/* form container */}
      <FormContainer>
        <div className="grid grid-rows-subgrid">
          <Label label="Student Name" />
          <Input
            placeHolder="Tp-Number"
            dynamicWidth="30%"
            onChange={(e) => setTpNumber(e.target.value)}
          />
          <Button button="Submit " onClick={handleClick} />
        </div>
      </FormContainer>
    </div>
  );
}

export default StRegistration;
