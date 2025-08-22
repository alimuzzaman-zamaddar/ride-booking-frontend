import AdminDashboardPage from "./AdminDashboardPage";
import DriverDashboardPage from "./DriverDashboardPage";
import RiderDashboardPage from "./RiderDashboardPage";


const userString = localStorage.getItem("userData");
const user = userString ? JSON.parse(userString) : null;

console.log(user);

const role = user?.role; // use optional chaining to avoid errors
console.log(role);

const DashboardPage = () => {
  if (role === "rider") return <RiderDashboardPage/>;
  if (role === "driver") return <DriverDashboardPage />;
  if (role === "admin") return <AdminDashboardPage />;
  return <div className="p-6 text-red-500">Error: Unknown user role</div>;
};

export default DashboardPage;
