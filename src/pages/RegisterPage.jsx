import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userRegister from "../../api/userApi.js";

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
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        padding: 32,
        boxShadow: "0 2px 8px #eee",
        borderRadius: 8,
      }}
    >
      <h2>注册</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 8 }}
          required
        />
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
          style={{ width: "100%", padding: 10 }}
          onClick={handleRegister}
        >
          注册
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
