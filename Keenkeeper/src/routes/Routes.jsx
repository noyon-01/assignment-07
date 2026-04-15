import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../home/Home";
import Timeline from "../timeline/Timeline";
import Starts from "../starts/Starts";
import FriendDetails from "../details/FriendDetails";
import Error from "../error/Error";

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
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/starts",
        Component: Starts,
      },
      {
        path: "/friendDetails/:userId",
        loader: () => fetch("/data.json"),
        Component: FriendDetails,
      },
    ],
    errorElement: <Error />,
  },
]);
