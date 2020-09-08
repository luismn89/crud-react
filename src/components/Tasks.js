import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import ItemList from "./ItemList";
import Form from "./Form";

const Tasks = () => {
  const { activeForm } = useSelector((stage) => stage);

  return (
    <>
      <div className={`task-list ${activeForm ? "task-list--middle" : ""}`}>
        <Header />
        <ItemList />
      </div>
      <div className="task-formContainer">
        <Form />
      </div>
    </>
  );
};

export default Tasks;
