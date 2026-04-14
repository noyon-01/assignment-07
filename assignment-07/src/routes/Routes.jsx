import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../home/Home";
import About from "../about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/about",
            Component: About
        }
    ]
  },
]);
