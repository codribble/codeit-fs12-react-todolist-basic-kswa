import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // console.log(todos);

  return (
    <div className="container">
      <h1>Todo List</h1>

      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        title="할일"
        todos={todos.filter((todo) => !todo.completed)}
        setTodos={setTodos}
      />
      <TodoList
        title="완료"
        todos={todos.filter((todo) => todo.completed)}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
