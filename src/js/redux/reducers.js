import reduceReducers from "reduce-reducers";
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

      return Object.assign({}, state, {
        currentNum: [...num, action.num]
      });
    /* Updates store value/expression with a decimal */
    case "ADD_DEC":
      if (!num.includes(".")) {
        return Object.assign({}, state, {
          currentNum: [...num, "."]
        });
      }
    default:
      return state;
  }
};

const expArrReducer = (state = defaultState, action) => {
  let num = state.currentNum.join("");
  let expArr = state.expressionArr;

  /* Updates store by pushing current number into expressions array,
  then clearing the current number */
  switch (action.type) {
    case "ADD_EXP_ARR":
      console.log(state);
      return Object.assign({}, state, {
        expressionArr: [...expArr, num],
        currentNum: [0]
      });
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

const newReducer = reduceReducers(numReducer, expArrReducer);

export default newReducer;
