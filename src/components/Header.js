import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { activeForm } = useSelector((stage) => stage);
  return (
    <section className="task__header">
      <h1>Listado de Tareas</h1>
      <button
        type="button"
        className={`btn ${activeForm ? "btn--cancel" : "btn--add"}`}
        onClick={() => {
          dispatch({ type: "ACTIVE_FORM", payload: !activeForm });
          dispatch({ type: "SET_TYPE_FORM", payload: "add" });
          dispatch({ type: "SET_INDEX_EDIT_TASK", payload: null });
        }}
      >
        {activeForm ? "Cancelar" : "Agregar"}
      </button>
    </section>
  );
};

export default Header;
