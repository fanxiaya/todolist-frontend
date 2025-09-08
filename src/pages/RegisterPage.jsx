import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userRegister from "../../api/userApi.js";
import "../../assets/main.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await userRegister({ name, email, password });
    } catch (error) {
      console.error("in RegisterPage:", error);
      window.alert("注册失败，请重试！");
      return;
    }
    window.alert("注册成功！");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1 className="todolist-title">📝 注册待办清单</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="form-btn">
          注册
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
