import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";

export const routes = [
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/signup", element: <Signup/>},
  { path: "/", element: <Home /> },
  { path: "/edit/:id", element: <EditBook /> },
];
