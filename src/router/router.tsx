import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";
import Onboarding from "../Pages/Auth/Tutor/Onbording";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import StudentOnboarding from "../Pages/Auth/Student/StudentOnboarding";
import BecomeTutor from "../Pages/PulicRoutes/BecomeTutor";
import CommonDashboardLayout from "../Layout/CommonDashboardLayout";
import FindTutor from "../Pages/Dashboard/StudentDashboard/FindTutor";

import TutorProfile from "../Pages/Dashboard/StudentDashboard/TutorProfile";
import { MyLessons } from "../Pages/Dashboard/StudentDashboard/MyLessons";
import { RescheduleLesson } from "../Pages/Dashboard/StudentDashboard/RescheduleLesson";
import { CancelLesson } from "../Pages/Dashboard/StudentDashboard/CancelLesson";
import FeedbackForm from "../Pages/Dashboard/StudentDashboard/FeedBackForm";
import BookATutor from "../Pages/Dashboard/StudentDashboard/BookATutor";
import StudentProfileSettings from "../Pages/Dashboard/StudentDashboard/Settings/StudentProfileSettings";
import Invoice from "../Pages/Dashboard/StudentDashboard/Settings/Invoice";
import AddCard from "../Pages/Dashboard/StudentDashboard/Settings/AddCard";
import AddPaymentMethod from "../Pages/Dashboard/StudentDashboard/Settings/AddPaymentMethod";
import TutorCredentials from "../Pages/Dashboard/StudentDashboard/TutorCredentials";
import CommonMessageComponent from "../components/CommonComponents/CommonMessageComponent";
import RecentStudents from "../Pages/Dashboard/TutorDashboard/RecentStudents";
import ScheduleManagement from "../Pages/Dashboard/TutorDashboard/ScheduleManagement";
import  Earnings from "../Pages/Dashboard/TutorDashboard/Earnings";
import TutorProfileSettings from "../Pages/Dashboard/TutorDashboard/Settings/TutorProfileSettings";
import PlatformGuidelines from "../components/CommonComponents/PlatformGuidelines";
import ContactForm from "../components/CommonComponents/ContactForm";
import ReportProblem from "../components/CommonComponents/ReportProblem";
import Availability from "../Pages/Dashboard/TutorDashboard/Availability";
import TutorReviw from "../Pages/Dashboard/TutorDashboard/TutorReviw";
import StudentProfile from "../Pages/Dashboard/TutorDashboard/StudentProfile";
import StudentDashboardPage from "../Pages/Dashboard/StudentDashboard/StudentDashboardPage";
import CustomCalendarContainer from "../components/CommonComponents/CustomCalendarContainer";
import OTPVerifyForm from "../Pages/Auth/OTPVerifyForm";
import Login from "../Pages/Auth/Login";
import VerifyEmail from "../Pages/Auth/VerifyEmail";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignUp from "../Pages/Auth/sign-up";

const role = localStorage.getItem("role")


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
        path: "find-a-tutor",
        element: <FindaTutor />,
      },
      {
        path: "become-tutor",
        element: <BecomeTutor />,
      },
    ],
  },

  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/otp-verify", element: <OTPVerifyForm /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/onbording", element: <Onboarding /> },
  { path: "/student-on-boarding", element: <StudentOnboarding /> },

  {
    path: "/dashboard/",
    element: <CommonDashboardLayout />,
    children: [
      {
        index: true,
        element:
          role === "tutor" ? <DashboardPage /> : <StudentDashboardPage />,
      },
      {
        path: "find-tutors",
        element: <FindTutor />,
      },
      {
        path: "tutors/:id",
        element: <TutorProfile />,
      },
      {
        path: `/dashboard/book/tutor/:id`,
        element: <BookATutor />,
      },
      {
        path: "my-lessons",
        element: <MyLessons />,
      },
      {
        path: "my-lessons/reschedule",
        element: <RescheduleLesson />,
      },
      {
        path: "my-lessons/cancel",
        element: <CancelLesson />,
      },
      {
        path: "my-lessons/feedback",
        element: <FeedbackForm />,
      },
      {
        path: "settings",
        element: <StudentProfileSettings />,
      },
      {
        path: "settings/invoice",
        element: <Invoice />,
      },
      {
        path: "settings/add-card",
        element: <AddCard />,
      },
      {
        path: "settings/payment-method",
        element: <AddPaymentMethod />,
      },
      {
        path: "tutors/qulifications/:id",
        element: <TutorCredentials />,
      },
      {
        path: "messages",
        element: <CommonMessageComponent />,
      },
      {
        path: "recent-students",
        element: <RecentStudents />,
      },
      {
        path: "/dashboard/schedule",
        element: <ScheduleManagement />,
      },
      {
        path: "/dashboard/earnings",
        element: <Earnings />,
      },
      {
        path: "/dashboard/availability",
        element: <CustomCalendarContainer />,
      },
      {
        path: "tutor-settings",
        element: <TutorProfileSettings />,
      },
      {
        path: "payment-method",
        element: <AddPaymentMethod />,
      },
      {
        path: "guidelines",
        element: <PlatformGuidelines />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "report-a-problem",
        element: <ReportProblem />,
      },
      { path: "tutor/availability", element: <Availability /> },
      {
        path: "tutor/reviews",
        element: <TutorReviw />,
      },
      {
        path: "student/profile/:id",
        element: <StudentProfile />,
      },
    ],
  },
]);

export default router;
