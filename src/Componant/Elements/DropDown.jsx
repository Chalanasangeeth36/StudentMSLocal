import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const DropDown = ({ choices, onSelect, title }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [valueSelected, setValueSelected] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const handleChoiceClick = (choice) => {
    setSelectedValue(choice);
    onSelect(choice);
    setValueSelected(true);
    setDropdownOpen(false);
  };

  return (
    <>
      <div ref={domNode} className="">
        <div className="relative inline-block mb-8 max-md:w-[100%] w-[50%] ">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex  gap-2.5 py-4 px-5 w-[100%] rounded-[0.625rem] bg-[#e9f5fe]  ${
              valueSelected ? "text-blue-500 font-semibold " : "text-gray-400"
            }`}
          >
            <span className="font-['Poppins']">
              {selectedValue || `${title}`}
            </span>
            <span className="mt-1 ml-auto text-xl font-['Poppins']">
              <GoChevronDown />
            </span>
          </button>

          <div
            className={`text-[#1e65ee] font-['Poppins'] text-sm font-semibold leading-[140%] shadow-1 bg-[#e9f5fe] absolute left-0 z-40 mt-1 w-full rounded-md   py-[10px] transition-all ${
              dropdownOpen
                ? "top-full opacity-100 visible"
                : "top-[110%] invisible opacity-0"
            }`}
          >
            {choices.map((choice, index) => (
              <DropdownItem
                key={index}
                label={choice}
                onClick={() => handleChoiceClick(choice)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const DropdownItem = ({ label, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="block px-5 py-3 text-base text-body-color hover:bg-blue-200 hover:text-primary"
    >
      {label}
    </a>
  );
};

export default DropDown;
