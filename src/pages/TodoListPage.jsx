import React from "react";

const TodoListPage = () => {
  // 这里只是界面占位，后续可接入 API
  return (
    <div style={{ maxWidth: 600, margin: "60px auto", padding: 32 }}>
      <h2>我的待办事项</h2>
      <ul>
        <li>示例待办事项 1</li>
        <li>示例待办事项 2</li>
      </ul>
    </div>
  );
};

export default TodoListPage;
