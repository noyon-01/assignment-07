import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../home/Home";
import Timeline from "../timeline/Timeline";
import Starts from "../starts/Starts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("data.json"),
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/starts",
        Component: Starts,
      },
    ],
  },
]);
