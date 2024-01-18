import React from "react";
import { Radio } from "@material-tailwind/react";

const RadioButton = (props) => {
  return (
    <div>
      <div className="flex gap-10 md:ml-4">
        <Radio name="type" label={props.label1} />
        <Radio name="type" label={props.label2} />
      </div>
    </div>
  );
};

export default RadioButton;
