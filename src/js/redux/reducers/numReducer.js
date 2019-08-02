import { defaultState } from "./rootReducer";

/* Updates store value/expression with user-input number */
const numReducer = (state = defaultState, action) => {
  let num = state.currentNum;

  switch (action.type) {
    case "ADD_NUM":
      /* Replaces initial '0' with user-input number */
      if (num.length === 1 && num[0] === 0) {
        /* If first user-input number is '0', no action */
        if (action.num === 0) {
        }
        num = [];
      }

      console.log(state.expressionArr);

      return typeof num[0] === "string"
        ? Object.assign({}, state, {
            currentNum: [action.num]
          })
        : Object.assign({}, state, {
            currentNum: [...num, action.num]
          });
    /* Updates store value/expression with a decimal */
    case "ADD_DEC":
      if (!num.includes(".")) {
        return Object.assign({}, state, {
          currentNum: [...num, "."]
        });
      }
      break;
    default:
      return state;
  }
};

export default numReducer;
