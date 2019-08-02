import { defaultState } from "./rootReducer";

/* Updates store by pushing current number into expressions array,
  then clearing the current number */
const expArrReducer = (state = defaultState, action) => {
  let num = state.currentNum.join("");
  let func = action.func;
  let expArr = state.expressionArr;

  switch (action.type) {
    case "ADD_EXP_ARR":
      console.log(num);
      return Object.assign({}, state, {
        expressionArr: [...expArr, num, func],
        currentNum: [func]
      });
    default:
      return state;
  }
};

export default expArrReducer;
