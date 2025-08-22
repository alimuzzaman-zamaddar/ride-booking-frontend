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
        element: <RideRequest/>
      },
      {
        path: "myRides",
        element: <MyRides/>
      },
    ],
  },
]);

export default router;
