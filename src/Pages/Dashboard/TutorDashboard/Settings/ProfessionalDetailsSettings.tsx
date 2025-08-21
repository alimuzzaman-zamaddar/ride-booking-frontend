import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UploadVideoSvg } from "../../../../components/SvgContainer/SVgContainer";
import Heading from "../../../../components/Tags/Heading/Heading";

// Define the form values interface
interface ProfessionalDetailsFormValues {
  subjectsYouTeach: string[];
  specializations: string[];
  teachingExperience: string;
  hourlyRate: string;
  certificate?: FileList;
}

const ProfessionalDetailsSettings: React.FC = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfessionalDetailsFormValues>({
    defaultValues: {
      subjectsYouTeach: [],
      specializations: [],
      teachingExperience: "",
      hourlyRate: "",
    },
  });

  // State for subjectsYouTeach and specializations modals
  const watchedSubjectsYouTeach = watch("subjectsYouTeach", []);
  const watchedSpecializations = watch("specializations", []);
  const [isSubjectsYouTeachModalOpen, setIsSubjectsYouTeachModalOpen] =
    useState(false);
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false);
  const [newSubjectYouTeach, setNewSubjectYouTeach] = useState("");
  const [newSpecialization, setNewSpecialization] = useState("");

  // Certificate file state
  const [fileName, setFileName] = useState<string>("");

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  // Handlers for subjectsYouTeach modal
  const handleAddSubjectYouTeach = () => setIsSubjectsYouTeachModalOpen(true);
  const handleSubjectYouTeachInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewSubjectYouTeach(e.target.value);
  const handleCloseSubjectYouTeachModal = () => {
    setIsSubjectsYouTeachModalOpen(false);
    setNewSubjectYouTeach("");
  };
  const handleConfirmSubjectYouTeach = () => {
    if (
      newSubjectYouTeach.trim() &&
      !watchedSubjectsYouTeach.includes(newSubjectYouTeach.trim())
    ) {
      setValue("subjectsYouTeach", [
        ...watchedSubjectsYouTeach,
        newSubjectYouTeach.trim(),
      ]);
    }
    handleCloseSubjectYouTeachModal();
  };
  const handleRemoveSubjectYouTeach = (subject: string) => {
    setValue(
      "subjectsYouTeach",
      watchedSubjectsYouTeach.filter((item: string) => item !== subject)
    );
  };

  // Handlers for specialization modal
  const handleAddSpecialization = () => setIsSpecializationModalOpen(true);
  const handleSpecializationInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewSpecialization(e.target.value);
  const handleCloseSpecializationModal = () => {
    setIsSpecializationModalOpen(false);
    setNewSpecialization("");
  };
  const handleConfirmSpecialization = () => {
    if (
      newSpecialization.trim() &&
      !watchedSpecializations.includes(newSpecialization.trim())
    ) {
      setValue("specializations", [
        ...watchedSpecializations,
        newSpecialization.trim(),
      ]);
    }
    handleCloseSpecializationModal();
  };
  const handleRemoveSpecialization = (specialization: string) => {
    setValue(
      "specializations",
      watchedSpecializations.filter((item: string) => item !== specialization)
    );
  };

  // Form submit handler
  const onSubmit = (data: ProfessionalDetailsFormValues) => {
    // Log all form data including file name and profile image
    console.log({
      ...data,
      certificate: data.certificate?.[0]?.name || null,
    });
    alert("Profile updated!");
  };

  return (
    <div className="">
      <div className="">
        <Heading
          Txt="Professional Details "
          Variant="h3"
          className="text-secondary-black text-[20px] font-semibold mb-5"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full 2xl:w-3xl">
          <div className="space-y-4">
            {/* Subjects You Teach Section */}
            <div>
              <h3 className="block text-[16px] font-semibold text-secondary-black mb-4">
                Subjects You Teach
              </h3>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex flex-wrap gap-2">
                  {watchedSubjectsYouTeach.map(
                    (subject: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center text-[14px] font-semibold text-secondary-black bg-[#DBE5F0] px-6 py-[10px] rounded-[25px]"
                      >
                        <span>{subject}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveSubjectYouTeach(subject)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          x
                        </button>
                      </div>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddSubjectYouTeach}
                  className="flex items-center text-[14px] font-semibold text-secondary-black bg-white border border-alt-border px-6 py-[10px] rounded-[25px]"
                >
                  + Add Subject
                </button>
              </div>
            </div>

            {/* Specializations Section */}
            <div>
              <h3 className="block text-[16px] font-semibold text-secondary-black mb-4">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex flex-wrap gap-2">
                  {watchedSpecializations.map(
                    (specialization: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center text-[14px] font-semibold text-secondary-black bg-[#DBE5F0] px-6 py-[10px] rounded-[25px]"
                      >
                        <span>{specialization}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveSpecialization(specialization)
                          }
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          x
                        </button>
                      </div>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddSpecialization}
                  className="flex items-center text-[14px] font-semibold text-secondary-black bg-white border border-alt-border px-6 py-[10px] rounded-[25px]"
                >
                  + Add Specialization
                </button>
              </div>
            </div>

            {/* Teaching Experience and Hourly Rate */}
            <div className="flex flex-col xl:flex-row gap-3">
              <div className="w-full xl:w-1/2">
                <label
                  htmlFor="teachingExperience"
                  className="block text-[16px] font-semibold text-secondary-black mb-4"
                >
                  Teaching Experience
                </label>
                <select
                  id="teachingExperience"
                  className="w-full border border-alt-border px-4 py-2 rounded-md"
                  {...register("teachingExperience", {
                    required: "Teaching experience is required",
                  })}
                >
                  <option value="" disabled>
                    Select Experience
                  </option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="1_3">1-3 years</option>
                  <option value="3_5">3-5 years</option>
                  <option value="5_10">5-10 years</option>
                  <option value="10_plus">10+ years</option>
                </select>
                {errors.teachingExperience && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.teachingExperience.message}
                  </p>
                )}
              </div>
              <div className="w-full xl:w-1/2">
                <label
                  htmlFor="hourlyRate"
                  className="block text-[16px] font-semibold text-secondary-black mb-4"
                >
                  Hourly Rate
                </label>
                <select
                  id="hourlyRate"
                  className="w-full border border-alt-border px-4 py-2 rounded-md"
                  {...register("hourlyRate", {
                    required: "Hourly rate is required",
                  })}
                >
                  <option value="" disabled>
                    Select Hourly Rate
                  </option>
                  <option value="10">$10/hr</option>
                  <option value="20">$20/hr</option>
                  <option value="30">$30/hr</option>
                  <option value="40">$40/hr</option>
                  <option value="50">$50/hr</option>
                  <option value="custom">Custom</option>
                </select>
                {errors.hourlyRate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hourlyRate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Modals for Adding Subjects and Specializations */}
            {isSubjectsYouTeachModalOpen && (
              <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h4 className="text-xl mb-4">Add New Subject You Teach</h4>
                  <input
                    type="text"
                    value={newSubjectYouTeach}
                    onChange={handleSubjectYouTeachInput}
                    className="w-full px-4 py-2 border rounded-md mb-4"
                    placeholder="Enter subject"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleCloseSubjectYouTeachModal}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmSubjectYouTeach}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isSpecializationModalOpen && (
              <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h4 className="text-xl mb-4">Add New Specialization</h4>
                  <input
                    type="text"
                    value={newSpecialization}
                    onChange={handleSpecializationInput}
                    className="w-full px-4 py-2 border rounded-md mb-4"
                    placeholder="Enter specialization"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleCloseSpecializationModal}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmSpecialization}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certification Upload Section */}
        <div className="mt-5 bg-white rounded-lg">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Certifications</h3>
          <div className="border-dashed border-2 border-alt-border p-15 text-center rounded-lg mb-4">
            <Controller
              name="certificate"
              control={control}
              render={({ field }) => (
                <div>
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={e => {
                      handleFileChange(e);
                      field.onChange(e.target.files); // ✅ Send FileList
                    }}
                    className="hidden"
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-500 font-semibold"
                  >
                    <div className="mb-4 flex justify-center text-secondary-black items-center text-center">
                      <UploadVideoSvg />
                    </div>
                    <span className="text-secondary-black">
                      Upload your certificates (PDF, PNG, JPG)
                    </span>
                    <br />
                    <div className="text center">
                      <p className="bg-white border w-full mt-5 border-alt-border duration-700 text-secondary-black px-6 py-2 cursor-pointer rounded-[8px] flex items-center justify-center gap-3">
                        Choose File
                      </p>
                    </div>
                  </label>
                </div>
              )}
            />
          </div>
          {/* Display file name */}
          {fileName && (
            <div className="text-[#19842C] mb-4">
              <p>{fileName}</p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalDetailsSettings;
