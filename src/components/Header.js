import React from "react";
import { useDispatch } from "react-redux";

const Header = ({ formActive, setFormActive, setTypeForm }) => {
  const dispatch = useDispatch();
  return (
    <section className="task__header">
      <h1>Listado de Tareas</h1>
      <button
        type="button"
        className={`btn ${formActive ? "btn--cancel" : "btn--add"}`}
        onClick={() => {
          setFormActive(!formActive);
          setTypeForm("add");
          dispatch({ type: "SET_INDEX_EDIT_TASK", payload: null });
        }}
      >
        {formActive ? "Cancelar" : "Agregar"}
      </button>
    </section>
  );
};

export default Header;
