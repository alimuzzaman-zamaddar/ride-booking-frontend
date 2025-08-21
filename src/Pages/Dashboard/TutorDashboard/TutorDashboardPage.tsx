import clsx from "clsx";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import Button from "../../../components/Tags/Button/Button";
import QuickMessages from "../../../components/CommonComponents/QuickMessages";
import {
  BookSvg,
  CalendarSvg,
  CameraSvg,
  EarningsSvg,
  QuickMessageSvg,
  StudentSvg,
} from "../../../components/SvgContainer/SVgContainer";
import { Link } from "react-router-dom";

const cardStyles = {
  "Active Students": "bg-[#4D6BFF]",
  "Lessons This Month": "bg-[#5195D8]",
  "Monthly Earnings": "bg-[#662D91]",
  "Average Rating": "bg-[#00B5DB]",
};

const TutorDashboardPage = () => {
  const cards = [
    { title: "Active Students", value: 8 },
    { title: "Lessons This Month", value: 24 },
    { title: "Monthly Earnings", value: "$1,240" },
    { title: "Average Rating", value: 4.9 },
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

  return (
    <div className=" flex flex-col justify-between min-h-[calc(100vh-64px)]">
      <div>
        <div className="p-1 xl:p-6">
          <Heading
            className="text-[24px] md:text-[32px] leading-[150%]  font-bold text-primary-blue"
            Variant="h2"
            Txt="Welcome back, John! 👋"
          />
          <Paragraph
            className="text-[16px] font-normal text-alt-gray mb-6"
            Txt="Manage your students and track your teaching progress"
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6">
            {cards.map(card => (
              <div
                key={card.title}
                className={clsx(
                  "rounded-lg  text-white flex items-center justify-center p-4 xl:p-8",
                  cardStyles[card.title as keyof typeof cardStyles]
                )}
              >
                <div className="flex items-center gap-6">
                  <BookSvg />
                  <div className="flex flex-col gap-4 ">
                    <span className="text-[12px] md:text-[16px] font-normal leading-[150%]">
                      {card.title}
                    </span>
                    <span className="text-[24px] md:text-[32px] leading-[150%] font-bold">
                      {card.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl p-3 xl:p-6 border border-[var(--color-alt-border)]">
              <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                <Heading
                  Txt="Today's Schedule"
                  className="text-[16px] font-semibold leading-[150%]"
                  Variant="h3"
                />
                <CalendarSvg />
              </div>
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 md:flex-row  md:items-center justify-between p-3 rounded-md mb-2 border border-[var(--color-alt-border)] bg-gray-50"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-12 h-12 rounded-full"
                      alt="student"
                    />
                    <div>
                      <p className="font-semibold text-[14px] leading-[150%] mb-2 text-primary-black">
                        Sarah Kim - English Conversation
                      </p>
                      <p className="text-xs font-normal text-alt-gray">
                        3:00 PM - 4:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Button
                      Txt="Message"
                      className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-sm md:rounded-[8px] px-3 py-1 md:px-6 md:py-2 text-[12px]  flex items-center md:text-[16px] font-normal text-primary-gray"
                    />
                    <Button
                      Txt={
                        <>
                          <CameraSvg />
                          Join
                        </>
                      }
                      className="bg-[#051345] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white rounded-sm md:rounded-[8px] px-3 py-1 md:px-6 md:py-2 text-[12px] cursor-pointer flex items-center gap-3 md:text-[16px] font-normal  "
                    />
                  </div>
                </div>
              ))}
              <Button
                Txt="View Full Schedule"
                className="mt-4 w-full border cursor-pointer hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border-[var(--color-alt-border)] rounded-lg py-2 text-roayl-blue text-[18px] font-semibold"
              />
            </div>

            <QuickMessages
              title="Quick Messages"
              buttonText="View all Messages"
              messages={messages}
            />
          </div>

          <div className="grid grid-cols-1 3xl:grid-cols-4 gap-6 mt-8">
            {/* Recent Students */}
            <div className="bg-white rounded-xl p-3 xl:p-6 border border-[var(--color-alt-border)] xl:col-span-2">
              <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                <Heading
                  Txt="Recent Students"
                  className="text-[16px] font-semibold leading-[150%]"
                  Variant="h3"
                />
                <StudentSvg />
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {[3, 4].map((lessons, i) => (
                  <div>
                    <div
                      key={i}
                      className=" border border-[var(--color-alt-border)] rounded-xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-5 ">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          className="w-12 h-12 rounded-full"
                          alt="avatar"
                        />
                        <div>
                          <p className="font-semibold text-[14px] leading-[150%] mb-2 text-primary-black">
                            Sarah Kim - English Conversation
                          </p>
                          <p className="text-xs font-normal text-alt-gray">
                            2025-06-16 ,3:00 PM - 4:00 PM
                          </p>
                        </div>
                      </div>
                      <div className="text-sm mt-1 flex justify-between items-center">
                        <span className="bg-bg-light-gray text-xs font-semibold text-gray-700 px-2 py-1 rounded-[24px]">
                          {lessons} Lessons
                        </span>
                        <span className="ml-4 text-xs font-semibold text-alt-gray">
                          Last: 2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="recent-students">
                <Button
                  Txt="View All Students"
                  className="mt-4 w-full border cursor-pointer hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border-[var(--color-alt-border)] rounded-lg py-2 text-roayl-blue text-[18px] font-semibold"
                />
              </Link>
            </div>

            <div className="space-y-6 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:col-span-2">
              <div className="bg-white rounded-xl p-3 xl:p-6 border border-[var(--color-alt-border)]">
                <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                  <Heading
                    Txt="Earnings"
                    className="text-[16px] font-semibold leading-[150%]"
                    Variant="h3"
                  />
                  <EarningsSvg />
                </div>
                <p className="text-secondary-blue text-[16px]  font-semibold">
                  This Week
                </p>
                <ul className="text-sm text-primary-black mt-2 space-y-1">
                  <li className="flex text-secondary-black  text-[14px] justify-between items-center">
                    Lessons Completed: <strong>12</strong>
                  </li>
                  <li className="flex text-secondary-black text-[14px] justify-between items-center">
                    Hours Taught: <strong>18</strong>
                  </li>
                  <li className="flex text-secondary-black  text-[14px] justify-between items-center">
                    Earnings: <strong>$360</strong>
                  </li>
                </ul>
                <Button
                  Txt="View Details"
                  className="mt-4 w-full border cursor-pointer hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border-[var(--color-alt-border)] rounded-lg py-2 text-roayl-blue text-[18px] font-semibold"
                />
              </div>
              <div className="bg-white rounded-xl p-3 xl:p-6 border border-alt-border">
                <div className="flex justify-between items-center mb-4 bg-primary-blue text-secondary-white  p-4 rounded-lg">
                  <Heading
                    Txt="Quick Actions"
                    className="text-[16px] font-semibold leading-[150%]"
                    Variant="h3"
                  />
                  <QuickMessageSvg />
                </div>

                <div className="space-y-2">
                  <button className="mt-4 w-full hover:bg-secondary-blue hover:text-white duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded-lg py-2 font-normal text-[16px]  flex justify-start text-secondary-blue items-center pl-4 gap-4">
                    <span>
                      <CalendarSvg />
                    </span>
                    Set Availability
                  </button>
                  <button className="mt-4 w-full hover:bg-secondary-blue hover:text-white text-secondary-blue duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded-lg py-2  text-[16px] font-normal flex justify-start items-center gap-4 pl-4 ">
                    <span>
                      <CalendarSvg />
                    </span>
                    Manage Student
                  </button>
                  <button className="mt-4 w-full hover:bg-secondary-blue hover:text-white text-secondary-blue duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded-lg py-2 font-normal  text-[16px] flex justify-start items-center gap-4 pl-4 ">
                    <span>
                      <CalendarSvg />
                    </span>
                    View Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboardPage;
