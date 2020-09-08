import { createStore } from "redux";
import reducers from "./reducers";

const initialState = {
  taskList: [],
  indexTaskSelect: null,
};

const store = createStore(reducers, initialState);

export default store;
