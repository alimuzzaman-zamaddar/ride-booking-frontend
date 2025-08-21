/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import loginimg from "../../assets/images/signup/signup-pageimg.png";
import Heading from "../../components/Tags/Heading/Heading";
import Button from "../../components/Tags/Button/Button";
import { useResetPasswordMutation } from "../../redux/Slices/authSlice";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);

    try {
      const res = await resetPassword(formData).unwrap();
      toast.success(res.message || "✅ Password reset successfully!");

      reset();
      navigate("/login"); // Redirect to login
    } catch (err: any) {
      console.error("❌ Password reset failed:", err);
      const message = err?.data?.message || "Something went wrong!";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen container w-auto flex items-center justify-center py-12 rounded-[12px]">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_45%]">
        {/* Left Image */}
        <div data-aos="fade-right" className="hidden xl:block">
          <img
            src={loginimg}
            alt="Reset Password Visual"
            className="rounded-l-[12px] object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 border border-secondry-gray rounded-l-[12px] xl:rounded-l-[0px] rounded-r-[12px] shadow-md">
          <Heading
            Txt="Reset Your Password"
            className="text-center text-[22px] xl:text-[32px] leading-[150%] font-bold text-primary-blue mb-4"
            Variant="h1"
          />
          <p className="text-center text-sm text-[var(--color-text-gray)] mb-6">
            Enter your email and new password
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm text-[var(--color-primary-gray)] font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.email?.message && (
                <p className="text-sm text-red-600 mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="text-sm text-[var(--color-primary-gray)] font-semibold">
                New Password
              </label>
              <input
                type="password"
                placeholder="New Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-[var(--color-primary-gray)] font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("password_confirmation", {
                  validate: value =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.password_confirmation && (
                <p className="text-sm text-red-600 mt-1">
                  {typeof errors.password_confirmation?.message === "string"
                    ? errors.password_confirmation.message
                    : null}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              Txt={isLoading ? "Resetting..." : "Reset Password"}
              className="w-full bg-roayl-blue border border-roayl-blue hover:border-secondry-gray hover:bg-white hover:text-roayl-blue py-[14px] transition duration-700 text-sm cursor-pointer text-white rounded-[4px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
