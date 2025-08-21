import { useForm, Controller, useWatch } from "react-hook-form";
import {
  FaRegHandshake,
  FaStar,
} from "react-icons/fa";
import { MyLocationSvg } from "../../../components/SvgContainer/SVgContainer";
import { useEffect } from "react";
import { LiaHandPointLeftSolid } from "react-icons/lia";
import { HiOutlineBookOpen } from "react-icons/hi";
import { GoClock } from "react-icons/go";
import { TbCalendarClock } from "react-icons/tb";

const options = [
  { label: "Great Teaching", icon: HiOutlineBookOpen },
  { label: "Very Patient", icon: LiaHandPointLeftSolid  },
  { label: "Always On Time", icon: GoClock },
  { label: "Very Helpful", icon: TbCalendarClock },
  { label: "Engaging Lessons", icon: FaRegHandshake  },
];

interface FeedbackFormData {
  rating: number;
  likes: string[];
  additionalFeedback: string;
}

const FeedbackForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FeedbackFormData>({
    defaultValues: {
      rating: 0,
      likes: [],
      additionalFeedback: "",
    },
  });

  const rating = useWatch({
    control,
    name: "rating",
    defaultValue: 0,
  });

  const onSubmit = (data: FeedbackFormData) => {
    console.log(" Form Submitted:", data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="ml-6 mt-6 mb-4">
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border  hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          Back to Search
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 w-full max-w-3xl mx-auto"
      >
        <h1 className="text-2xl lg:text-[32px] font-semibold text-center mb-4">
          How was your lesson?
        </h1>
        <p className="text-xs lg:text-sm text-center mb-6 text-gray-600">
          Your feedback helps us improve the learning experience
        </p>

        {/* Lesson Info */}
        <div className="flex items-start mb-4 p-8 bg-white rounded-lg shadow-md border border-[var(--color-alt-border)]">
          <div className="flex gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="Tutor"
              className="w-8 md:w-14 h-8 md:h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-1">
                English Conversation Practice
              </h3>
              <div className="text-xs lg:text-sm text-gray-600 flex flex-col md:flex-row md:items-center gap-2">
                Sarah Johnson · <FaStar className="text-yellow-400" /> 4.9 ·
                1247 lessons
              </div>
              <div className="text-xs lg:text-sm text-gray-500 mt-1 flex flex-col md:flex-row  md:items-center gap-1">
                <MyLocationSvg /> Today at 3:00 PM <MyLocationSvg /> 60 min ·
                <span className="ml-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                  Lesson 12
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6 p-4 lg:p-8 bg-white rounded-lg shadow-md border border-[var(--color-alt-border)]">
        <label className="block text-xl lg:text-[24px] font-semibold not-italic leading-none mb-6">
          Rate your lesson
        </label>
        <div className="flex flex-col justify-center items-center gap-3 mb-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="cursor-pointer">
                <input
                  type="radio"
                  className="hidden"
                  value={star}
                  {...register("rating", { required: "Rating is required" })}
                />
                <FaStar
                  className={`w-6 h-6 ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              </label>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {rating === 5
              ? "Excellent - Outstanding lesson!"
              : rating === 4
              ? "Good lesson!"
              : "Needs improvement"}
          </div>
        {errors.rating && (
          <p className="text-xs text-red-500 mt-1">{errors.rating.message}</p>
        )}
        </div>
      </div>

        {/* Likes */}
        <div className="p-8 bg-white rounded-lg shadow-md border border-[var(--color-alt-border)] mb-6">
        <div className="mb-6">
          <label className="block text-xl lg:text-[24px] font-semibold not-italic leading-none mb-5">
            What did you like most?
          </label>
          <div className="flex flex-wrap gap-3">
            {options.map(({ label, icon: IconComponent }) => (
              <Controller
                key={label}
                name="likes"
                control={control}
                render={({ field }) => {
                  const isChecked = field.value?.includes(label);
                  const handleChange = () => {
                    const newValue = isChecked
                      ? field.value.filter((v: string) => v !== label)
                      : [...(field.value || []), label];
                    field.onChange(newValue);
                  };

                  return (
                    <button
                      type="button"
                      onClick={handleChange}
                      className={`justify-center items-center bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-300 text-[#051345] px-6 py-1 cursor-pointer rounded-[8px] flex gap-5 ${
                        isChecked
                          ? "bg-[#051345] text-white border-[#051345]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#051345]"
                      }`}
                    >
                      <IconComponent className="text-lg" />
                      {label}
                    </button>
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>

        {/* Additional Feedback */}
        <div className="p-4 lg:p-8 bg-white rounded-lg shadow-md border border-[var(--color-alt-border)] mb-6">
        <div className="mb-6">
          <label className="block text-lg md:text-xl lg:text-[24px] font-semibold not-italic leading-none mb-4">
            Additional feedback (optional)
          </label>
          <Controller
            name="additionalFeedback"
            control={control}
            render={({ field }) => (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Share more details about your lesson experience"
                {...field}
              />
            )}
          />
        </div>
      </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-5">
        <button
        onClick={() => window.history.back()}
          type="button"
          className="flex-1 justify-center items-center border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex"
        >
          Skip For Now
        </button>
        <button
          type="submit"
          className="flex-1 justify-center items-center bg-primary-blue border hover:border-alt-border hover:bg-white hover:text-light-blue duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex gap-3"
        >
          Submit Feedback
        </button>
      </div>

        <div className=" bg-[#EFF6FF] p-4 rounded-xl my-5 border border-[var(bg-light-blue)]">
        <p className="text-sm  text-light-blue ">
          Note: Your tutor will also provide feedback about the lesson. Both
          reviews help improve the learning experience for everyone.
        </p>
      </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
