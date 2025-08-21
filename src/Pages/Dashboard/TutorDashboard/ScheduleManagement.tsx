import { useState } from "react";
import { LessonCard } from "./LessonCard";
import Heading from "../../../components/Tags/Heading/Heading";
import { FaAngleLeft } from "react-icons/fa";
import Schedule from "./Schedule";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";

const todaysLessons = [
  {
    id: 1,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "2:00 PM - 3:00 PM",
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    joinable: true,
  },
  {
    id: 2,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "2:00 PM - 3:00 PM",
    status: "Trail",
    statusColor: "text-[#0E7615] bg-[rgba(14,118,21,0.2)]",
    joinable: false,
  },
];

const upcomingLessons = [
  {
    id: 3,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Tomorrow • 10:00 AM - 11:00 AM",
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Trail",
    statusColor: "text-[#0E7615] bg-[rgba(14,118,21,0.2)]",
    joinable: false,
  },
];

const upcomingLessonss = [
  {
    id: 3,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Tomorrow • 10:00 AM - 11:00 AM",
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    joinable: false,
  },
];

const ScheduleManagement = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="">
      <div className="">
        <button
          onClick={() => window.history.back()}
          className="  border border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[14px] font-semibold duration-700 hover:text-text-white px-6 py-[14px] cursor-pointer text-secondary-black rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>

      <section className=" w-full xl:max-w-[80%] mx-auto mt-10">
        <div className="bg-primary-blue p-4 xl:p-8 rounded-xl mb-8">
          <Heading
            Variant="h2"
            Txt="Schedule Management"
            className="text-[24px] xl:text-[32px] text-text-white font-semibold mb-1"
          />
          <Paragraph
            className="text-secondary-white font-normal text-sm xl:text-[16px]  leading-[150%] "
            Txt="Manage your teaching schedule and availability"
          />
        </div>

        {/* Tabs */}
        <div className="flex mb-6 p-2 bg-bg-light-gray rounded-md">
          <button
            className={`py-1 px-2 xl:px-6  text-xs xl:text-[16px] cursor-pointer leading-[150%] text-primary-gray font-semibold ${
              activeTab === "today"
                ? " bg-bg-white  rounded-lg text-primary-gray"
                : "text-primary-gray"
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today's Lessons
          </button>
          <button
            className={`py-1 px-2 xl:px-6  text-xs xl:text-[16px] cursor-pointer leading-[150%] text-primary-gray font-semibold  ${
              activeTab === "calendar"
                ? "bg-bg-white  rounded-lg text-primary-gray"
                : "text-primary-gray"
            }`}
            onClick={() => setActiveTab("calendar")}
          >
            Calendar View
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "today" && (
          <div className="flex flex-col 2xl:flex-row gap-6 ">
            <div className="bg-bg-white border border-alt-border rounded-xl p-3 xl:p-6">
              <Heading
                className="text-[20px] xl:text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Today's Lessons"
              />
              <div className="space-y-4">
                {todaysLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
            <div className="bg-bg-white border border-alt-border rounded-xl p-3 xl:p-6">
              <Heading
                className="text-[20px] xl:text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Upcoming Lessons"
              />
              <div className="space-y-4">
                {upcomingLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "calendar" && (
          <div className="space-y-4 flex flex-col xl:flex-row self-start gap-5">
            <div className="">
              <Schedule />
            </div>
            <div className="bg-bg-white border border-alt-border rounded-xl p-3 xl:p-6">
              <Heading
                className="text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Upcoming Lessons"
              />
              <div className="space-y-4 xl:w-2xl">
                {upcomingLessonss.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ScheduleManagement;
