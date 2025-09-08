import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoListPage from "./pages/TodoListPage";
import { Provider } from "react-redux";
import store from "../app/store.js";
import NavBar from "../components/NavBar.jsx";
import NewTodoPage from "./pages/NewTodo.jsx";
import EditTodoPage from "./pages/EditPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import UndefinedPage from "./pages/UndefinedPage.jsx";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<NavBar />}>
            <Route path="/todos" element={<TodoListPage />} />
            <Route path="/newtodo" element={<NewTodoPage />} />
            <Route path="/edit" element={<EditTodoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
