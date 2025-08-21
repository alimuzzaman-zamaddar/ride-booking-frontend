import { FaAngleLeft } from "react-icons/fa";
import { MessageButtonSvg } from "../../../components/SvgContainer/SVgContainer";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";

const studentData = [
  {
    id: 1,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 1,
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)] text-secondary-blue",
    last: "2 days ago",
  },
  {
    id: 2,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 1,
    status: "Trail",
    statusColor: "text-[#833030] bg-[rgba(218,36,44,0.1)]",
    last: "2 days ago",
  },
  {
    id: 3,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 2,
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    last: "2 days ago",
  },
  {
    id: 4,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 4,
    status: "Trail",
    statusColor: "text-[#833030] bg-[rgba(218,36,44,0.1)]",
    last: "2 days ago",
  },
  {
    id: 5,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 4,
    status: "Regular",
    statusColor: "bg-[rgba(0,83,207,0.1)]  text-secondary-blue",
    last: "2 days ago",
  },
];

const RecentStudents = () => {
  return (
    <div className="">
      <div className="">
        <button
          onClick={() => window.history.back()}
          className=" border border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[14px] font-semibold duration-700 hover:text-text-white px-6 py-[14px] cursor-pointer text-secondary-black rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <section className=" max-w-3xl mx-auto  ">
        <div className="bg-primary-blue p-8 rounded-xl mb-8">
          <Heading
            Variant="h2"
            Txt="Recent Students"
            className="text-[32px] text-text-white font-semibold mb-1"
          />
          <Paragraph
            className="text-secondary-white font-normal text-[16px]  leading-[150%] "
            Txt="Manage your teaching schedule and availability"
          />
        </div>
        <div className="border border-alt-border bg-white p-6 rounded-lg ">
          <div className="mb-5">
            <div className="p-4 flex justify-between items-center">
              <Heading
                Variant="h3"
                Txt="My Students"
                className="text-[24px] text-secondary-black font-bold"
              />
              <select className=" p-[10px] rounded-md border text-[16px] font-semibold text-secondary-black border-alt-border">
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-4">
            {studentData.map((student, i) => (
              <div>
                <div className=" rounded-xl">
                  <div
                    key={i}
                    className=" border border-[var(--color-alt-border)] rounded-xl p-5"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-[60%]">
                        <div className="flex items-center gap-3 mb-5 ">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            className="w-10 h-10 rounded-full"
                            alt="avatar"
                          />
                          <div>
                            <p className="font-semibold text-secondary-black  text-[14px] mb-1">
                              {student.name}
                            </p>
                            <p className="text-xs font-normal text-alt-gray">
                              {student.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs font-semibold mt-1 flex justify-between items-center">
                          <span className="bg-bg-light-gray text-xs text-secondary-black px-2 py-1 rounded-[24px]">
                            {student.lessons} Lessons
                          </span>
                          <span className="text-xs text-text-gray font-semibold">
                            Last: {student.last}
                          </span>
                          <span
                            className={`text-[16px] font-semibold px-4 py-1 rounded-[24px] ${student.statusColor}`}
                          >
                            {student.status}
                          </span>
                        </div>
                      </div>

                      <div className="w-[40%] flex justify-end items-center">
                        <div className="bg-white cursor-pointer p-[6px] rounded-md border border-alt-border ">
                          <MessageButtonSvg />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentStudents;
