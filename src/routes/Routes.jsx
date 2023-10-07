
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
import ServiceDetails from "../pages/Services/ServiceDetails";
import TrainerDetails from "../pages/Trainers/TrainerDetails";
import PlanDetails from "../pages/Plans/PlanDetails";

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
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ()=>fetch('/gym.json')
        },
        {
            path: '/trainers',
            element: <Trainers></Trainers>
        },
        {
          path: '/trainers/:id',
          element: <TrainerDetails></TrainerDetails>,
          loader: ()=>fetch('/personalTrainer.json'),
        },
        {
          path: '/plans',
          element: <Plans></Plans>
        },
        {
          path: '/plans/:id',
          element: <PlanDetails></PlanDetails>,
          loader: ()=>fetch('/gymSupplements.json')
        }
    ]
  },
]);
