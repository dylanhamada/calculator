import { defaultState } from "./rootReducer";

/* Updates store value/expression with user-input number */
const numReducer = (state = defaultState, action) => {
  let num = state.currentNum;
  let exp = state.expressionArr;

  switch (action.type) {
    case "ADD_NUM":
      /* Replaces initial '0' with user-input number */
      if (num.length === 1 && num[0] === 0) {
        /* If first user-input number is '0', no action */
        if (action.num === 0) {
        }
        num = [];
      }

      /* Adds user-input number to currentNum and expressionArr, providing
      a value for Display and DisplayExp components to display  */
      return typeof num[0] === "string"
        ? Object.assign({}, state, {
            currentNum: [action.num],
            expressionArr: [...exp, action.num]
          })
        : Object.assign({}, state, {
            currentNum: [...num, action.num],
            expressionArr: [...exp, action.num]
          });
    /* Updates store value/expression with a decimal */
    case "ADD_DEC":
      if (!num.includes(".")) {
        /* If decimal comes after an operator, currentNum is cleared
        and expressionArr includes a zero before the decimal */
        if (typeof num[0] === "string") {
          return Object.assign({}, state, {
            currentNum: [0, "."],
            expressionArr: [...exp, 0, "."]
          });
        } else {
          return Object.assign({}, state, {
            currentNum: [...num, "."],
            expressionArr: [...exp, "."]
          });
        }
      }
    default:
      return state;
  }
};

export default numReducer;
