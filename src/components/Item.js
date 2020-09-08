import React from "react";

const Item = ({ data, index, deleteItem, editItem }) => {
  const { description = "" } = data || {};
  return (
    <div className="task-list__item">
      <div>{index + 1}</div>
      <p>{description}</p>
      <div>
        <button
          type="button"
          className={`btn btn--edit`}
          onClick={() => editItem(index)}
        >
          Editar
        </button>
        <button
          type="button"
          className={`btn btn--delete`}
          onClick={() => {
            deleteItem(index);
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Item;
