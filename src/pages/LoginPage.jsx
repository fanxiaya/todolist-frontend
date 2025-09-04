import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 登录逻辑后跳转 todo 页面
    navigate("/todos");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        padding: 32,
        boxShadow: "0 2px 8px #eee",
        borderRadius: 8,
      }}
    >
      <h2>登录</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 8 }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 8 }}
          required
        />
        <button
          type="submit"
          style={{ width: "100%", padding: 10, marginBottom: 8 }}
        >
          登录
        </button>
      </form>
      <button
        onClick={() => navigate("/register")}
        style={{ width: "100%", padding: 10 }}
      >
        注册新用户
      </button>
    </div>
  );
};

export default LoginPage;
