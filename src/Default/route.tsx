import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Users from "../pages/Users/Users";
import Recordings from "../pages/recordings/Recordings";
import Login from "../pages/Login";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Users />,
      },
      {
        path: "/recordings",
        element: <Recordings />,
      },
    ],
  },
]);
