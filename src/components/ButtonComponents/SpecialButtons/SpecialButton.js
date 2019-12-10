import React from "react";
import Specials from "./Specials.js";

const SpecialButton = ({ updateFunction }) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Specials updateFunction={updateFunction} />
    </div>
  );
};

export default SpecialButton;
