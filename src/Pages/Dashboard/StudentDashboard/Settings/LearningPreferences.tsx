import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ToggleSwitch from "./ToggleSwitch"; // Assuming ToggleSwitch is imported from the correct path.
import Heading from "../../../../components/Tags/Heading/Heading";

type FormData = {
  subjects: string;
  learningGoals: string;
  currentLevel: string;
  lessonReminders: boolean;
  newMessages: boolean;
};

const LearningPreferences: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  // Managing state for toggles
  const [lessonReminders, setLessonReminders] = useState(false);
  const [newMessages, setNewMessages] = useState(false);

  // Set the value of the toggle when state changes
  useEffect(() => {
    setValue("lessonReminders", lessonReminders);
  }, [lessonReminders, setValue]);

  useEffect(() => {
    setValue("newMessages", newMessages);
  }, [newMessages, setValue]);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    console.log("Lesson Reminders:", lessonReminders);
    console.log("New Messages:", newMessages);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="">
      <div className="w-full max-w-3xl mx-auto bg-bg-white border border-alt-border p-8 rounded-lg shadow-lg">
        <Heading
          Txt="Learning Preferences"
          Variant="h2"
          className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Learning Preferences Section */}
          <section className="mb-8">
            {/* Subjects I'm Learning */}
            <div className="mb-4">
              <label className="block text-secondary-black text-sm lg:text-[16px]  font-semibold leading-[150%] mb-2">
                Subjects I'm Learning
              </label>
              <input
                type="text"
                className="w-full text-sm lg:text-[16px]   border border-alt-border px-4 py-2 rounded-md"
                placeholder="English, Digital Art, Photography"
                {...register("subjects", { required: "Subjects are required" })}
              />
              {errors.subjects && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subjects.message}
                </p>
              )}
            </div>

            {/* Learning Goals */}
            <div className="mb-4">
              <label className="block text-secondary-black text-sm lg:text-[16px]  font-semibold leading-[150%] mb-2">
                Learning Goals
              </label>
              <textarea
                className="w-full text-sm lg:text-[16px]  border border-alt-border px-4 py-2 rounded-md"
                placeholder="What do you want to achieve with your learning?"
                rows={4}
                {...register("learningGoals", {
                  required: "Learning goals are required",
                })}
              />
              {errors.learningGoals && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.learningGoals.message}
                </p>
              )}
            </div>

            {/* Current Level */}
            <div className="mb-4">
              <label className="block text-sm lg:text-[16px]  font-semibold leading-[150%] text-secondary-black mb-2">
                Current Level
              </label>
              <select
                className="w-full text-sm lg:text-[16px]  border border-alt-border px-4 py-2 rounded-md"
                {...register("currentLevel", {
                  required: "Current level is required",
                })}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {errors.currentLevel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentLevel.message}
                </p>
              )}
            </div>
          </section>

          {/* Notification Preferences Section */}
          <section className="mb-8">
            <Heading
              Txt="Notification Preferences"
              Variant="h2"
              className="text-lg lg:text-2xl font-semibold text-gray-700 mb-6"
            />
            {/* Lesson Reminders Toggle */}
            <ToggleSwitch
              labelHeading="Lesson Reminders"
              labelDescription="Get notified before your lessons"
              checked={lessonReminders}
              onChange={checked => setLessonReminders(checked)}
            />

            {/* New Messages Toggle */}
            <ToggleSwitch
              labelHeading="New Messages"
              labelDescription="Get notified when tutors message you"
              checked={newMessages}
              onChange={checked => setNewMessages(checked)}
            />
          </section>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LearningPreferences;
