/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StudentOnboardingLayout } from "./StudentOnboardingLayout";
import { useNavigate } from "react-router-dom";
import { useStudentOnboardingMutation } from "../../../redux/Slices/studentSlice";
import toast from "react-hot-toast";

const timezones = [
  { value: "UTC", label: "UTC (GMT+0)" },
  { value: "Asia/Dhaka", label: "Asia/Dhaka (GMT+6)" },
  { value: "Asia/Kolkata", label: "Asia/Kolkata (GMT+5:30)" },
  { value: "America/New_York", label: "America/New_York (GMT-4)" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles (GMT-7)" },
  { value: "Europe/London", label: "Europe/London (GMT+1)" },
  { value: "Europe/Berlin", label: "Europe/Berlin (GMT+2)" },
  { value: "Asia/Tokyo", label: "Asia/Tokyo (GMT+9)" },
  { value: "Australia/Sydney", label: "Australia/Sydney (GMT+10)" },
  { value: "Africa/Nairobi", label: "Africa/Nairobi (GMT+3)" },
  { value: "America/Sao_Paulo", label: "America/Sao_Paulo (GMT-3)" },
  { value: "Asia/Dubai", label: "Asia/Dubai (GMT+4)" },
  { value: "Asia/Shanghai", label: "Asia/Shanghai (GMT+8)" },
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Bangladesh",
  "India",
  "Germany",
  "Australia",
  "France",
  "Japan",
  "Brazil",
  "China",
  "South Korea",
  "United Arab Emirates",
  "Pakistan",
  "Mexico",
  "Indonesia",
  "Nigeria",
  "South Africa",
  "Spain",
  "Italy",
];

const StudentOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onChange" });

  const next = async () => {
    const valid = await methods.trigger();
    if (valid) setStep((s) => Math.min(s + 1, 4));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 1));
const [studentOnboarding, { isLoading }] = useStudentOnboardingMutation(); // 🎯 RTK Mutation hook

