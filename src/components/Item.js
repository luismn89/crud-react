import React from "react";
import { useDispatch } from "react-redux";

const Item = ({ data, index }) => {
  const { description = "" } = data || {};

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch({ type: "DELETE_TASK_LIST", payload: index });
    dispatch({ type: "ACTIVE_FORM", payload: false });
  };

  const editItem = () => {
    dispatch({ type: "SET_TYPE_FORM", payload: "edit" });
    dispatch({ type: "SET_INDEX_EDIT_TASK", payload: index });
    dispatch({ type: "ACTIVE_FORM", payload: true });
  };

  return (
    <div className="task-list__item">
      <div>{index + 1}</div>
      <p>{description}</p>
      <div>
        <button type="button" className={`btn btn--edit`} onClick={editItem}>
          Editar
        </button>
        <button
          type="button"
          className={`btn btn--delete`}
          onClick={deleteItem}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Item;
