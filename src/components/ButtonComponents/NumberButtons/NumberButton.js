import React from "react";
import Numbers from "./Numbers";

const NumberButton = ({ updateFunction }) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Numbers updateFunction={updateFunction} />
    </div>
  );
};

export default NumberButton;
