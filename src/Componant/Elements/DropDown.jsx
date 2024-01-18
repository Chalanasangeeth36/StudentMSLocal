import React, { useState } from "react";

const Dropdown = ({ items, onSelect, title }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
  };

  return (
    <div className="dropdown ">
      <select
        value={selectedItem}
        onChange={(e) => handleSelect(e.target.value)}
        className=" rounded-md border w-[100%] md:w-[50%]  border-[#e9f5fe] mb-8 py-3 px-5 focus:outline-none bg-[#e9f5fe] focus:border-blue-500"
      >
        <option value="" disabled >
          {title}
        </option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
