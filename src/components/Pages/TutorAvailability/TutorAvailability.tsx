import { useState } from "react";
import { CalendarSvg } from "../../SvgContainer/SVgContainer";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Button from "../../Tags/Button/Button";

const timeSlots: string[] = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Define type for availability object
type Availability = {
  [key: string]: string[];
};

const TutorAvailability = () => {
  const [selectedDay, setSelectedDay] = useState<string>("Sunday");
  const [availability, setAvailability] = useState<Availability>(() =>
    days.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );

  const toggleTimeSlot = (time: string) => {
    setAvailability(prev => {
      const currentSlots = prev[selectedDay];
      const updated = currentSlots.includes(time)
        ? currentSlots.filter(t => t !== time)
        : [...currentSlots, time].sort();
      return { ...prev, [selectedDay]: updated };
    });
  };

  const clearDay = () => {
    setAvailability(prev => ({ ...prev, [selectedDay]: [] }));
  };

  const copyToAllDays = () => {
    const currentSlots = availability[selectedDay];
    const newAvailability = days.reduce<Availability>(
      (acc, day) => ({
        ...acc,
        [day]: [...currentSlots],
      }),
      {}
    );
    setAvailability(newAvailability);
  };

  const getHours = (slots: string[]): number => slots.length;

  return (
    <section className="h-auto w-auto container flex flex-col gap-y-8">
      <div className="h-auto w-auto p-8 rounded-[12px] bg-primary-blue flex flex-col gap-y-3">
        <Heading
          Txt={`Availability`}
          Variant="h4"
          className="text-white font-[600] text-[32px]"
        />
        <Paragraph
          className="text-sm font-normal text-secondary-white leading-[124%]"
          Txt={`Set your teaching hours and manage your schedule preferences`}
        />
      </div>

      <div className="flex flex-row gap-x-8">
        <div className="h-auto w-auto rounded-[12px] flex flex-row gap-x-8">
          <div className="w-full  bg-white rounded-[12px] border p-8 ease-in-out duration-300 border-solid border-secondary-white flex flex-col gap-y-8  shadow-sm">
            <div className="flex flex-row gap-x-[6.5px] items-center ">
              <CalendarSvg />
              <Heading
                Txt={"Weekly Availability"}
                className="text-black text-2xl font-[600] "
              />
            </div>
            <div className="flex flex-row gap-2 flex-wrap">
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded border-[1px] cursor-pointer transition-colors duration-200 ${
                    selectedDay === day
                      ? "bg-primary-blue text-white border-primary-blue"
                      : "bg-white text-black border-secondary-white"
                  }`}
                >
                  {day}
                  {availability[day].length > 0 && (
                    <span className="ml-2 text-xs text-blue-500 font-bold">
                      {availability[day].length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                className="reverse-primary-btn !text-sm "
                onClick={clearDay}
                Txt={<>Clear Day</>}
              />

              <Button
                className="reverse-primary-btn !text-sm "
                onClick={copyToAllDays}
                Txt={<>Copy To All Days</>}
              />
            </div>

            <div className="grid grid-cols-7 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => toggleTimeSlot(time)}
                  className={`px-4 py-2 rounded border-[1px] cursor-pointer transition-colors duration-200 ${
                    availability[selectedDay].includes(time)
                      ? "bg-primary-blue text-white border-primary-blue"
                      : "bg-white text-black border-secondary-white"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="w-auto min-w-[360px]  p-8 bg-white border-[1px] border-solid border-secondary-white h-auto flex flex-col gap-y-8 rounded-xl shadow-sm">
            <div className="flex flex-row gap-x-[6.5px] items-center ">
              <CalendarSvg />
              <Heading
                Txt={"Schedule Overview"}
                className="text-black text-2xl font-[600] "
              />
            </div>
            <div>
              {days.map(day => {
                const hours = getHours(availability[day]);
                return (
                  <div key={day} className="mb-3">
                    <div className="flex justify-between ">
                      <span>{day.slice(0, 3)}</span>
                      <span>{hours}h</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-blue-500 rounded"
                        style={{
                          width: `${(hours / timeSlots.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorAvailability;
