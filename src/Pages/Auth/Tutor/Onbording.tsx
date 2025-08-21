/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { TutorSignUpLayout } from "./TutorSignUpLayout";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onChange" });

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
        navigate("/dashboard");
    const { reset } = methods;
    reset();
    setStep(1);
    console.log("Final data:", data);
  };

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

  const subjectOptions = [
    { value: "Math", label: "Math" },
    { value: "Science", label: "Science" },
    { value: "English", label: "English" },
    { value: "Photography", label: "Photography" },
    { value: "Programming", label: "Programming" },
    { value: "Art", label: "Art" },
  ];

  function generateTimes() {
    const times = [];
    for (let h = 0; h < 24; h++) {
      times.push(
        `${h.toString().padStart(2, "0")}:00`,
        `${h.toString().padStart(2, "0")}:30`
      );
    }
    return times;
  }

  return (
    <FormProvider {...methods}>
      <TutorSignUpLayout step={step} totalSteps={4}>
        <form
          onSubmit={methods.handleSubmit(step === 4 ? onSubmit : next)}
          className="space-y-6"
        >
          {step === 1 && (
            <>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                    required
                    id="firstName"
                    {...methods.register("firstName")}
                    placeholder="Enter First Name"
                    className="px-4 py-[14px] cursor-pointer border border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
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
                    required
                    id="lastName"
                    {...methods.register("lastName")}
                    placeholder="Enter Last Name"
                    className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="Country/Region"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Country/Region
                </label>
                {/* Country Dropdown */}
                <select
                  required
                  {...methods.register("country")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="Timezone"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Timezone
                </label>
                <select
                  required
                  {...methods.register("timezone")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Select Timezone</option>
                  {timezones.map(tz => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
              <div data-aos="fade-up" className="flex flex-col">
                <label
                  htmlFor="Languages you speak"
                  className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3"
                >
                  Languages you speak
                </label>
                <input
                  required
                  {...methods.register("languages")}
                  placeholder="Languages you speak"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <div>
                  <label>Subjects You Teach</label>
                  <Controller
                    name="subjects"
                    control={methods.control} // Pass control
                    render={({ field }) => (
                      <Select
                        required
                        {...field}
                        isMulti
                        options={subjectOptions}
                        placeholder="Add A Subject"
                        className="react-select-container my-3"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                </div>
              </div>

              <div data-aos="fade-up" className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  Experience
                </label>
                <select
                  required
                  {...methods.register("experience")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  <option value="">Years of Experience</option>
                  <option value="0-1">0-1</option>
                  <option value="2-5">2-5</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              <div data-aos="fade-up" className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  Education Background
                </label>
                <textarea
                  required
                  {...methods.register("education")}
                  placeholder="Describe your education"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  Certifications
                </label>
                <textarea
                  required
                  {...methods.register("certifications")}
                  placeholder="List your certifications"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div data-aos="fade-up" className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  About Me
                </label>
                <textarea
                  required
                  {...methods.register("about")}
                  placeholder="Write something about yourself"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Upload Photo */}
                <div data-aos="fade-up" className="flex flex-col">
                  <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                    Upload Photo
                  </label>
                  <label className="group relative flex flex-col items-center justify-center h-48 border-2 border-dashed border-[var(--color-secondry-gray)] rounded-md cursor-pointer text-center cursor-pointer hover:border-[var(--button-bg-blue)] transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9FA7AC] group-hover:text-[var(--button-bg-blue)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h4l2-3h6l2 3h4v13H3V7z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-[#6B7280] group-hover:text-[var(--button-bg-blue)]">
                      Upload your profile photo
                    </p>
                    <div className="mt-4 px-4 py-1 border border-[#9FA7AC] rounded-full text-sm text-[#6B7280] group-hover:border-[var(--button-bg-blue)] group-hover:text-[var(--button-bg-blue)]">
                      Choose File
                    </div>
                    <input
                      required
                      type="file"
                      accept="image/*"
                      {...methods.register("photo")}
                      className="absolute inset-0 cursor-pointer opacity-0 cursor-pointer"
                    />
                  </label>
                </div>

                {/* Upload Video */}
                <div data-aos="fade-up" className="flex flex-col">
                  <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                    Upload Intro Video
                  </label>
                  <label className="group relative flex flex-col items-center justify-center h-48 border-2 border-dashed border-[var(--color-secondry-gray)] rounded-md cursor-pointer text-center hover:border-[var(--button-bg-blue)] transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9FA7AC] group-hover:text-[var(--button-bg-blue)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="mt-2 text-sm text-[#6B7280] group-hover:text-[var(--button-bg-blue)]">
                      Upload Introduction video
                    </p>
                    <div className="mt-4 px-4 py-1 border border-[#9FA7AC] rounded-full text-sm text-[#6B7280] group-hover:border-[var(--button-bg-blue)] group-hover:text-[var(--button-bg-blue)]">
                      Choose File
                    </div>
                    <input
                      type="file"
                      accept="video/*"
                      {...methods.register("video")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                  <p className="text-xs text-red-500 mt-2">
                    The user (Tutor) can upload an Introduction video with a
                    maximum duration of 2 minutes.
                  </p>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div data-aos="fade-up" className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  Choose your timezone
                </label>
                <select
                  required
                  {...methods.register("finalTimezone")}
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                >
                  {timezones.map(tz => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>

              <div data-aos="fade-up" className="flex flex-col">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-3">
                  Set your 50 minute lesson price
                </label>
                <input
                  
                  {...methods.register("lessonPrice")}
                  placeholder="$ Set your lesson price"
                  className="px-4 py-[14px] border cursor-pointer border-[var(--color-secondry-gray)] my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
                />
              </div>

              {/* Weekly Availability */}
              <div data-aos="fade-up">
                <label className="text-sm text-[var(--color-text-blue)] font-semibold leading-[142.857%] mb-4 block">
                  Set your availability
                </label>

                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map(day => {
                  const enabled = methods.watch(`availability.${day}.enabled`);

                  return (
                    <div key={day} className="mb-6">
                      {/* Checkbox */}
                      <label className="flex items-center cursor-pointer gap-2 text-sm font-semibold text-[var(--color-text-blue)] mb-2">
                        <input
                          
                          type="checkbox"
                          {...methods.register(`availability.${day}.enabled`)}
                        />
                        {day}
                      </label>

                      {/* Time Selectors (conditional) */}
                      {enabled && (
                        <div className="space-y-4">
                          {[0].map(index => (
                            <div key={index} className="grid grid-cols-2 gap-4">
                              <div className="flex flex-col">
                                <label className="text-xs text-gray-600 mb-1">
                                  From
                                </label>
                                <select
                                  
                                  {...methods.register(
                                    `availability.${day}.slots.${index}.from`
                                  )}
                                  className="px-4 py-2 border border-[var(--color-secondry-gray)] rounded-md"
                                >
                                  {generateTimes().map(time => (
                                    <option key={time}>{time}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="flex flex-col">
                                <label className="text-xs text-gray-600 mb-1">
                                  To
                                </label>
                                <select
                                  
                                  {...methods.register(
                                    `availability.${day}.slots.${index}.to`
                                  )}
                                  className="px-4 py-2 border border-[var(--color-secondry-gray)] rounded-md"
                                >
                                  {generateTimes().map(time => (
                                    <option key={time}>{time}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="text-sm font-semibold text-[var(--button-bg-blue)] underline"
                            // TODO: add slot logic
                          >
                            Add another timeslot
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
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
              className="bg-[var(--button-bg-blue)] border border-[var(--button-bg-blue)] hover:bg-white duration-700 hover:text-[var(--button-bg-blue)] hover:border-[ver(--button-bg-blue)] cursor-pointer hover text-white text-sm px-6 xl:px-15 py-[14px] rounded ml-auto"
            >
              {step === 4 ? "Complete" : "Next"}
            </button>
          </div>
        </form>
      </TutorSignUpLayout>
    </FormProvider>
  );
}
