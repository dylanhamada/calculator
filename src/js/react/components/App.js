import React from "react";
import Equals from "./Equals.js";
import Numbers from "./Numbers.js";
import Operators from "./Operators.js";
import Decimal from "./Decimal.js";
import Clear from "./Clear.js";
import Delete from "./Delete.js";
import Display from "./Display.js";
import DisplayExp from "./DisplayExp.js";
import "../../../css/App.css";

/* Array containing values for the Numbers components */
const numBtnVals = [
  { num: 0, text: "zero" },
  { num: 1, text: "one" },
  { num: 2, text: "two" },
  { num: 3, text: "three" },
  { num: 4, text: "four" },
  { num: 5, text: "five" },
  { num: 6, text: "six" },
  { num: 7, text: "seven" },
  { num: 8, text: "eight" },
  { num: 9, text: "nine" }
];

/* Array containing values for the Operators components */
const opBtnVals = [
  { func: "add", text: "+" },
  { func: "subtract", text: "-" },
  { func: "multiply", text: "×" },
  { func: "divide", text: "÷" }
];

class App extends React.Component {
  render() {
    /* Map the numBtnVals array to generate Numbers components for
    each array element */
    const numBtns = numBtnVals.map(numBtn => {
      return <Numbers key={numBtn.num} id={numBtn.text} val={numBtn.num} />;
    });

    /* Map the opBtnVals array to generate Operators components for
    each array element */
    const opBtns = opBtnVals.map((opBtn, ind) => {
      return <Operators key={ind} id={opBtn.func} text={opBtn.text} />;
    });

    return (
      <div id="app">
        <DisplayExp />
        <Display />
        {numBtns}
        {opBtns}
        <Decimal />
        <Equals />
        <Clear />
        <Delete />
      </div>
    );
  }
}

export default App;
