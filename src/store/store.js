import { createStore } from "redux";
import reducers from "./reducers";

const initialState = {
  taskList: [],
  indexTaskSelect: null,
  activeForm: false,
  typeForm: "",
};

const store = createStore(reducers, initialState);

export default store;
