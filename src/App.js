import React, { useState } from "react";

//COMPONENTS
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton.js";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
// import NumberButtons from "./components/ButtonComponents/NumberButtons/NumberButton.js";
import Display from "./components/DisplayComponents/Display.js";

//STYLES
import "./App.scss";
import "./index.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [display, setDisplay] = useState(0);

  // const updateFunction = e => {
  //   //Special
  //   if (e.target.value === "C") {
  //     setDisplay(0);
  //   } else if (display !== 0 && e.target.value !== "=") {
  //     setDisplay(`${display}${e.target.value}`);
  //   }
  //   if (e.target.value === "+/-") {
  //     if (display > 0) {
  //       setDisplay("-" + display);
  //     } else if (display < 0) {
  //       setDisplay(Math.abs(display));
  //     }
  //   }
  //   if (e.target.value === "%") {
  //     if (display !== 0) {
  //       setDisplay(display / 100);
  //     } else {
  //       return;
  //     }
  //   }

  //   if (e.target.value !== "C" && display === 0) {
  //     setDisplay(e.target.value);
  //   }

  //   if (e.target.value === "=") {
  //     setDisplay(eval(display));
  //   }
  // };

  //Handlers
  //FOR SPECIAL CHARACTER
  const specialChar = char => {
    if (char === "C") {
      if (display !== 0) {
        setDisplay(0);
      } else {
        return;
      }
    } else if (char === "+/-") {
      if (parseInt(display) > 0) {
        setDisplay("-" + display);
      } else {
        setDisplay(Math.abs(parseInt(display)));
      }
    } else {
      setDisplay(display / 100);
    }
  };

  const numChar = num => {
    if (display !== 0) {
      setDisplay(`${display}${num}`);
    } else {
      setDisplay(num);
    }
  };

  const operatorChar = operator => {
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "/" ||
      operator === "*"
    ) {
      setDisplay(`${display} ${operator} `);
    } else {
      setDisplay(eval(display));
    }
  };

  return (
    <div className="container">
      <Logo />

      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display>{display}</Display>
        <div className="charContainer">
          <div className="specialContainer">
            <SpecialButton
              className="specialButtons"
              updateFunction={e => specialChar(e.target.value)}
            />
          </div>

          <div className="numberContainer">
            <NumberButton updateFunction={e => numChar(e.target.value)} />
          </div>

          <div className="operatorContainer">
            <OperatorButton
              updateFunction={e => operatorChar(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