const onSubmit = async (data: any) => {
  try {
    const formData = new FormData();

    // ✅ Basic fields
    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    formData.append("country", data.country);
    formData.append("timezone", data.timezone);
    formData.append(
      "languages",
      Array.isArray(data.languages) ? data.languages.join(", ") : data.languages
    );
    formData.append("custom_subject", data.otherSubjects || "");
    formData.append("current_level", data.level);
    formData.append("learning_goal", data.learningGoals);
    formData.append("preferred_learning_style", data.preferredLearningStyle);
    formData.append("previous_learning_experience", data.learningExperience);
    formData.append("preferred_lesson_time", data.availability.join(", "));
    formData.append("lesson_frequency", data.lessonFrequency);
    formData.append("lesson_duration", data.lessonDuration);

    // ✅ Append user_id from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user?.id) {
      toast.error("User ID not found. Please log in again.");
      return;
    }
    formData.append("user_id", user.id.toString());

    // ✅ Map subject names to IDs
    const subjectMap: Record<string, number> = {
      English: 1,
      French: 2,
      Programming: 3,
      Photography: 4,
      Art: 5,
      Music: 6,
      // ✅ Add more as needed
    };

    const uniqueSubjects = [...new Set(data.subjects)];
    uniqueSubjects.forEach((subject: any) => {
      const subjectId = subjectMap[subject];
      if (subjectId) {
        formData.append("subjects[]", String(subjectId));
      }
    });

    // ✅ Debug: Show FormData entries in console
    console.log("📦 FormData Contents:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // ✅ Send to API via RTK mutation
    await studentOnboarding(formData).unwrap();

    // ✅ Success actions
    toast.success("Onboarding completed!");
    navigate("/dashboard");
    methods.reset();
    setStep(1);
  } catch (err: any) {
    console.error("❌ Onboarding failed:", err);
    toast.error(err?.data?.message || "Something went wrong. Try again.");
  }
};




  return (
    <FormProvider {...methods}>
      <StudentOnboardingLayout step={step} totalSteps={4}>
        <form
          onSubmit={methods.handleSubmit(step === 4 ? onSubmit : next)}
          className="space-y-6"
        >
          {step === 1 && (
            <>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 xl:grid-cols-2 gap-4"
              >
                {/* First Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    {...methods.register("firstName", {
                      required: "First name is required",
                    })}
                    placeholder="Enter First Name"
                    className="px-4 py-[14px] cursor-pointer border border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
                  {methods.formState.errors.firstName && (
                    <span className="text-red-500 text-xs">
                      {methods.formState.errors.firstName.message as string}
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    {...methods.register("lastName", {
                      required: "Last name is required",
                    })}
                    placeholder="Enter Last Name"
                    className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
                  {methods.formState.errors.lastName && (
                    <span className="text-red-500 text-xs">
                      {methods.formState.errors.lastName.message as string}
                    </span>
                  )}
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Country/Region
                </label>
                {/* Country Dropdown */}
                <select
                  id="country"
                  {...methods.register("country", {
                    required: "Country/Region is required",
                  })}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {methods.formState.errors.country && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.country.message as string}
                  </span>
                )}
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="timezone"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Timezone
                </label>
                <select
                  id="timezone"
                  {...methods.register("timezone", {
                    required: "Timezone is required",
                  })}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Timezone</option>
                  {timezones.map(tz => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
                {methods.formState.errors.timezone && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.timezone.message as string}
                  </span>
                )}
              </div>
              <div data-aos="fade-up">
                <label
                  htmlFor="languages"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Languages you speak
                </label>
                <input
                  id="languages"
                  {...methods.register("languages", {
                    required: "Languages are required",
                  })}
                  placeholder="English, Spanish, French"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac] w-full"
                />
                {methods.formState.errors.languages && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.languages.message as string}
                  </span>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple languages with commas
                </p>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div data-aos="fade-up" className="grid grid-cols-2 gap-4">
                {[
                  "English",
                  "French",
                  "Music",
                  "Programming",
                  "Photography",
                  "Art",
                  "English",
                  "French",
                  "Music",
                  "Programming",
                  "Photography",
                  "Art",
                ].map(subj => (
                  <label key={subj} className="flex items-center gap-2">
                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        value={subj}
                        {...methods.register("subjects", {
                          validate: (value: any) => {
                            console.log(value);
                            const vals = methods.getValues("subjects");
                            if (!vals || vals.length === 0)
                              return "Please select at least one subject";
                            return true;
                          },
                        })}
                      />
                      <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)]   peer-checked:bg-[var(--button-bg-blue)]  peer-checked:border-white transition-all" />
                      <span className="text-sm text-gray-800">{subj}</span>
                    </label>
                  </label>
                ))}
              </div>
              {methods.formState.errors.subjects && (
                <span className="text-red-500 text-xs">
                  {methods.formState.errors.subjects.message as string}
                </span>
              )}
              <div data-aos="fade-up" className="">
                <label
                  htmlFor="otherSubjects"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Other subjects (optional)
                </label>
                <input
                  id="otherSubjects"
                  {...methods.register("otherSubjects")}
                  placeholder="Enter Other Subject You Interested In"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac] w-full"
                />
              </div>
              <div data-aos="fade-up" className="space-y-3">
                {["Beginner", "Intermediate", "Advanced"].map(lvl => (
                  <label
                    key={lvl}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={lvl}
                      {...methods.register("level", {
                        required: "Please select your level",
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{lvl}</span>
                  </label>
                ))}
                {methods.formState.errors.level && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.level.message as string}
                  </span>
                )}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <textarea
                  data-aos="fade-up"
                  {...methods.register("learningGoals", {
                    required: "Learning goals are required",
                  })}
                  placeholder="Enter your learning goals"
                  className="border p-3 rounded-md w-full min-h-[100px]"
                />
                {methods.formState.errors.learningGoals && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.learningGoals.message as string}
                  </span>
                )}
              </div>
              {/* Preferred learning style */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  What's your preferred learning style?
                </div>
                {[
                  "Interactive conversations",
                  "Structured lessons with exercises",
                  "Mix of both",
                ].map(style => (
                  <label
                    key={style}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={style}
                      {...methods.register("preferredLearningStyle", {
                        required: "Please select a learning style",
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{style}</span>
                  </label>
                ))}
                {methods.formState.errors.preferredLearningStyle && (
                  <span className="text-red-500 text-xs">
                    {
                      methods.formState.errors.preferredLearningStyle
                        .message as string
                    }
                  </span>
                )}
              </div>
              {/* Learning Experience */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  Previous learning experience
                </div>
                {[
                  "No formal learning experience",
                  "Self-taught",
                  "Taken courses before",
                  "Learned in school/university",
                ].map(exp => (
                  <label
                    key={exp}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={exp}
                      {...methods.register("learningExperience", {
                        required:
                          "Please select your previous learning experience",
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{exp}</span>
                  </label>
                ))}
                {methods.formState.errors.learningExperience && (
                  <span className="text-red-500 text-xs">
                    {
                      methods.formState.errors.learningExperience
                        .message as string
                    }
                  </span>
                )}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              {/* Availability checkboxes */}
              <div data-aos="fade-up" className="grid grid-cols-2 gap-4">
                {[
                  "Weekday mornings",
                  "Weekday afternoons",
                  "Weekday evenings",
                  "Weekend mornings",
                  "Weekend afternoons",
                  "Weekend evenings",
                ].map(slot => (
                  <label
                    key={slot}
                    className="inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={slot}
                      {...methods.register("availability", {
                        validate: (value: any) => {
                          console.log(value);
                          const vals = methods.getValues("availability");
                          if (!vals || vals.length === 0)
                            return "Please select at least one availability slot";
                          return true;
                        },
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-white transition-all" />
                    <span className="text-sm text-gray-800">{slot}</span>
                  </label>
                ))}
              </div>
              {methods.formState.errors.availability && (
                <span className="text-red-500 text-xs">
                  {methods.formState.errors.availability.message as string}
                </span>
              )}

              {/* Lesson Frequency */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  How often do you plan to take lessons?
                </div>
                {["1-3 times per week", "Every other week", "Monthly"].map(
                  freq => (
                    <label
                      key={freq}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={freq}
                        {...methods.register("lessonFrequency", {
                          required: "Please select lesson frequency",
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                      <span className="text-gray-800">{freq}</span>
                    </label>
                  )
                )}
                {methods.formState.errors.lessonFrequency && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.lessonFrequency.message as string}
                  </span>
                )}
              </div>

              {/* Preferred Lesson Duration */}
              <div data-aos="fade-up" className="space-y-2">
                <div className="text-[16px] font-semibold leading-[125%] mb-3">
                  Preferred lesson duration
                </div>
                {["30 minutes", "45 minutes", "60 minutes"].map(dur => (
                  <label
                    key={dur}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={dur}
                      {...methods.register("lessonDuration", {
                        required: "Please select lesson duration",
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-full border border-[var(--button-bg-blue)] peer-checked:bg-[var(--button-bg-blue)] peer-checked:border-[var(--button-bg-blue)] transition-colors duration-300" />
                    <span className="text-gray-800">{dur}</span>
                  </label>
                ))}
                {methods.formState.errors.lessonDuration && (
                  <span className="text-red-500 text-xs">
                    {methods.formState.errors.lessonDuration.message as string}
                  </span>
                )}
              </div>
            </>
          )}

          <div data-aos="fade-up" className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="text-gray-700 hover:text-white hover:bg-[var(--button-bg-blue)] duration-700 cursor-pointer border text-sm px-4 xl:px-15 py-[14px] rounded"
              >
                Back
              </button>
            )}

            <button
              type="submit"
              disabled={step === 4 && isLoading}
              className={`${
                step === 4 && isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[var(--button-bg-blue)] hover:bg-white hover:text-[var(--button-bg-blue)]"
              } border border-[var(--button-bg-blue)] duration-700 text-white text-sm px-6 xl:px-15 py-[14px] rounded ml-auto`}
            >
              {step === 4 ? (isLoading ? "Submitting..." : "Complete") : "Next"}
            </button>
          </div>
        </form>
      </StudentOnboardingLayout>
    </FormProvider>
  );
};

export default StudentOnboarding;
