/* Updates store with user-input number */
export const addNum = num => {
  return {
    type: "ADD_NUM",
    num: num
  };
};

/* Updates store with decimal */
export const addDec = () => {
  return {
    type: "ADD_DEC"
  };
};

/* Updates store with previous number */
export const addToNumArr = () => {
  return {
    type: "ADD_NUM_ARR"
  };
};

/* Updates store with operator type */
export const addOp = operator => {
  return {
    type: "ADD_OP",
    operator: operator
  };
};
