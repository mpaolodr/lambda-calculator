import React, { useState } from "react";

//import any components needed
//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = ({ updateFunction }) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className="operatorsButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map(item => {
        return (
          <button
            onClick={updateFunction}
            key={item.char.toString()}
            char={item.char}
            value={item.value}
          >
            {" "}
            {item.value}
          </button>
        );
      })}
    </div>
  );
};

export default Operators;
