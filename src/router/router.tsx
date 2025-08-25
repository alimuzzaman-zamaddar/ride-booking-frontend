import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/Auth/sign-up";
import Login from "../Pages/Auth/Login";

import Layout from "../Layout/Layout";
import Home from "../Pages/home/Home";
import CommonDashboardLayout from "../Layout/CommonDashboardLayout";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import RiderDashboardPage from "../Pages/Dashboard/RiderDashboardPage";
import DriverDashboardPage from "../Pages/Dashboard/DriverDashboardPage";
import AdminDashboardPage from "../Pages/Dashboard/AdminDashboardPage";
import RideRequest from "../Pages/Dashboard/Rider/RideRequest";
import MyRides from "../Pages/Dashboard/Rider/MyRides";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import UserDetails from "../Pages/Dashboard/Admin/UserDetails";
import About from "../Pages/About/About";
import Features from "../Pages/Features/Features";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/faq/FAQ";
import RideDetails from "../Pages/Dashboard/Rider/RideDetails";
import Profile from "../Pages/Dashboard/Rider/Profile";
import GoOnline from "../Pages/Dashboard/Driver/GoOnline";
import IncomingRequests from "../Pages/Dashboard/Driver/IncomingRequests";
import ActiveRide from "../Pages/Dashboard/Driver/ActiveRide";


const userString = localStorage.getItem("userData");
const user = userString ? JSON.parse(userString) : null;

// console.log(user);

const role = user?.role; // use optional chaining to avoid errors
// console.log(role);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },

  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },

  {
    path: "/dashboard/",
    element: <CommonDashboardLayout />,
    children: [
      {
        index: true,
        element:
          role === "rider" ? (
            <RiderDashboardPage />
          ) : role === "driver" ? (
            <DriverDashboardPage />
          ) : role === "admin" ? (
            <AdminDashboardPage />
          ) : (
            <DashboardPage />
          ),
      },

      {
        path: "rideRequest",
        element: <RideRequest />,
      },
      {
        path: "myRides",
        element: <MyRides />,
      },
      {
        path: "users",
        element: <AllUser />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "ride/:id",
        element: <RideDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "online",
        element: <GoOnline />,
      },
      {
        path: "incomingRequests",
        element: <IncomingRequests />,
      },
      {
        path: "activeRide",
        element: <ActiveRide />,
      },
    ],
  },
]);

export default router;
