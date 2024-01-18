import React, { useState } from "react";
import FormContainer from "../Componant/Elements/FormContainer";
import Title from "../Componant/Elements/Title";
import Lable from "../Componant/Elements/Label";
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
          <Lable label="Student Full Name " />
          <Input placeHolder=" Student Name" id="stName" />

          {/* input 02 */}
          <Lable label="Email Address" />
          <Input placeHolder="Email Address" id="EmailAddress" />

          {/* input 03 */}
          <Lable label="Name with Initials" />
          <Input placeHolder="Name with Initials" id="NameInitials" />

          {/* input 04 */}
          <Lable label="Permanent Address" />
          <Input placeHolder="Permanent Address" id="PerAddress" />

          {/* input 05 */}
          <Lable label="Contact  Number" />
          <Input placeHolder="Contact  Number" id="ContactNum" />

          {/* input 06 */}
          <Lable label="WhatsApp Number" />
          <Input placeHolder="WhatsApp Number" id="whtsAppNumber" />
        </div>
      </FormContainer>

      <FormContainer>
        <div className="grid mb-5 md:grid-cols-5">
          <div className="col-span-2 ">
            <Lable label="If you student of any other" />
          </div>
          <div>
            <RadioButton label1="Yes" label2="No" />
          </div>
        </div>
        <div className="">
          {/* input 01 */}
          <Lable label="Institute Name" />
          <Input
            placeHolder="Institute Name"
            isFullWidth={true}
            id="instituteName"
          />

          {/* input 02 */}
          <Lable label="Following Courses" />
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
          <Lable label="Working Place Name" />
          <Input
            placeHolder="Working Place Name"
            isFullWidth={true}
            id="WorkingName"
          />

          {/* input 02 */}
          <Lable label="Working Place Address" />
          <Input
            placeHolder="Working Place Address"
            isFullWidth={true}
            id="workingAddress"
          />

          <div className="grid mb-5 md:grid-cols-5">
            <div className="col-span-2 ">
              <Lable label="Do you have your Own Scanner" />
            </div>
            <div>
              <RadioButton label1="Yes" label2="No" />
            </div>
          </div>

          <div className="grid md:grid-cols-5">
            <div className="col-span-2 ">
              <Lable label="Do you have any other experience with " />
            </div>
            <div>
              <div>
                <RadioButton label1="Yes" label2="No" />
              </div>
            </div>
          </div>

          <div className="w-[100%] justify-center flex">
            <Button
              button="Save"
              bgColor="bg-blue-600"
              fontColor="text-white"
            />
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default StRegistrationForm;
