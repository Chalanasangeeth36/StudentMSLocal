import React from "react";
import Title from "../Componant/Elements/Title";
import FormContainer from "../Componant/Elements/FormContainer";
import Label from "../Componant/Elements/Label";
import Input from "../Componant/Elements/Input";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import Button from "../Componant/Elements/Button";

const PaymentForm = () => {
  return (
    <div>
      <Title title="Payment " />

      <FormContainer>
        {/* input 01 */}
        <Label label="Student Full Name " />
        <Input placeHolder="Enter Student ID" />

        {/* input 02 */}
        <Label label="Amount" />
        <Input placeHolder="Rs. " />

        {/* input 03 */}
        <Label label="Overdue Amount" />
        <Input placeHolder="" />

        {/* button */}
        <div className="w-[100%] justify-center flex">
          <Button
            button="Add Payment"
            fronticon={<IoAddCircleOutline />}
            bgColor="bg-blue-600"
            fontColor="text-white"
            borderColor="border-blue-600"
          />
        </div>
        <div className="w-[100%] justify-center flex">
          <Button
            button="Cancel"
            borderColor="border-red-500"
            fontColor="text-red-500"
          />
        </div>
        <div className="w-[100%] justify-center flex">
          <Button
            button="Cancel"
            borderColor="border-red-500"
            fontColor="text-white"
            bgColor="bg-red-500"
            backicon={<BsArrowRepeat />}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default PaymentForm;
