import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("할 일을 입력해주세요.");
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="todo-title">해야할 일</label>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        id="todo-title"
        className="form__input"
      />
      <button type="submit" className="btn btn--submit">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
