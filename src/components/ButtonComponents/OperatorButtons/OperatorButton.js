import React from "react";
import Operators from "./Operators.js";

const OperatorButton = ({ updateFunction }) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Operators updateFunction={updateFunction} />
    </div>
  );
};

export default OperatorButton;
