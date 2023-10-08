
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Plans from "../pages/Plans/Plans";
import ServiceDetails from "../pages/Services/ServiceDetails";
import PlanDetails from "../pages/Plans/PlanDetails";
import Error from '../pages/Error/Error'
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
import Sponsors from "../pages/Sponsors/Sponsors";
import SponsorDetails from "../pages/Sponsors/SponsorDetails";
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
            path: '/sponsors',
            element: <Sponsors></Sponsors>
        },
        {
          path: '/sponsors/:id',
          element: <PrivateRoutes><SponsorDetails></SponsorDetails></PrivateRoutes>,
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
