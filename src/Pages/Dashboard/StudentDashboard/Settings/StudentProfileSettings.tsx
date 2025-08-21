/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../../../components/Tags/Heading/Heading";
import Paragraph from "../../../../components/Tags/Paragraph/Paragraph";
import { FaAngleLeft, FaCreditCard } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbSettingsStar } from "react-icons/tb";
import LearningPreferences from "./LearningPreferences";
import Billing from "./Billing";
import { GoShieldCheck } from "react-icons/go";
import Support from "./Support";
import { useChangePasswordMutation, useGetUserDataQuery } from "../../../../redux/Slices/authSlice";
import Loader from "../../../../components/Loader/Loader";
import toast from "react-hot-toast";

const StudentProfileSettings: React.FC = () => {
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const { data: user, isLoading } = useGetUserDataQuery(undefined);
  // inside your component
const [changePassword, { isLoading: passwordLoading }] =
  useChangePasswordMutation();


  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

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

  const onSubmitProfile = (data: any) => {
    console.log("Profile Form Submitted:", data);
  };

  const onSubmitPassword = async (data: any) => {
    // console.log("Password Form Submitted:", data);

    const formData = new FormData();
    formData.append("current_password", data.currentPassword);
    formData.append("password", data.newPassword);
    formData.append("password_confirmation", data.confirmNewPassword);

    try {
      const res = await changePassword(formData).unwrap();
      toast.success("Password updated successfully!");
      console.log(res);
    } catch (error: any) {
      const msg = error?.data?.message || "Failed to update password";
      toast.error(msg);
      console.error("Change password error:", error);
    }
  };

  console.log(user?.data, "user from sidebar");

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
      <div className="w-full max-w-3xl mx-auto py-10">
        <div>
          <Heading
            Txt="Settings"
            Variant="h2"
            className="text-2xl lg:text-[32px] font-semibold mb-1"
          />
          <Paragraph
            className="text-text-gray font-normal text-sm lg:text-[16px]  leading-[150%] mb-8"
            Txt="Manage your account settings and preferences"
          />

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-3">
              <div className="bg-bg-light-gray px-2 py-2 lg:py-[5px] flex flex-wrap justify-center items-center rounded-lg lg:rounded-[28px] gap-3 ">
                {(
                  ["Profile", "Preferences", "Billing", "Privacy"] as const
                ).map(tab => {
                  type TabType =
                    | "Profile"
                    | "Preferences"
                    | "Billing"
                    | "Privacy";
                  const icons: Record<TabType, React.ReactElement> = {
                    Profile: <CiUser />,
                    Preferences: <TbSettingsStar />,
                    Billing: <FaCreditCard />,
                    Privacy: <GoShieldCheck />,
                  };

                  return (
                    <button
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? "text-primary-blue text-sm bg-bg-white rounded-[28px]"
                          : "text-secondary-black"
                      } py-1 px-4  text-sm font-semibold flex items-center space-x-2 cursor-pointer`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {icons[tab]} {/* Display the corresponding icon */}
                      <span>{tab}</span> {/* Display the tab name */}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  ">
          <div>
            {activeTab === "Profile" && (
              <>
                {/* Form Fields */}
                <div className=" bg-bg-white border  border-alt-border mb-4 p-8 rounded-lg shadow-lg">
                  <Heading
                    Txt="Profile Information"
                    Variant="h2"
                    className="text-lg lg:text-[20px] font-semibold mb-1"
                  />
                  <Paragraph
                    className="text-alt-gray font-normal text-sm lg:text-[16px]  leading-[150%] mb-10"
                    Txt="Update your personal information and public profile"
                  />
                  <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-[20%] mr-8">
                        {/* Profile Picture */}
                        <div className="mb-8 gap-4">
                          <div className="flex justify-center items-center mb-6">
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
                          <div className="flex justify-between items-center ">
                            <label
                              htmlFor="file-input"
                              className="text-sm text-primary-blue cursor-pointer hover:text-primary-green"
                            >
                              Change
                            </label>
                            {profileImage && (
                              <button
                                type="button"
                                onClick={handleImageRemove}
                                className="ml-4 text-sm text-red-500 hover:text-red-700"
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
                      <div className="lg:w-[80%] space-y-4">
                        <div className="flex flex-col lg:flex-row gap-3">
                          <div className="lg:w-1/2">
                            <label
                              htmlFor="firstName"
                              className="block text-secondary-black mb-2"
                            >
                              First Name
                            </label>
                            <input
                              id="firstName"
                              type="text"
                              placeholder={user?.data?.name}
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("firstName", {
                                required: "First name is required",
                              })}
                            />
                            {errorsProfile.firstName && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.firstName?.message ===
                                "string"
                                  ? errorsProfile.firstName.message
                                  : null}
                              </p>
                            )}
                          </div>
                          <div className="lg:w-1/2">
                            <label
                              htmlFor="lastName"
                              className="block text-secondary-black mb-2"
                            >
                              Last Name
                            </label>
                            <input
                              id="lastName"
                              type="text"
                              placeholder="Doe"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("lastName", {
                                required: "Last name is required",
                              })}
                            />
                            {errorsProfile.lastName && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.lastName?.message ===
                                "string"
                                  ? errorsProfile.lastName.message
                                  : null}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="displayName"
                            className="block text-secondary-black mb-2"
                          >
                            Display Name
                          </label>
                          <input
                            id="displayName"
                            type="text"
                            placeholder="John Doe"
                            className="w-full border border-alt-border px-4 py-2 rounded-md"
                            {...registerProfile("displayName", {
                              required: "Display name is required",
                            })}
                          />
                          {errorsProfile.displayName && (
                            <p className="text-red-500 text-sm mt-1">
                              {typeof errorsProfile.displayName?.message ===
                              "string"
                                ? errorsProfile.displayName.message
                                : null}
                            </p>
                          )}
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-secondary-black mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            className="w-full border border-alt-border px-4 py-2 rounded-md"
                            {...registerProfile("email", {
                              required: "Email is required",
                            })}
                          />
                          {errorsProfile.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {typeof errorsProfile.email?.message === "string"
                                ? errorsProfile.email.message
                                : null}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col lg:flex-row gap-3">
                          <div className="mb-4 lg:w-1/2">
                            <label
                              htmlFor="country"
                              className="block text-secondary-black mb-2"
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

                          <div className="mb-4 lg:w-1/2">
                            <label
                              htmlFor="phoneNumber"
                              className="block text-secondary-black mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phoneNumber"
                              type="tel"
                              placeholder="+1 (123) 456-7890"
                              className="w-full border border-alt-border px-4 py-2 rounded-md"
                              {...registerProfile("phoneNumber", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9+\-() ]+$/,
                                  message: "Invalid phone number",
                                },
                              })}
                            />
                            {errorsProfile.phoneNumber && (
                              <p className="text-red-500 text-sm mt-1">
                                {typeof errorsProfile.phoneNumber?.message ===
                                "string"
                                  ? errorsProfile.phoneNumber.message
                                  : null}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="bio"
                            className="block text-secondary-black mb-2"
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

                        <div className="mb-4">
                          <label
                            htmlFor="timezone"
                            className="block text-secondary-black mb-2"
                          >
                            Timezone
                          </label>
                          <input
                            id="timezone"
                            placeholder="e.g., GMT-5"
                            type="text"
                            className="w-full border border-alt-border px-4 py-2 rounded-md"
                            {...registerProfile("timezone", {
                              required: "Timezone is required",
                            })}
                          />
                          {errorsProfile.timezone && (
                            <p className="text-red-500 text-sm mt-1">
                              {typeof errorsProfile.timezone?.message ===
                              "string"
                                ? errorsProfile.timezone.message
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
                    </div>
                  </form>
                </div>
                {/* Password Section */}
                <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                  <section className="mt-8 bg-bg-white p-8 border border-alt-border rounded-lg shadow-lg">
                    <Heading
                      Txt="Change Password"
                      Variant="h2"
                      className="text-lg lg:text-[20px] font-semibold mb-1"
                    />
                    <Paragraph
                      className="text-text-gray font-normal text-sm lg:text-[16px]  leading-[150%] mb-10"
                      Txt="Update your password to keep your account secure."
                    />

                    <div className="mb-4">
                      <label
                        htmlFor="currentPassword"
                        className="block text-secondary-black mb-2"
                      >
                        Current Password
                      </label>
                      <input
                        id="currentPassword"
                        type="password"
                        className="w-full border border-alt-border px-4 py-2 rounded-md"
                        {...registerPassword("currentPassword", {
                          required: "Current password is required",
                        })}
                      />
                      {errorsPassword.currentPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {typeof errorsPassword.currentPassword?.message ===
                          "string"
                            ? errorsPassword.currentPassword.message
                            : null}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="newPassword"
                        className="block text-secondary-black mb-2"
                      >
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="w-full border border-alt-border px-4 py-2 rounded-md"
                        {...registerPassword("newPassword", {
                          required: "New password is required",
                        })}
                      />
                      {errorsPassword.newPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {typeof errorsPassword.newPassword?.message ===
                          "string"
                            ? errorsPassword.newPassword.message
                            : null}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="confirmNewPassword"
                        className="block text-secondary-black mb-2"
                      >
                        Confirm New Password
                      </label>
                      <input
                        id="confirmNewPassword"
                        type="password"
                        className="w-full border border-alt-border px-4 py-2 rounded-md"
                        {...registerPassword("confirmNewPassword", {
                          required: "Confirm your new password",
                        })}
                      />
                      {errorsPassword.confirmNewPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {typeof errorsPassword.confirmNewPassword?.message ===
                          "string"
                            ? errorsPassword.confirmNewPassword.message
                            : null}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
                        disabled={passwordLoading}
                      >
                        {passwordLoading ? "Updating..." : "Update Password"}
                      </button>
                    </div>
                  </section>
                </form>
              </>
            )}

            {activeTab === "Preferences" && (
              <div>
                <LearningPreferences />
                {/* Add Preferences content here */}
              </div>
            )}

            {activeTab === "Billing" && (
              <div>
                <Billing />
              </div>
            )}

            {activeTab === "Privacy" && (
              <div>
                <Support />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileSettings;
