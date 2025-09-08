import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/main.css";
import { editTodo } from "../../api/todoApi.js";
import { useSelector } from "react-redux";

const EditTodoPage = () => {
  const todo = useSelector((state) => state.todo.todoSelected);
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      window.alert("标题不能为空");
      return;
    }
    try {
      await editTodo(todo.id, { title, description });
    } catch (error) {
      console.error("修改待办事项失败:", error);
      window.alert("修改待办事项失败，请重试！");
      navigate("/todos");
      return;
    }

    window.alert("修改成功！");
    setTitle("");
    setDescription("");
    navigate("/todos");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">修改待办事项</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
        <textarea
          placeholder="描述（可选）"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          rows={4}
        />
        <button type="submit" className="form-btn">
          修改
        </button>
      </form>
    </div>
  );
};

export default EditTodoPage;
