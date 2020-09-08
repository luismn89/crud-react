import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MESSAGE_ERROR = {
  required: "Asegurese de llenar todos los campos del formulario!",
};

const Form = () => {
  const dispatch = useDispatch();
  const { taskList, indexTaskSelect, typeForm } = useSelector((state) => state);

  const isAdd = typeForm === "add";
  const [newData, setNewData] = useState({ description: "" });
  const [isValid, setIsValid] = useState("");

  const addItem = (evt) => {
    evt.preventDefault();
    if (isValid) {
      dispatch({ type: "SET_TASK_LIST", payload: [newData] });
      setNewData({ description: "" });
      dispatch({ type: "ACTIVE_FORM", payload: false });
    }
  };

  const editItem = (evt) => {
    evt.preventDefault();
    if (isValid) {
      dispatch({ type: "EDIT_TASK_LIST", payload: newData });
      setNewData({ description: "" });
      dispatch({ type: "ACTIVE_FORM", payload: false });
    }
  };

  const cancel = () => {
    setNewData({ description: "" });
    dispatch({ type: "ACTIVE_FORM", payload: false });
  };

  const handleOnChange = (evt) => {
    setNewData({ description: evt.target.value });
  };

  const handleOnBlur = () => {
    setIsValid(newData && newData.description !== "");
  };

  const editValue =
    indexTaskSelect !== null && taskList[indexTaskSelect]
      ? taskList[indexTaskSelect]
      : "";

  const initValue = isAdd ? newData.description : editValue.description;

  return (
    <>
      <h2>Registro de Tareas:</h2>
      <form
        action="#"
        className="task-form-container__form"
        onSubmit={isAdd ? addItem : editItem}
      >
        {isAdd && (
          <input
            type="text"
            name="description"
            className={`task-form-container__input-text ${
              typeof isValid === "boolean" && !isValid
                ? "task-form-container__input-text--error"
                : ""
            }`}
            placeholder="Descripcion de tarea"
            value={initValue}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        )}
        {!isAdd && (
          <input
            type="text"
            name="description"
            className={`task-form-container__input-text ${
              typeof isValid === "boolean" && !isValid
                ? "task-form-container__input-text--error"
                : ""
            }`}
            placeholder="Descripcion de tarea"
            defaultValue={initValue}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        )}
        {typeof isValid === "boolean" && !isValid && (
          <span className="task-form-container__msg-error">
            {MESSAGE_ERROR.required}
          </span>
        )}
        <div className="task-form-container__group-btns">
          <button
            type="submit"
            className={`btn ${isAdd ? "btn--add" : "btn--edit"}`}
          >
            Guardar
          </button>
          <button type="button" className="btn btn--cancel" onClick={cancel}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
