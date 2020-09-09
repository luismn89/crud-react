import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
  const taskList = useSelector(({ taskList }) => taskList);

  return (
    <>
      <div className="task-list__list-header">
        <div>#</div>
        <div>Descripcion de Tarea</div>
      </div>
      {taskList &&
        taskList.map((data, index) => (
          <Item key={index} {...{ data, index }} />
        ))}
    </>
  );
};

export default ItemList;
