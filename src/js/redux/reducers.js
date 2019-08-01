let defaultState = {
  expression: [0]
};

const numReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NUM":
      return {
        expression: [...state.expression, action.num]
      };
    default:
      return state;
  }
};

export default numReducer;
