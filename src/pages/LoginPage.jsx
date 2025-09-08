import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/userApi.js";
import { useDispatch } from "react-redux";
import { loadingUser } from "../../features/userSlice.js";
import "../../assets/main.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getIdentity = () => {
      localStorage.getItem("token") && navigate("/todos");
    };
    getIdentity();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await userLogin({ email, password });
      dispatch(loadingUser({ email, password }));
    } catch (error) {
      if (error.message === "dismatch password or email") {
        window.alert("邮箱或密码错误，请重试！");
      } else if (error.message === "token expired") {
        window.alert("登录已过期，请重新登录！");
      } else {
        window.alert("登录失败，请重试！");
      }
      return;
    }
    navigate("/todos");
  };

  return (
    <div className="form-container">
      <h1 className="todolist-title">📝 登录待办清单</h1>
      <form onSubmit={handleLogin}>
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
          登录
        </button>
      </form>
      <button onClick={() => navigate("/register")} className="form-link-btn">
        注册新用户
      </button>
    </div>
  );
};

export default LoginPage;
