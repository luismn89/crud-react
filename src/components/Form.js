import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ typeForm, setFormActive }) => {
  const dispatch = useDispatch();
  const { taskList, indexTaskSelect } = useSelector((state) => state);

  const isAdd = typeForm === "add";
  const [newData, setNewData] = useState({ description: "" });

  const addItem = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "SET_TASK_LIST",
      payload: newData,
    });
    setNewData({ description: "" });
    setFormActive(false);
  };

  const editItem = (evt) => {
    evt.preventDefault();
    dispatch({ type: "EDIT_TASK_LIST", payload: newData });
    setNewData({ description: "" });
    setFormActive(false);
  };

  const editValue =
    indexTaskSelect !== null ? taskList[indexTaskSelect].description : "";

  const initValue = isAdd ? newData.description : editValue;

  return (
    <form
      action="#"
      className="task-formContainer__form"
      onSubmit={isAdd ? addItem : editItem}
    >
      {isAdd && (
        <input
          type="text"
          name="description"
          className="inputText"
          placeholder="Descripcion de tarea"
          value={initValue}
          onChange={(evt) => {
            setNewData({ description: evt.target.value });
          }}
        />
      )}
      {!isAdd && (
        <input
          type="text"
          name="description"
          className="inputText"
          placeholder="Descripcion de tarea"
          defaultValue={initValue}
          onChange={(evt) => {
            setNewData({ description: evt.target.value });
          }}
        />
      )}
      <button
        type="submit"
        className={`btn ${isAdd ? "btn--add" : "btn--edit"}`}
      >
        Guardar
      </button>
    </form>
  );
};

export default Form;
