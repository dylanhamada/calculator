import { defaultState } from "./rootReducer";

const delReducer = (state = defaultState, action) => {
  let num = [...state.currentNum];
  let exp = [...state.expressionArr];

  switch (action.type) {
    case "DEL_VAL":
      num.pop();
      exp.pop();
      return Object.assign({}, state, {
        currentNum: num,
        expressionArr: exp
      });
    default:
      return state;
  }
};

export default delReducer;
