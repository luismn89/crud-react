import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";

import Tasks from "./components/Tasks";

function App() {
  return (
    <Provider store={store}>
      <div className="task">
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
