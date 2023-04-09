import { RouteObject } from "react-router-dom";
import Home from "./pages/home/Home";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
];

export default routes;
