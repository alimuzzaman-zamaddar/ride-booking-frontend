import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/Shared/DashboardNavbar";
import Sidebar from "../Pages/Dashboard/Shared/Sidebar";
import { HomeSvg } from "../components/SvgContainer/SVgContainer";
import { FiSearch } from "react-icons/fi";
import { ScrollRestoration } from "react-router-dom";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";


const RiderNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 3,
    icon: GrSchedule,
    path: "rideRequest",
    title: "Request a ride",
  },
  { id: 3, icon: GrSchedule, path: "myRides", title: "My Rides" },
];

const DriverNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "#",
    title: "complete rides",
  },

];
const AdminNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "users",
    title: "All Users",
  },

];

const CommonDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

const userString = localStorage.getItem("userData");
const user = userString ? JSON.parse(userString) : null;

console.log(user);

const role = user?.role; // use optional chaining to avoid errors
console.log(role);

  
  // const role = "admin";
  return (
    <div className="flex h-screen bg-[#FAFAFA] ">
      {/* Sidebar */}
      {role === "rider" && (
        <Sidebar
          navLinks={RiderNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {role === "driver" && (
        <Sidebar
          navLinks={DriverNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {role === "admin" && (
        <Sidebar
          navLinks={AdminNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 h-screen  ">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-20">
          <DashboardNavbar setShowSidebar={setShowSidebar} />
        </div>
        {/* Scrollable content */}
        <div className="flex-1  overflow-y-auto mt-[60px] pb-[50px] xl:pb-[250px] h-auto px-4 py-10 ">
          <Outlet />
          <ScrollRestoration />
        </div>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
