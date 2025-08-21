import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import { FaBookOpen, FaClock, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
import Button from "../../../components/Tags/Button/Button";
import Heading from "../../../components/Tags/Heading/Heading";
import {
  LessonSvg,
  MessageButtonSvg,
  PreviousLessonSvg,
  ReviewLessonButtonSvg,
} from "../../../components/SvgContainer/SVgContainer";
import QuickMessages from "../../../components/CommonComponents/QuickMessages";
import { useGetUserDataQuery } from "../../../redux/Slices/authSlice";

const statCards = [
  { title: "Total Lessons", value: 24, bg: "bg-[#4D6BFF]" },
  { title: "Hours Learned", value: 36, bg: "bg-[#5195D8]" },
  { title: "Active Tutors", value: "03", bg: "bg-[#662D91]" },
];

const messages = [
  {
    name: "Darrell Steward",
    time: "5 min ago",
    message: "Great progress in today’s lesson! Keep practicing...",
    avatarUrl: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Arlene McCoy",
    time: "10 min ago",
    message: "Nice job, you’re doing well!",
    avatarUrl: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Robert Fox",
    time: "15 min ago",
    message: "Keep up the hard work!",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const StudentDashboardPage = () => {

    const { data: user } = useGetUserDataQuery(undefined);


  return (
    <section className="flex flex-col h-auto justify-between">
      <div className="space-y-6 p-2  xl:p-6">
        <Heading
          Txt={`Welcome back, ${user?.data?.name} 👋`}
          className="text-2xl font-bold text-[var(--color-primary-blue)] mt-15 xl:mt-0"
          Variant="h2"
        />
        <Paragraph
          Txt="Ready for your next learning session?"
          className="text-sm text-[var(--color-text-gray)]"
        />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {statCards.map(card => (
            <div
              key={card.title}
              className={`rounded-lg p-8 text-white ${card.bg}`}
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

        {/* Lessons + Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Lessons */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-4 xl:p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)] p-4 rounded-lg">
              <Heading
                Txt="Upcoming Lessons"
                className="text-[16px] font-semibold leading-[150%]"
                Variant="h3"
              />
              <LessonSvg />
            </div>
            {["Ronald Richards", "Ronald Richards"].map((name, i) => (
              <div
                key={i}
                className={`flex flex-col xl:flex-row justify-between items-center gap-4 p-4 rounded-lg mb-3 ${
                  i === 0
                    ? "bg-[rgba(5,19,69,0.10)]"
                    : "bg-[#F9FAFB] border border-[var(--color-alt-border)]"
                }`}
              >
                <div className="">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        i === 0 ? "men/32" : "women/44"
                      }.jpg`}
                      className="w-12 h-12 rounded-full"
                      alt="avatar"
                    />
                    <div>
                      <div className="flex flex-col gap-2 font-medium">
                        {name}
                        <div className="flex items-center gap-1">
                          <BsStarFill className="text-yellow-500 w-4 h-4" />
                          4.9
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-[var(--color-text-gray)] mb-2">
                      English Conversation
                    </p>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>
                        <FaCalendarAlt className="inline mr-1" /> Friday, 2:00
                        PM
                      </span>
                      <span>
                        <FaClock className="inline mr-1" /> 50 min
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-1 xl:py-2 text-xs xl:text-sm flex items-center">
                    <MessageButtonSvg /> Message
                  </button>
                  <button className="bg-[#051345] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 text-xs xl:text-sm py-1 xl:py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
                    <HiOutlineVideoCamera /> Join
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Messages */}
          <QuickMessages
            title="Quick Messages"
            buttonText="View all Messages"
            messages={messages}
          />
        </div>

        {/* Previous Lessons + Lesson Package */}
        <div className="mt-6">
          {/* Previous Lessons */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-white p-4 rounded-lg">
              <h3 className="text-[16px] font-semibold leading-[150%]">
                Previous Lesson
              </h3>
              <PreviousLessonSvg />
            </div>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="flex flex-col xl:flex-row gap-4 justify-between xl:items-center py-3"
              >
                {/* User Info Section */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    className="w-12 h-12 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <div className="font-medium mb-2">Cameron Williamson</div>
                    <div className="text-sm text-[var(--color-text-gray)]">
                      English Conversation <br />
                      Yesterday, 2:00 PM · 50 min
                    </div>
                  </div>
                </div>

                {/* Action Buttons Section */}
                <div className="flex gap-2">
                  {/* Conditional Render for Rate or Star Rating */}
                  {i === 1 ? (
                    <Button
                      Txt="Rate"
                      className="border border-[var(--color-alt-border)] cursor-pointer px-3 py-1 rounded text-sm font-medium"
                    />
                  ) : (
                    <div className="flex items-center gap-1">
                      <BsStarFill className="text-yellow-500 w-4 h-4" />
                      4.9
                    </div>
                  )}

                  {/* Review Lesson Button */}
                  <button className="border border-[var(--color-alt-border)] cursor-pointer px-3 py-1 rounded text-sm font-medium flex items-center">
                    <span className="mr-2">
                      <ReviewLessonButtonSvg />
                    </span>
                    Review Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Lesson Package */}
          {/* <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-white p-4 rounded-lg">
              <h3 className="text-[16px] font-semibold leading-[150%]">
                Lesson Package
              </h3>
              <PreviousLessonSvg />
            </div>
            <div className="flex justify-between mb-[23px]">
              <p className="text-sm text-[var(--color-text-gray)]">
                <strong> Total lessons bought: </strong>
              </p>
              <p> 10 </p>
            </div>
            <div className="flex justify-between mb-[23px]">
              <p className="text-sm text-[var(--color-text-gray)]">
                Completed:
              </p>
              <p>4</p>
            </div>
            <div className="flex justify-between mb-[23px]">
              <p className="text-sm text-[var(--color-text-gray)]">
                {" "}
                Remaining:
              </p>
              <p>4</p>
            </div>
            <div className="flex justify-between mb-[14px]">
              <p className="text-sm text-[var(--color-text-gray)]">Progress</p>
              <p>4/10</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded mt-[32px]">
              <div className="bg-[#0053CF] h-2 rounded w-[40%]"></div>
            </div>
            <div className="mt-3 bg-yellow-100 text-yellow-800 p-2 rounded text-sm">
              Expires: March 15, 2024
            </div>
          </div> */}
        </div>

        {/* Feedback Section — Aligned and Sized Correctly */}
        <div className="rounded-lg border border-[var(--color-alt-border)] p-8 flex flex-col md:flex-row items-end md:items-center justify-between w-full">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-lg font-semibold text-secondary-black">
              Have feedback for us?
            </h4>
            <p className="text-sm font-medium text-text-gray">
              Your feedback is anonymous unless you choose to include your name.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 border border-primary-blue text-primary-blue rounded hover:bg-primary-blue hover:text-white transition-all text-sm font-medium cursor-pointer duration-500">
            Confidential Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardPage;
