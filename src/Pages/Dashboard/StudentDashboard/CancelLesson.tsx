import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../../components/Tags/Button/Button";

interface FormValues {
  reason: string;
  otherReason?: string;
  confirm: boolean;
}

export const CancelLesson = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);

  const selectedReason = watch("reason");

  const onSubmit = (data: FormValues) => {
    setSubmitting(true);
    console.log("Cancel Data:", data);
    // API call here
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <div className="flex p-6 gap-20">
      <div className="">
        <Button     onClick={() => window.history.back()} Txt="Back to Search" className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3" />
      </div> 
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Cancel Lesson</h1>
      <p className="text-gray-400 mb-6">We're sorry to see you cancel your lesson</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Lesson Details */}
        <div className="border border-[var(--color-alt-border)] rounded-xl p-6 bg-white">
          <h3 className="font-semibold text-[24px] mb-4">Lesson Details</h3>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-yellow-500 text-sm">⭐ 4.9</p>
            </div>
          </div>
          <p className="font-medium mb-1">English Conversation Practice</p>
          <p className="text-sm text-gray-600">Today at 3:00 PM · 60 min</p>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded inline-block my-3">
            Lesson 12
          </span>

          <div className="border border-red-400 text-red-600 bg-red-50 p-3 rounded-md text-sm mb-3">
            <strong className="block font-medium">No refund</strong>
            Cancellations within 4 hours are not eligible for refund
          </div>

          <div className="border border-yellow-300 text-yellow-800 bg-yellow-50 p-3 rounded-md text-sm">
            <strong className="block font-medium">Late Cancellation</strong>
            This lesson starts in 2 hours. Consider rescheduling instead of cancelling.
          </div>
        </div>

        {/* Cancellation Form */}
        <div className="border border-[var(--color-alt-border)] rounded-xl p-6 bg-white">
          <h3 className="font-semibold text-[24px] mb-4">Cancellation Details</h3>
          <p className="text-sm text-gray-600 mb-4">Help us understand why you're cancelling</p>

          <div className="space-y-3 mb-4">
                            <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  Reason for Cancellation
                </div>
            {[
              "Schedule conflict",
              "Personal emergency",
              "Feeling unwell",
              "Technical issues",
              "No longer need the lesson",
              "Other (please specify)",
            ].map((label) => (
              <label key={label} className="flex items-start gap-2">
                <input
                  type="radio"
                  value={label}
                  {...register("reason", { required: true })}
                  className="mt-1 sr-only peer cursor-pointer"
                />
                 <div className="w-4 h-4 rounded-full border border-[var(--button-bg-blue)] cursor-pointer peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                <span className="text-sm">{label}</span>
              </label>
            ))}
            {selectedReason === "Other (please specify)" && (
              <textarea
                {...register("otherReason")}
                cols={40} rows={8}
                className="w-full mt-2 p-2 lin border border-[var(--color-alt-border)] rounded-md text-sm"
                placeholder="Please provide more details"
              />
            )}
            {errors.reason && <p className="text-red-500 text-sm">Please select a reason</p>}
          </div>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("confirm", { required: true })}
              className="mt-1 cursor-pointer"
            />
            <span className="text-sm">
              I understand the cancellation policy and confirm I want to cancel this lesson
            </span>
          </label>
          {errors.confirm && (
            <p className="text-red-500 text-sm mt-1">You must confirm before proceeding</p>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-8 border border-[var(--color-alt-border)] p-6 rounded-xl bg-white ">
        <p className="text-md font-semibold mb-3">Ready to cancel?</p>
        <p className="text-sm text-gray-500 mb-5">
          This action cannot be undone. Consider rescheduling if you just need a different time.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="border border-[var(--color-alt-border)] cursor-pointer text-sm px-5 py-2 rounded-md text-gray-700 bg-white hover:bg-[var(--button-bg-blue)] hover:text-white duration-700"
          >
            Keep Lesson
          </button>
          <button
            type="button"
            className="border border-[var(--color-alt-border)] cursor-pointer text-sm px-5 py-2 rounded-md text-black bg-gray-100 hover:text-white duration-700 hover:bg-[var(--button-bg-blue)]"
          >
            Reschedule Instead
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="bg-red-600 text-white cursor-pointer text-sm px-5 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
          >
            X Cancel Lesson
          </button>
        </div>
      </div>
    </form>

    </div>
  );
};
