
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
import Error from '../pages/Error/Error'
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error> ,
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
          element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader: ()=>fetch('/events.json')
        },
        {
            path: '/trainers',
            element: <Trainers></Trainers>
        },
        {
          path: '/trainers/:id',
          element: <PrivateRoutes><TrainerDetails></TrainerDetails></PrivateRoutes>,
          loader: ()=>fetch('/sponsors.json'),
        },
        {
          path: '/plans',
          element: <Plans></Plans>
        },
        {
          path: '/plans/:id',
          element: <PrivateRoutes><PlanDetails></PlanDetails></PrivateRoutes>,
          loader: ()=>fetch('/gymSupplements.json')
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
    ]
  },
]);
