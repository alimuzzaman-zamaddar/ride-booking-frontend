import { useEffect, useRef, useState } from "react";
import { FaBookOpen, FaEye, FaStar } from "react-icons/fa";
import {
  CalenderAndClock,
  MessageButtonSvg,
  MyLocationSvg,
  MyThreeDots,
} from "../../../components/SvgContainer/SVgContainer";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RefundModal } from "./RefundModal";
import { ReportModal } from "./ReportModal";
import { Link } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";

const statCards = [
  { title: "Total Lessons", value: 24, bg: "bg-[#4D6BFF]" },
  { title: "Hours Learned", value: 36, bg: "bg-[#5195D8]" },
  { title: "Active Tutors", value: "03", bg: "bg-[#662D91]" },
];

export const MyLessons = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [modal, setModal] = useState<"refund" | "report" | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const upcomingLessons = [1, 2, 3];
  const pastLessons = [1, 2];

  const openRefundModal = () => setModal("refund");
  const openReportModal = () => setModal("report");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = dropdownRefs.current.every(
        (ref) => !ref || !ref.contains(event.target as Node)
      );
      if (isOutside) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-[32px] font-semibold mb-1">My Lessons</h1>
      <p className="text-sm text-gray-500 mb-6">Manage your learning journey</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map(card => (
          <div
            key={card.title}
            className={`rounded-lg p-3 xl:p-8 text-white ${card.bg}`}
          >
            <div className="flex justify-center items-center gap-6">
              <FaBookOpen className="text-white w-6 h-6 mb-2" />
              <div className="flex flex-col gap-4">
                <p className="text-sm">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 mb-4 border-b border-[var(--color-alt-border)]">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`pb-2 font-medium ${
            activeTab === "upcoming"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Upcoming ({upcomingLessons.length})
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`pb-2 font-medium ${
            activeTab === "past"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Past Lessons ({pastLessons.length})
        </button>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeTab === "upcoming" &&
            upcomingLessons.map((_, i) => (
              <div
                key={i}
                className="bg-white border border-[var(--color-alt-border)] rounded-lg p-3 xl:p-8 mb-4 shadow-sm"
              >
                <div className="flex  justify-between lg:items-end mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/45.jpg"
                      className="w-12 h-12 rounded-full"
                      alt="avatar"
                    />
                    <div className="flex flex-col gap-1 lg:gap-3">
                      <h2 className="text-sm xl:text-lg font-medium">
                        English Conversation Practice
                      </h2>
                      <div className="text-[10px] lg:text-sm text-gray-600 flex items-center gap-1 lg:gap-3">
                        Sarah Johnson·
                        <FaStar className="text-yellow-500" />
                        4.9 · 1247 lessons
                      </div>
                      <div className="text-[10px] lg:text-sm text-gray-500 mt-1 flex flex-wrap   items-center gap-1">
                        <span>
                          <MyLocationSvg />
                        </span>
                        Today at 3:00 PM
                        <span>
                          <MyLocationSvg />
                        </span>
                        60 min ·
                        <span className="ml-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px] lg:text-xs">
                          Lesson 12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-lg">
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                      <p className="text-[14px] lg:text-[20px]">$25</p>
                      <div
                        className="relative"
                        ref={el => {
                          dropdownRefs.current[i] = el;
                        }}
                      >
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === i ? null : i)
                          }
                          className="cursor-pointer"
                        >
                          <MyThreeDots />
                        </button>
                        {openDropdown === i && (
                          <div className="absolute right-0 mt-2 w-40 bg-white border border-[var(--color-alt-border)] rounded-md shadow-md z-50">
                            <Link to="reschedule">
                              <button className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[var(--color-off-white)] text-sm rounded-md">
                                Reschedule
                              </button>
                            </Link>
                            <Link to="cancel">
                              <button className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[var(--color-off-white)] text-sm rounded-md">
                                Cancel
                              </button>
                            </Link>
                            <button
                              onClick={openRefundModal}
                              className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[var(--color-off-white)] text-sm rounded-md"
                            >
                              Request Refund
                            </button>
                            <button
                              onClick={openReportModal}
                              className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[var(--color-off-white)] text-sm rounded-md"
                            >
                              Report User
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {activeTab === "upcoming" && i === 0 ? (
                  <div className="rounded-[12px] border border-[rgba(37,99,235,0.4)] bg-[#EFF6FF] p-3 lg:p-6 flex flex-col lg:flex-row gap-3 justify-between items-center">
                    <div className="text-sm text-gray-700">
                      Your lesson is ready to start! <br />
                      <span className="text-gray-500 text-xs">
                        Join now or wait for your tutor
                      </span>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px]  text-xs lg:text-base px-4 lg:px-6 py-1 lg:py-2  flex items-center">
                        <MessageButtonSvg /> Message
                      </button>
                      <button className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white text-xs lg:text-base px-4 lg:px-6 py-1 lg:py-2  cursor-pointer rounded-[8px] flex items-center gap-3">
                        <HiOutlineVideoCamera /> Join
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end gap-3">
                    <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] text-xs lg:text-base px-4 lg:px-6 py-1 lg:py-2  flex items-center">
                      <MessageButtonSvg /> Message
                    </button>
                    <button className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white text-xs lg:text-base px-4 lg:px-6 py-1 lg:py-2  cursor-pointer rounded-[8px] flex items-center gap-3">
                      <HiOutlineVideoCamera /> Join
                    </button>
                  </div>
                )}
              </div>
            ))}

          {activeTab === "past" &&
            pastLessons.map((_, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-3 lg:p-6 shadow-sm mb-4"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/46.jpg"
                      alt="Tutor"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-sm xl:text-lg font-semibold mb-1">
                        English Conversation Practice
                      </h3>
                      <div className="text-[10px] lg:text-sm text-gray-600 flex items-center gap-2">
                        Sarah Johnson · <FaStar className="text-yellow-400" />
                        4.9 · 1247 lessons
                      </div>
                      <div className="text-[10px] lg:text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-1">
                        <span>
                          <MyLocationSvg />
                        </span>
                        Today at 3:00 PM
                        <span>
                          <MyLocationSvg />
                        </span>
                        60 min ·
                        <span className="ml-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px]  lg:text-xs">
                          Lesson 12
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-[var(--color-text-blue)]">
                    $25
                  </p>
                </div>

                {/* Feedback Box */}
                <div className="border border-blue-200 bg-blue-50 text-sm text-gray-700 p-4 rounded-md mb-4">
                  <p className="text-sm lg:text-base font-medium mb-1">
                    Tutor feedback:
                  </p>
                  <p className="text-xs lg:text-sm">
                    Excellent progress on past perfect usage. Continue
                    practicing with the irregular verbs and time expressions.
                    Your understanding of the concept has improved
                    significantly.
                  </p>
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-wrap lg:flex-row lg:justify-end  gap-3">
                  <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center lg:mr-auto">
                    <FaEye /> Recording
                  </button>
                    <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center">
                      <LuMessageCircle /> Message
                    </button>
                    <Link to="feedback">
                      <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center">
                        <FaEye /> Rate Lesson
                      </button>
                    </Link>
                    <button className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
                      <CalenderAndClock /> Book Again
                    </button>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-white border border-[var(--color-alt-border)] rounded-lg p-3 xl:p-8 shadow-sm self-start">
          <div className="flex justify-between text-sm mb-1">
            <h3 className="font-semibold mb-3">Total lessons bought:</h3>
            <p>10</p>
          </div>
          <div className="flex justify-between text-sm mb-[23px]">
            <span>Completed:</span>
            <span>4</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Remaining:</span>
            <span>6</span>
          </div>
          <div className="mt-3">
            <div className="text-sm mb-1">Progress</div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 w-[40%] rounded"></div>
            </div>
            <div className="text-right text-xs mt-1 text-gray-500">4/10</div>
          </div>
          <div className="mt-4 text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded">
            Expires: March 15, 2024
          </div>
        </div>
      </div>

      {modal === "refund" && <RefundModal onClose={() => setModal(null)} />}
      {modal === "report" && <ReportModal onClose={() => setModal(null)} />}
    </div>
  );
};
