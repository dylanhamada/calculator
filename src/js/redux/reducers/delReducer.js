import { defaultState } from "./rootReducer";

const delReducer = (state = defaultState, action) => {
  let num = [...state.currentNum];
  let exp = [...state.expressionArr];

  switch (action.type) {
    case "DEL_VAL":
      if (num.length === 2 && num[1] === ".") {
        exp.splice(exp.length - 2, 2);

        return Object.assign({}, state, {
          currentNum: [],
          expressionArr: exp
        });
      }

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
