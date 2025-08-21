/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useVerifyEmailMutation } from "../../redux/Slices/authSlice";
import loginimg from "../../assets/images/signup/signup-pageimg.png";
import Heading from "../../components/Tags/Heading/Heading";
import Button from "../../components/Tags/Button/Button";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("email", data.email);

    try {
      const res = await verifyEmail(formData).unwrap();
     console.log("✅ Verified:", res);
      
      navigate("/otp-verify", {
        state: { email: data.email, password: data.password },
      });
      toast.success(res.message || "Email is verified");
      reset();
    } catch (err: any) {
      console.error("❌ Error verifying email:", err);
      const message = err?.data?.message || "Something went wrong.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen container w-auto flex items-center justify-center py-12 rounded-[12px]">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_45%]">
        {/* Left Image Section */}
        <div data-aos="fade-right" className="hidden xl:block">
          <img
            src={loginimg}
            alt="Visual"
            className="rounded-l-[12px] object-cover h-full w-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="p-8 border border-secondry-gray rounded-l-[12px] xl:rounded-l-[0px] rounded-r-[12px] shadow-md">
          <Heading
            Txt="Verify Your Email"
            className="text-center text-[22px] xl:text-[32px] leading-[150%] font-bold text-primary-blue mb-4"
            Variant="h1"
          />
          <p className="text-center text-sm text-[var(--color-text-gray)] mb-6">
            Please verify your email to continue.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
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
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">Email is required</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              Txt={isLoading ? "Verifying..." : "Verify Email"}
              className="w-full bg-roayl-blue border border-roayl-blue hover:border-secondry-gray hover:bg-white hover:text-roayl-blue py-[14px] transition duration-700 text-sm cursor-pointer text-white rounded-[4px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
