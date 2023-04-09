import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Routes as AuthRoutes } from "./modules/auth";
import { Routes as HomeRoutes } from "./modules/home";
import { RequireAuth } from "./modules/auth";

const privaterRoutes: RouteObject[] = [...HomeRoutes].map(
  ({ element, ...props }) => {
    return {
      ...props,
      element: <RequireAuth>{element as JSX.Element}</RequireAuth>,
    };
  }
);

const publicRoutes: RouteObject[] = [...AuthRoutes];

const routes: RouteObject[] = [
  ...publicRoutes,
  ...privaterRoutes,
  { path: "*", element: <Navigate to="/home" replace={true} /> },
];

export const Router = createBrowserRouter(routes);
