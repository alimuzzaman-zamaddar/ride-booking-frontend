import { useForm } from "react-hook-form";
import { MyLocationSvg } from "../../../components/SvgContainer/SVgContainer";

type FormData = {
  date: string;
  time: string;
  reason?: string;
};

export const RescheduleLesson = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Reschedule Data", data);
    // Add API or submission logic here
  };

  const selectedTime = watch("time");

  const timeSlots = [
    "9.00 AM",
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
  ];

  return (
    <div className="flex gap-20 p-6 ">
      {/* Back Button */}
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          Back to Search
        </button>
      </div>
      <div className="">
        <div className="mt-[100px]">
          <h1 className="text-[32px] font-bold mb-2">Reschedule Lesson</h1>
          <p className="text-gray-400 mb-6">
            Choose a new date and time for your lesson
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6">
          {/* Left - 30% */}
          <div className="w-[30%] bg-white rounded-lg shadow-md p-8 self-start">
            <h2 className="font-semibold text-2xl mb-4">Current Lesson</h2>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-yellow-500 text-sm">⭐ 4.9</p>
              </div>
            </div>
            <p className="text-gray-700">English Conversation Practice</p>
            <div className="text-sm text-gray-500 mt-1 flex items-center gap-1 my-5">
              <span>
                <MyLocationSvg />
              </span>{" "}
              Today at 3:00 PM{" "}
              <span>
                <MyLocationSvg />
              </span>{" "}
              60 min ·
            </div>
            <div className="mt-3 text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-md p-3">
              <strong>Reschedule Policy:</strong>
              <br />
              Free reschedule up to 4 hours before lesson
            </div>
          </div>

          {/* Right - 70% */}
          <div className="w-[70%] flex flex-col gap-6">
            {/* Select Date & Time */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-semibold text-2xl mb-4">
                Select New Date & Time
              </h2>

              <label className="block text-sm font-medium mb-4">
                Select Date
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                className="w-full mb-4 px-4 py-2 border cursor-pointer border-[var(--color-alt-border)] rounded-md"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">Date is required.</p>
              )}

              <label className="block text-sm font-medium mb-4">
                Available Time Slot
              </label>
              <div className="flex flex-wrap gap-5 mb-4 w-1/2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setValue("time", slot)}
                    className={`px-3 py-3 rounded-md hover:border-[#0053CF] cursor-pointer hover:bg-[rgba(5,19,69,0.1)] transition-colors duration-300 ${
                      selectedTime === slot
                        ? "bg-[rgba(5,19,69,0.1)] border border-[#0053CF] text-[#0053CF]"
                        : "bg-white border border-[var(--color-alt-border)]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-red-500 text-sm">Please select a time.</p>
              )}

              <label className="block text-sm font-medium mb-4">
                Reason for Rescheduling (Optional)
              </label>
              <textarea
                rows={3}
                {...register("reason")}
                placeholder="Let your tutor know why you need to reschedule..."
                className="w-full px-4 border border-[var(--color-alt-border)] py-2 rounded-md"
              ></textarea>
            </div>

            {/* New Lesson Schedule */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-semibold mb-3">New Lesson Schedule</h2>
              <div className="text-sm text-gray-500 mt-1 flex items-center gap-1 mb-5">
                <span>
                  <MyLocationSvg />
                </span>
                Today at 3:00 PM
                <span>
                  <MyLocationSvg />
                </span>
                60 min
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your tutor will be notified about the reschedule request
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-4 py-2 border cursor-pointer border-[var(--color-alt-border)] hover:bg-[var(--button-bg-blue)] hover:text-white  duration-700 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
                >
                  Confirm Reschedule
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
