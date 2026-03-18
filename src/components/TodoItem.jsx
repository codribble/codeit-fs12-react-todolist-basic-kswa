import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo__item ${todo.completed ? " completed" : ""}`}>
      <p className="">{todo.title}</p>
      <p>{new Date(todo.createdAt).toLocaleString()}</p>
      <div className="btn__group">
        <button onClick={() => onToggle(todo.id)} className="btn btn--toggle">
          {todo.completed ? "취소" : "완료"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="btn btn--delete">
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
