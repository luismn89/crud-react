import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

const ItemList = ({ setTypeForm, setFormActive }) => {
  const dispatch = useDispatch();

  const deleteItem = (ind) =>
    dispatch({ type: "DELETE_TASK_LIST", payload: ind });

  const editItem = (ind) => {
    setTypeForm("edit");
    dispatch({ type: "SET_INDEX_EDIT_TASK", payload: ind });
    setFormActive(true);
  };

  const taskList = useSelector(({ taskList }) => taskList);

  return (
    <>
      <div className="task-list__list-header">
        <div>#</div>
        <div>Descripcion de Tarea</div>
      </div>
      {taskList &&
        taskList.map((data, index) => (
          <Item key={index} {...{ data, index, deleteItem, editItem }} />
        ))}
    </>
  );
};

export default ItemList;
