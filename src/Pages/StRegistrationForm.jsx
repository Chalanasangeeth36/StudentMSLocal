import React, { useState } from "react";
import FormContainer from "../Componant/Elements/FormContainer";
import Title from "../Componant/Elements/Title";
import Lable from "../Componant/Elements/Lable";
import Input from "../Componant/Elements/Input";
import Button from "../Componant/Elements/Button";
import RadioButton from "../Componant/Elements/RadioButton";
import Dropdown from "../Componant/Elements/DropDown";

const StRegistrationForm = () => {
  const choice = ["Yes", "No"];
  const items = ["Automobile", "Hybrid", "Mechanical"];
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleDropdownSelect = (selectedItem) => {
    console.log("Selected item:", selectedItem);
  };

  return (
    <div>
      <Title title="Student Registration Form" />
      <FormContainer>
        <div className="grid grid-rows-subgrid">
          {/* input 01 */}
          <Lable lable="Student Full Name " />
          <Input placeHolder="Enter Student Name" id="stName" />

          {/* input 02 */}
          <Lable lable="Name with Initials" />
          <Input placeHolder="Name with Initials" id="NameInitials" />

          {/* input 03 */}
          <Lable lable="Permanent Address" />
          <Input placeHolder="Permanent Address" id="PerAddress" />

          {/* input 04 */}
          <Lable lable="Contact  Number" />
          <Input placeHolder="Contact  Number" id="ContactNum" />

          {/* input 05 */}
          <Lable lable="WhatsApp Number" />
          <Input placeHolder="WhatsApp Number" id="whtsAppNumber" />
        </div>
      </FormContainer>

      <FormContainer>
        <div className="grid md:grid-cols-5">
          <div className="col-span-2 ">
            <Lable lable="If you student of any other" />
          </div>
          <div className="md:ml-12">
            <RadioButton options={choice} />
          </div>
        </div>
        <div className="">
          {/* input 01 */}
          <Lable lable="Institute Name" />
          <Input
            placeHolder="Institute Name"
            isFullWidth={true}
            id="instituteName"
          />

          {/* input 02 */}
          <Lable lable="Following Courses" />
          <Input
            placeHolder="Following Courses"
            isFullWidth={true}
            id="FollowingCource"
          />
        </div>
      </FormContainer>

      <FormContainer>
        <div className="flex flex-col">
          {/* input 01 */}
          <Lable lable="Working Place Name" />
          <Input
            placeHolder="Working Place Name"
            isFullWidth={true}
            id="WorkingName"
          />

          {/* input 02 */}
          <Lable lable="Working Place Address" />
          <Input
            placeHolder="Working Place Address"
            isFullWidth={true}
            id="workingAddress"
          />

          <div className="grid md:grid-cols-5">
            <div className="col-span-2 ">
              <Lable lable="Do you have your Own Scanner" />
            </div>
            <div className="md:ml-12">
              <RadioButton options={choice} />
            </div>
          </div>

          <div className="grid md:grid-cols-5">
            <div className="col-span-2 ">
              <Lable lable="Do you have any other experience with " />
            </div>
            <div>
              <div className="md:ml-12">
                <RadioButton options={choice} />
              </div>
            </div>
          </div>

          <div className="w-[100%] justify-center flex">
            <Button button="Save" />
          </div>

          <Dropdown
            id="courseSel"
            items={items}
            title="Select Course"
            onSelect={handleDropdownSelect}
          />
        </div>
      </FormContainer>

      <br />
      <br />
    </div>
  );
};

export default StRegistrationForm;
