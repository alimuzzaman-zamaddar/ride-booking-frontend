import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../../../components/Tags/Heading/Heading";
import Paragraph from "../../../../components/Tags/Paragraph/Paragraph";
import { FaAngleLeft } from "react-icons/fa";
import VideoUpload from "./VideoUpload";
import ProfessionalDetailsSettings from "./ProfessionalDetailsSettings";
import NotificationPreferences from "./NotificationPreferences";
import TutorAddPaymentMethod from "./TutorAddPaymentMethod";
import Support from "../../StudentDashboard/Settings/Support";

const TutorProfileSettings: React.FC = () => {
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    setValue,
    watch,
    formState: { errors: errorsProfile },
  } = useForm();

  const [profileImage, setProfileImage] = useState<string | null>(null);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          setProfileImage(fileReader.result as string);
        }
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);
  };

  // Handle language input
  const handleLanguageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLanguage(event.target.value);
  };

  // Confirm language addition
  const handleConfirmLanguage = () => {
    if (newLanguage && !languagesList.includes(newLanguage)) {
      setLanguagesList([...languagesList, newLanguage]);
      setValue("languages", [...languagesList, newLanguage]);
      setNewLanguage("");
      handleCloseModal();
    } else {
      alert("Please enter a valid, unique language.");
    }
  };

  // Remove language handler
  const handleRemoveLanguage = (language: string) => {
    const filteredLanguages = languagesList.filter(lang => lang !== language);
    setLanguagesList(filteredLanguages);
    setValue("languages", filteredLanguages);
  };

  const [languagesList, setLanguagesList] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");

  const watchLanguages = watch("languages", []);

  // Add language handler
  const handleAddLanguage = () => {
    setIsModalOpen(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitProfile = (data: any) => {
    console.log("Profile Form Submitted:", data);
  };


  return (
    <div className="">
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className="xl:max-w-[1200px] mx-auto  mt-10">
        <div className="bg-primary-blue p-4 xl:p-8 rounded-xl mb-8 ">
          <Heading
            Txt="Tutor Profile"
            Variant="h2"
            className="text-[24px] xl:text-[32px] text-white font-semibold mb-1"
          />
          <Paragraph
            className="text-white font-normal text-sm xl:text-[16px]  leading-[150%]"
            Txt="Manage your teaching profile and preferences"
          />
        </div>
        <div className="w-full">
          <div>
            <div className="flex flex-col 2xl:flex-row gap-5 ">
              {/* Form Fields */}
              <div className="">
                <div className=" bg-bg-white border  border-alt-border mb-4 p-8 rounded-lg shadow-lg">
                  <Heading
                    Txt="Profile Information"
                    Variant="h2"
                    className="text-[20px] font-semibold mb-1"
                  />
                  <Paragraph
                    className="text-alt-gray font-normal text-[16px]  leading-[150%] mb-10"
                    Txt="Update your personal information and public profile"
                  />
                  <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
                    <div className="w-full 2xl:w-3xl">
                      <div className=" mr-8">
                        {/* Profile Picture */}
                        <div className="mb-8 gap-4">
                          <div className=" mb-6">
                            <div className="w-24 h-24 rounded-full  overflow-hidden border-2 border-alt-border">
                              {profileImage ? (
                                <img
                                  src={profileImage}
                                  alt="Profile"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                                  <span className="text-gray-500 text-sm">
                                    No Image
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center  ">
                            <label
                              htmlFor="file-input"
                              className="text-sm text-primary-blue cursor-pointer py-2 px-3 rounded-lg border border-alt-border hover:text-primary-green"
                            >
                              Change
                            </label>
                            {profileImage && (
                              <button
                                type="button"
                                onClick={handleImageRemove}
                                className="ml-4 text-sm text-alt-gray hover:text-red-700"
                              >
                                Remove
                              </button>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                              id="file-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" space-y-4">
                        <div className="flex flex-col xl:flex-row gap-3">
                          <div className="w-full xl:w-1/2">
                            <label
                              htmlFor="fullName"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              Full Name
                            </label>
                            <input
                              id="fullName"
                              type="text"
                              placeholder="John"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("fullName", {
                                required: "Full name is required",
                              })}
                            />
                            {errorsProfile.fullName && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.fullName?.message ===
                                "string"
                                  ? errorsProfile.fullName.message
                                  : null}
                              </p>
                            )}
                          </div>
                          <div className="w-full lx:w-1/2">
                            <label
                              htmlFor="gender"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              Gender
                            </label>
                            <select
                              id="gender"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("gender", {
                                required: "Gender is required",
                              })}
                              defaultValue=""
                            >
                              <option value="" disabled>
                                Select Gender
                              </option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                              <option value="prefer_not_to_say">
                                Prefer not to say
                              </option>
                            </select>
                            {errorsProfile.gender && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.gender?.message ===
                                "string"
                                  ? errorsProfile.gender.message
                                  : null}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col xl:flex-row gap-3">
                          <div className="w-full mb-4 xl:w-1/2 ">
                            <label
                              htmlFor="countryTimezone"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              Country &amp; Timezone
                            </label>
                            <input
                              id="countryTimezone"
                              type="text"
                              placeholder="e.g., United States, GMT-5"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("countryTimezone", {
                                required: "Country and timezone are required",
                              })}
                            />
                            {errorsProfile.countryTimezone && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.countryTimezone
                                  ?.message === "string"
                                  ? errorsProfile.countryTimezone.message
                                  : null}
                              </p>
                            )}
                          </div>
                          <div className="w-full xl:w-1/2">
                            <label
                              htmlFor="dateOfBirth"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              Date of Birth
                            </label>
                            <div className="relative">
                              <input
                                id="dateOfBirth"
                                type="date"
                                className="w-full border border-alt-border px-4 py-2 rounded-md"
                                {...registerProfile("dateOfBirth", {
                                  required: "Date of birth is required",
                                })}
                              />
                            </div>
                            {errorsProfile.dateOfBirth && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.dateOfBirth?.message ===
                                "string"
                                  ? errorsProfile.dateOfBirth.message
                                  : null}
                              </p>
                            )}
                          </div>
                        </div>
                        <h3 className="block text-[16px] font-semibold text-secondary-black mb-2">
                          Languages Spoken
                        </h3>
                        {/* Languages List */}
                        <div className="flex flex-wrap gap-3 items-center">
                          <div className="flex flex-wrap gap-2 ">
                            {watchLanguages.map(
                              (language: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center text-[14px] font-semibold text-secondary-black bg-[#DBE5F0] px-6 py-[10px] rounded-[25px]"
                                >
                                  <span>{language}</span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleRemoveLanguage(language)
                                    }
                                    className="ml-2 text-red-500 hover:text-red-700"
                                  >
                                    x
                                  </button>
                                </div>
                              )
                            )}
                          </div>

                          {/* Add Language Button */}
                          <button
                            type="button"
                            onClick={handleAddLanguage}
                            className="flex items-center text-[14px] font-semibold text-secondary-black bg-white border border-alt-border px-6 py-[10px] rounded-[25px]"
                          >
                            + Add Language
                          </button>
                        </div>
                        {/* Modal for Adding Language */}
                        {isModalOpen && (
                          <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                              <h4 className="text-xl mb-4">Add New Language</h4>
                              <input
                                type="text"
                                value={newLanguage}
                                onChange={handleLanguageInput}
                                className="w-full px-4 py-2 border rounded-md mb-4"
                                placeholder="Enter language"
                              />
                              <div className="flex justify-between">
                                <button
                                  type="button"
                                  onClick={handleCloseModal}
                                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={handleConfirmLanguage}
                                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <div className="mb-4 w-1/2">
                            <label
                              htmlFor="country"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              Country
                            </label>
                            <input
                              id="country"
                              type="text"
                              placeholder="United States"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("country", {
                                required: "Country is required",
                              })}
                            />
                            {errorsProfile.country && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.country?.message ===
                                "string"
                                  ? errorsProfile.country.message
                                  : null}
                              </p>
                            )}
                          </div>

                          <div className="mb-4 w-1/2">
                            <label
                              htmlFor="city"
                              className="block text-[16px] font-semibold text-secondary-black mb-2"
                            >
                              City
                            </label>
                            <input
                              id="city"
                              type="text"
                              placeholder="e.g., New York"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("city", {
                                required: "City is required",
                              })}
                            />
                            {errorsProfile.city && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.city?.message === "string"
                                  ? errorsProfile.city.message
                                  : null}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="bio"
                            className="block text-[16px] font-semibold text-secondary-black mb-2"
                          >
                            Bio
                          </label>
                          <textarea
                            id="bio"
                            placeholder="Tell us about yourself"
                            className="w-full border border-alt-border px-4 py-2 rounded-md"
                            rows={5}
                            {...registerProfile("bio")}
                          />
                          {errorsProfile.bio && (
                            <p className="text-red-500 text-sm mt-1">
                              {typeof errorsProfile.bio?.message === "string"
                                ? errorsProfile.bio.message
                                : null}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                  </form>
                </div>
                <div className="bg-bg-white border  border-alt-border mb-4 p-8 rounded-lg shadow-lg">
                  <ProfessionalDetailsSettings />
                </div>
                <div className="bg-bg-white border  border-alt-border mb-4 p-8 rounded-lg shadow-lg">
                  <NotificationPreferences />
                </div>
                <div className="bg-bg-white border  border-alt-border mb-4 p-8 rounded-lg shadow-lg">
                  <TutorAddPaymentMethod />
                </div>
                <div className="">
                  <Support />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <VideoUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfileSettings;
