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
export const addToExpArr = func => {
  return {
    type: "ADD_EXP_ARR",
    func: func
  };
};

/* Updates store with operator type */
export const addOp = operator => {
  return {
    type: "ADD_OP",
    operator: operator
  };
};
