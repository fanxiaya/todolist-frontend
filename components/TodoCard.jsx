import { useDispatch } from "react-redux";
import { toggleState, deleteTodo } from "../api/todoApi.js";
import { useNavigate } from "react-router-dom";
import { loadingTodo } from "../features/todoSlice.js";

function TodoCard({ todos, setTodos }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todosCollection = todos.map((todo) => (
    <li key={todo.id} className="todo-card">
      <div className="todo-card-title">{todo.title}</div>
      <div className="todo-card-desc">{todo.description}</div>
      <div className="todo-card-status">
        状态：{todo.completed ? "已完成" : "未完成"}
      </div>
      <div className="todo-card-date">
        更新时间：{todo.updateAt ? todo.updateAt.slice(0, 10) : "-"}
      </div>
      <div className="todo-card-actions">
        <button
          className="todo-btn todo-btn-edit"
          onClick={() => {
            dispatch(
              loadingTodo({
                description: todo.description,
                title: todo.title,
                id: todo.id,
              })
            );
            navigate("/edit");
          }}
        >
          编辑
        </button>
        <button
          className="todo-btn todo-btn-delete"
          onClick={() => {
            deleteTodo(todo.id);
            setTodos((previous) =>
              previous.filter((item) => item.id !== todo.id)
            );
          }}
        >
          删除
        </button>
        {!todo.completed && (
          <button
            className="todo-btn todo-btn-complete"
            onClick={() => {
              toggleState(todo.id);
              setTodos((previous) => {
                return previous.map((item) =>
                  item.id === todo.id
                    ? {
                        ...item,
                        completed: true,
                      }
                    : item
                );
              });
            }}
          >
            完成
          </button>
        )}
      </div>
    </li>
  ));

  return <>{todosCollection}</>;
}
export default TodoCard;
