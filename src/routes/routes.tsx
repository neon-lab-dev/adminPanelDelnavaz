import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users/Users";
import Recordings from "../pages/Recordings/Recordings";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound/NotFound";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "recordings",
        element: <Recordings />,
      },
    ],
  },
]);
