import React, { useState } from "react";
import FormContainer from "../Componant/Elements/FormContainer";
import Title from "../Componant/Elements/Title";
import Lable from "../Componant/Elements/Label";
import Input from "../Componant/Elements/Input";
import Button from "../Componant/Elements/Button";
import RadioButton from "../Componant/Elements/RadioButton";
import Dropdown from "../Componant/Elements/DropDown";

const ClassRegistration = () => {
  const locations = ["location1", "location2", "location3"];
  const courses = ["courses1", "courses2", "courses3"];
  const classes = ["class1", "class2", "class3"];

  const handleDropdownSelect = (selectedItem) => {
    console.log("Selected item:", selectedItem);
  };

  
  const [time, setTime] = React.useState("");

  const handleSetTime = (event) => {
    setTime(event.target.value);
  };


  return (
    <div>
      <Title title="Class Registration Form" />

      <FormContainer>
        <div className="grid grid-rows-subgrid">
          {/* input 01 */}
          <Lable label="Student ID " />
          <Input placeHolder="Enter Student ID" id="stId" />

          {/* input 02 */}
          <Lable label="Branch Location (The student registered)" />
          <Dropdown
            id="classes"
            title="Branch Location"
            choices={locations}
            onSelect={handleDropdownSelect}
          />

          {/* input 04 */}
          <Lable label="Course" />
          <Dropdown
            id="course"
            title="Select Course"
            choices={courses}
            onSelect={handleDropdownSelect}
          />

          {/* input 05 */}
          <Lable label="Class" />
          <Dropdown
            id="classes"
            title="Registered  Class"
            choices={classes}
            onSelect={handleDropdownSelect}
          />
          {/* input 06 */}
          <Lable label="Time Duration" />
          <div className="flex gap-[15%]">
            <RadioButton
              id="parttime"
              name="settime"
              checked={time === "parttime"}
              value="parttime"
              onChange={handleSetTime}
              label="Part Time"
            />

            <RadioButton
              id="fulltime"
              name="settime"
              checked={time === "fulltime"}
              value="fulltime"
              onChange={handleSetTime}
              label="Full Time"
            />
          </div>

          <div className="w-[100%] justify-center flex">
            <Button
              button="Save"
              bgColor="bg-blue-600"
              fontColor="text-white"
              borderColor="border-blue-600"
            />
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default ClassRegistration;
