import { CameraSvg, MessageButtonSvg } from "../../../components/SvgContainer/SVgContainer";

export interface Lesson {
  subject: string;
  instructor: string;
  time: string;
  status: string;
  statusColor: string;
  joinable: boolean;
}

export interface LessonCardProps {
  lesson: Lesson;
}

export const LessonCard = ({ lesson }: LessonCardProps) => (
  <div className="flex flex-col xl:flex-row justify-between gap-8 xl:items-center p-4 border border-gray-200 rounded-lg">
    <div className="flex flex-col xl:flex-row items-start xl:items-end justify-end space-x-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="student"
          className="h-15 w-15 rounded"
        />
        <div>
          <p className="font-semibold text-[14px] xl:text-[20px] text-black">
            {lesson.subject}
          </p>
          <p className="text-sm xl:text-[16px] font-normal text-alt-gray my-2">{`with ${lesson.instructor}`}</p>
          <p className="text-sm xl:text-[16px] font-normal text-alt-gray">
            {lesson.time}
          </p>
        </div>
      </div>
      <div className="">
        <span
          className={`text-[12px] xl:text-[16px] font-semibold px-4 py-1 rounded-full ${lesson.statusColor}`}
        >
          {lesson.status}
        </span>
      </div>
    </div>
    <div className="flex items-center justify-end space-x-4">
      <div className="flex items-center justify-end gap-4">
        <div className="bg-white cursor-pointer p-[6px] rounded-md border border-alt-border">
          <MessageButtonSvg />
        </div>
        {lesson.joinable && (
          <button className="bg-[#16A34A] text-[12px] xl:text-[16px] font-semibold border hover:border-alt-border hover:bg-white hover:text-primary-blue duration-700 text-white px-6 py-[6px] xl:py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
            <span>
              <CameraSvg />
            </span>
            Join
          </button>
        )}
      </div>
    </div>
  </div>
);
