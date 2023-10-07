
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Trainers from "../pages/Trainers/Trainers";
import Plans from "../pages/Plans/Plans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/trainers',
            element: <Trainers></Trainers>
        },
        {
          path: '/plans',
          element: <Plans></Plans>
        }
    ]
  },
]);
