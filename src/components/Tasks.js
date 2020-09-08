import React, { useState } from "react";

import Header from "./Header";
import ItemList from "./ItemList";
import Form from "./Form";

const Tasks = () => {
  const [formActive, setFormActive] = useState(false);
  const [typeForm, setTypeForm] = useState("");

  return (
    <>
      <div className={`task-list ${formActive ? "task-list--middle" : ""}`}>
        <Header {...{ formActive, setFormActive, setTypeForm }} />
        <ItemList
          {...{
            setTypeForm,
            setFormActive,
          }}
        />
      </div>
      <div className="task-formContainer">
        <Form {...{ typeForm, setFormActive }} />
      </div>
    </>
  );
};

export default Tasks;
