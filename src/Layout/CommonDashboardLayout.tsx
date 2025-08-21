import { Outlet } from "react-router-dom";
import { GiClassicalKnowledge } from "react-icons/gi";
import DashboardFooter from "../Pages/Dashboard/Shared/DashboardFooter";
import DashboardNavbar from "../Pages/Dashboard/Shared/DashboardNavbar";
import Sidebar from "../Pages/Dashboard/Shared/Sidebar";
import { EarningsSvg, HomeSvg, SettingsSvg } from "../components/SvgContainer/SVgContainer";
import { FaCalculator } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { ScrollRestoration } from "react-router-dom";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";
import { useGetUserDataQuery } from "../redux/Slices/authSlice";

const tutorNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  { id: 3, icon: GrSchedule, path: "/dashboard/schedule", title: "Schedule" },
  {
    id: 4,
    icon: EarningsSvg,
    path: "/dashboard/earnings",
    title: "Earnings",
  },
  {
    id: 4,
    icon: EarningsSvg,
    path: "/dashboard/availability",
    title: "Availability",
  },
  {
    id: 7,
    icon: SettingsSvg,
    path: "tutor-settings",
    title: "Settings",
  },
];

const studentNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "/dashboard/find-tutors",
    title: "Find Tutors",
  },
  {
    id: 3,
    icon: FaCalculator,
    path: "my-lessons",
    title: "My Lessons",
  },
  {
    id: 4,
    icon: GiClassicalKnowledge,
    path: "/dashboard/messages",
    title: "Messages",
  },
  {
    id: 7,
    icon: MdOutlineSettings,
    path: "/dashboard/settings",
    title: "Settings",
  },
];

const CommonDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { data: user } = useGetUserDataQuery(undefined)
  
  const role = user?.data?.role;
  return (
    <div className="flex h-screen bg-[#FAFAFA] ">
      {/* Sidebar */}
      {role === "student" && (
        <Sidebar
          navLinks={studentNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {role === "tutor" && (
        <Sidebar
          navLinks={tutorNavLinks}
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
        {/* Fixed Footer aligned to content area only */}
        <div className="flex-0  container mb-2 xl:mb-6   ">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
