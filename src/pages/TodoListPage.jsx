import { useState, useEffect } from "react";
import { getTodos } from "../../api/todoApi.js";
import TodoCard from "../../components/todoCard.jsx";
import "../../assets/main.css";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-title">我的TodoList</h2>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li>暂无TodoList</li>
        ) : (
          <TodoCard todos={todos} setTodos={setTodos} />
        )}
      </ul>
    </div>
  );
};

export default TodoListPage;
