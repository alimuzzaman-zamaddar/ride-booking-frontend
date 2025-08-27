import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/Shared/DashboardNavbar";
import Sidebar from "../Pages/Dashboard/Shared/Sidebar";
import { HomeSvg } from "../components/SvgContainer/SVgContainer";
import { FiSearch } from "react-icons/fi";
import { ScrollRestoration } from "react-router-dom";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";
import { useGetMeQuery } from "../redux/features/ride/profile.api";


const RiderNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "rideRequest",
    title: "Request a ride",
  },
  { id: 3, icon: GrSchedule, path: "myRides", title: "My Rides" },
  { id: 3, icon: GrSchedule, path: "profile", title: "My profile" },
];

const DriverNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "#",
    title: "complete rides",
  },
  { id: 3, icon: GrSchedule, path: "profile", title: "My profile" },
  { id: 5, icon: GrSchedule, path: "online", title: "Go Online" },
  { id: 6, icon: GrSchedule, path: "incomingRequests", title: "Ride Request" },
  { id: 7, icon: GrSchedule, path: "activeRide", title: "Active Ride" },
  { id: 7, icon: GrSchedule, path: "earnings", title: "My Earnings" },
  { id: 8, icon: GrSchedule, path: "history", title: "Ride History" },
];
const AdminNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "users",
    title: "All Users",
  },
  { id: 3, icon: GrSchedule, path: "profile", title: "My profile" },
];

const CommonDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { data, isLoading, error } = useGetMeQuery();
  
  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Error loading user data</div>;

  console.log(data?.data?.role, "data from layout");
  



// const userString = localStorage.getItem("userData");
// const user = userString ? JSON.parse(userString) : null;

// console.log(user);

const role = data?.data?.role; // use optional chaining to avoid errors
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
