import reduceReducers from "reduce-reducers";

import numReducer from "./numReducer";
import expArrReducer from "./expArrReducer.js";

export let defaultState = {
  currentNum: [0],
  expressionArr: []
};

/* Connects reducers to a flat store/state */
const rootReducer = reduceReducers(numReducer, expArrReducer);

export default rootReducer;
