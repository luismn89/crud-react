import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import ItemList from "./ItemList";
import Form from "./Form";

const URL_API = "https://jsonplaceholder.typicode.com/todos/";

const Tasks = () => {
  const { activeForm } = useSelector((stage) => stage);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const promise = await fetch(URL_API);
      const response = await promise.json();
      const result = response
        .filter((item, i) => i < 10)
        .map(({ title }) => {
          return {
            description: title,
          };
        });

      dispatch({
        type: "SET_TASK_LIST",
        payload: result,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={`task-list ${activeForm ? "task-list--middle" : ""}`}>
        <Header />
        <ItemList />
      </div>
      <div className="task-form-container">
        <Form />
      </div>
    </>
  );
};

export default Tasks;
