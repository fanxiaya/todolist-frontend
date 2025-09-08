import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import LogoutIcon from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List Site
          </Typography>

          <Box sx={{ display: { sm: "flex" }, gap: 2 }}>
            <Button
              key="home"
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
              startIcon={<HomeIcon />}
              onClick={() => {
                navigate("/");
              }}
            >
              首页
            </Button>
            <Button
              key="newTodo"
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
              startIcon={<FiberNewIcon />}
              onClick={() => {
                navigate("/newtodo");
              }}
            >
              新建Todo
            </Button>
            <Button
              key="about"
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
              startIcon={<InfoIcon />}
              onClick={() => {
                navigate("/about");
              }}
            >
              关于
            </Button>

            <Button
              key="logout"
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
              startIcon={<LogoutIcon />}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              登出
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      <Outlet />
    </Box>
  );
}

export default NavBar;
