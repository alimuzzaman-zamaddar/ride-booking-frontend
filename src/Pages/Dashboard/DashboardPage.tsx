import StudentDashboardPage from "./StudentDashboard/StudentDashboardPage";
import TutorDashboardPage from "./TutorDashboard/TutorDashboardPage";



const role: "student" | "tutor" = "tutor"; 

const DashboardPage = () => {
  if (role === "tutor") return <TutorDashboardPage />;
  if (role === "student") return <StudentDashboardPage />;
  return <div className="p-6 text-red-500">Error: Unknown user role</div>;
};

export default DashboardPage;
