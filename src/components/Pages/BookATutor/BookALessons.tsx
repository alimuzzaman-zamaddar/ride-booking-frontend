import { useState } from "react";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import { PayPal, SvgCard } from "../../SvgContainer/SVgContainer";
import CustomCalendar from "../../CommonComponents/CustomCalendar";

const BookALessons = () => {
  // const [ActiveTime, setActiveTime] = useState<string | null>(null);
  const [activeMethod, setactiveMethod] = useState<string | null>(null);

  type paymentMethodSchema = {
    SVg: React.FC<React.SVGProps<SVGSVGElement>>;
    paymentMethod: string;
  };

  const paymentMethodArr: paymentMethodSchema[] = [
    {
      SVg: SvgCard,
      paymentMethod: "Credit/Debit Card",
    },
    {
      SVg: PayPal,
      paymentMethod: "PayPal",
    },
  ];

// interface TimeList {
//   times: string[];
// }

// const randomTimes: TimeList = {
//   times: [
//     "7:12 PM",
//     "3:45 AM",
//     "11:59 AM",
//     "9:27 PM",
//     "6:04 AM",
//     "2:33 PM",
//     "12:15 AM",
//     "5:48 PM",
//     "10:02 AM",
//     "4:19 AM",
//     "8:36 PM",
//     "12:00 PM",
//   ],
// };


  return (
    <section className=" 3xl:w-[806px] h-auto w-auto bg-white rounded-[12px] p-4 lg:p-8 flex flex-col gap-y-10 ">

      <CustomCalendar/>
      {/* <div className="flex flex-col gap-y-6  ">
        <Heading
          className="text-xl lg:text-2xl text-secondary-black font-[600] "
          Txt={`
        Book a Lesson
          `}
        />
        <div className="flex flex-col gap-y-4 ">
          <Heading
            className="text-sm lg:text-base text-secondary-black font-[600] "
            Txt={`
        Lesson Type
          `}
          />
          <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="h-auto w-[205px] p-3 rounded-[12px] border-[1px] border-solid flex flex-col gap-y-3 border-alt-border ">
              <Heading
                className="text-base text-secondary-black font-[600] "
                Txt={`
       Single Lesson
          `}
              />
              <Paragraph
                className="text-sm text-primary-gray font-[600] "
                Txt={`
      50 minutes • $25
          `}
              />
              <Paragraph
                className="text-sm text-primary-gray font-[600] "
                Txt={`
      Full lessons
          `}
              />
            </div>
            <div className="h-auto w-[205px] p-3 rounded-[12px] border-[1px] border-solid flex flex-col gap-y-3 border-alt-border ">
              <Heading
                className="text-base text-secondary-black font-[600] "
                Txt={`
       Regular Lesson
          `}
              />
              <Paragraph
                className="text-sm text-primary-gray font-[600] "
                Txt={`
      50 minutes • $25
          `}
              />
              <Paragraph
                className="text-sm text-primary-gray font-[600] "
                Txt={`
      Full lessons
          `}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-4 ">
        <Heading
          className="text-2xl text-secondary-black font-[600]  "
          Txt={`
        Book a Lesson
          `}
        />
        <input
          placeholder="Select Date"
          className="max-w-[408px] h-auto p-3 border-[1px] cursor-pointer border-solid rounded-[12px] border-alt-border "
          type="date"
        />
      </div>
      <div className=" flex flex-col gap-y-4 ">
        <Heading
          className="text-2xl text-secondary-black font-[600]  "
          Txt={`
        Available Time Slot
          `}
        />
        <div className="grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2   ">
          {randomTimeArr.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setActiveTime(item);
                }}
                className={`h-auto ease-in-out duration-300 px-3 py-3 font-normal leading-[130%] text-sm items-center justify-center  p-3 rounded-[12px] border-[1px] border-solid flex flex-col gap-y-3 cursor-pointer    ${
                  ActiveTime === item
                    ? "border-secondary-blue bg-[#0513451A] text-secondary-blue"
                    : " border-alt-border text-primary-gray "
                } `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div> */}
      <div className=" flex flex-col gap-y-4 ">
        <Heading
          className="text-2xl text-secondary-black font-[600]  "
          Txt={`
        Discount Code
          `}
        />
        <div className="flex flex-row w-full relative items-center gap-x-[26px]">
          <input
            disabled
            placeholder="Enter Discount Code"
            className="flex-1 h-auto p-3 text-sm outline-none font-normal text-primary-gray border-[1px] cursor-pointer border-solid rounded-[12px] border-alt-border"
            type="text"
          />
          <Button className="primary-btn !py-3 !text-sm " Txt={`Apply`} />
        </div>
      </div>
      <div className=" flex flex-col gap-y-4 ">
        <Heading
          className="text-2xl text-secondary-black font-[600]  "
          Txt={`
        Discount Code
          `}
        />
        {paymentMethodArr.map((item, idx) => {
          const isActive = activeMethod === item.paymentMethod;

          return (
            <div
              key={idx}
              onClick={() => setactiveMethod(item.paymentMethod)}
              className={`h-auto ease-in-out duration-300 px-3 py-3 font-normal leading-[130%] text-sm  p-3 rounded-[12px] border-[1px] border-solid flex flex-row gap-x-3 cursor-pointer ${
                isActive
                  ? "border-secondary-blue bg-[#0513451A] text-secondary-blue"
                  : "border-alt-border text-primary-gray"
              }`}
            >
              <label className="relative w-5 h-5">
                <input
                  type="checkbox"
                  checked={isActive}
                  readOnly
                  className="opacity-0 w-5 h-5 absolute cursor-pointer"
                />
                <span
                  className={`block w-5 h-5 rounded-full border-[2px] transition-colors ${
                    isActive
                      ? "bg-secondary-blue border-secondary-blue"
                      : "border-alt-border"
                  }`}
                />
              </label>

              <item.SVg className="w-6 h-6" />

              <span className="text-sm font-[600]">{item.paymentMethod}</span>
            </div>
          );
        })}
      </div>
      <Button className="primary-btn py-2 lg:py-3 text-base lg:text-lg !w-full mb-5 " Txt={`Continue To Payment`} />
    </section>
  );
};

export default BookALessons;
