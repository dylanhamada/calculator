import { combineReducers } from "redux";

let defaultState = {
  currentNum: [0],
  expressionArr: []
};

const numReducer = (state = defaultState, action) => {
  let num = state.currentNum;

  switch (action.type) {
    /* Updates store value/expression with user-input number */
    case "ADD_NUM":
      /* Replaces initial '0' with user-input number */
      if (num.length === 1 && num[0] === 0) {
        /* If first user-input number is '0', no action */
        if (action.num === 0) {
        }
        num = [];
      }

      return {
        currentNum: [...num, action.num]
      };
    /* Updates store value/expression with a decimal */
    case "ADD_DEC":
      if (!num.includes(".")) {
        return {
          currentNum: [...num, "."]
        };
      }
    default:
      return state;
  }
};

const expArrReducer = (state = defaultState, action) => {
  let num = state.currentNum.join("");
  let numArr = state.expressionArr;

  switch (action.type) {
    case "ADD_NUM_ARR":
      return {
        expressionArr: [...numArr, num],
        currentNum: [0]
      };
    default:
      return state;
  }
};

// const opReducer = (state = defaultState, action) => {
//   switch(action.type {
//     case "ADD_OP":

//       switch(action.operator) {

//       }
//   })
// };

// const rootReducer = combineReducers({
//   num: numReducer,
//   expArr: expArrReducer
// });

export default numReducer;
