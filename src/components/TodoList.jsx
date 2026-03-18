import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, setTodos }) => {
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <section className="todo__list">
      <h2>{title} 목록</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <li className="empty">{title} 목록이 없습니다.</li>
        )}
      </ul>
    </section>
  );
};

export default TodoList;
