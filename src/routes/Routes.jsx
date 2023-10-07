
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);
