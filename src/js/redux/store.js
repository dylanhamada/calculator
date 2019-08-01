import { createStore } from "redux";
import numReducer from "./reducers";

const store = createStore(numReducer);

export default store;
