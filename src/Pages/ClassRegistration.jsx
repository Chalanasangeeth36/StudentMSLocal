import React, { useState } from "react";
import FormContainer from "../Componant/Elements/FormContainer";
import Title from "../Componant/Elements/Title";
import Lable from "../Componant/Elements/Lable";
import Input from "../Componant/Elements/Input";
import Button from "../Componant/Elements/Button";
import RadioButton from "../Componant/Elements/RadioButton";
import Dropdown from "../Componant/Elements/DropDown";

const ClassRegistration = () => {
    const choice = ["Part Time", "Full Time"];
    const locations = ["location", "location", "location"];
    const courses = ["courses1", "courses2", "courses3"];
    const classes = ["class1", "class2", "class3"];

      const handleDropdownSelect = (selectedItem) => {
        console.log("Selected item:", selectedItem);
      };
  return (
    <div>
      <Title title="Class Registration Form" />

      <FormContainer>
        <div className="grid grid-rows-subgrid">
          {/* input 01 */}
          <Lable lable="Student Full Name " />
          <Input placeHolder="Enter Student Name" id="stName" />

          {/* input 02 */}
          <Lable lable="Branch Location (The student registered)" />
          <Dropdown
            id="location"
            items={locations}
            title="Branch Location"
            onSelect={handleDropdownSelect}
          />

          {/* input 03 */}
          <Lable lable="Course" />
          <Dropdown
            id="course"
            items={courses}
            title="Select Course"
            onSelect={handleDropdownSelect}
          />

          {/* input 04 */}
          <Lable lable="class" />
          <Dropdown
            id="classes"
            items={classes}
            title="Registered  Class"
            onSelect={handleDropdownSelect}
          />

          <Lable lable="Time Duration" />
          <RadioButton options={choice} />

          <div className="w-[100%] justify-center flex">
            <Button button="Save" />
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default ClassRegistration;