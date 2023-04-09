import { RouteObject } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import { AdminLogin } from "./pages/admin-login/AdminLogin";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login/admin",
    element: <AdminLogin />,
  },
];

export default routes;
