/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useResendOTPMutation, useVerifyOTPMutation } from "../../redux/Slices/authSlice";
import signupimg from "../../assets/images/signup/signup-pageimg.png";
import Heading from "../../components/Tags/Heading/Heading";
import Button from "../../components/Tags/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function OTPVerifyForm() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email and password from navigation state
  const { email, } = location.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  const [resendOTP, { isLoading: isResending }] = useResendOTPMutation();




  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", data.otp); 

    try {
      const response = await verifyOTP(formData).unwrap();
      console.log("✅ OTP Verified:", response);

      if (response.success) {
        toast("OTP Verified Successfully!");
        reset();

       
        navigate("/login"); 
      } else {
        toast("Invalid OTP. Please try again.");
      }
    } catch (err: any) {
      console.error("❌ OTP verification failed:", err);
      toast.success("OTP verification failed. Try again later.");
    } 
  };

  const handleResend = async () => {
    const formData = new FormData();
    formData.append("email", email); 

    try {
      await resendOTP(formData).unwrap();
      toast("OTP has been resent to your email.");
    } catch (error) {
      console.error("Resend OTP failed:", error);
      toast("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="min-h-screen container w-auto flex items-center justify-center py-12 rounded-[12px]">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_45%]">
        {/* Left Side Image */}
        <div data-aos="fade-right" className="hidden xl:block">
          <img
            src={signupimg}
            alt="OTP Image"
            className="rounded-l-[12px] object-cover h-full w-full"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 border border-secondry-gray rounded-l-[12px] xl:rounded-l-[0px] rounded-r-[12px] shadow-md flex flex-col  justify-center w-full">
          <Heading
            Txt="Verify Your Email"
            className="text-center text-xl lg:text-[22px] xl:text-[32px] leading-[150%] font-bold text-primary-blue mb-4"
            Variant="h1"
          />
          <p
            data-aos="fade-up"
            className="text-center text-sm text-[var(--color-text-gray)] mb-6"
          >
            Enter the OTP sent to your email
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* OTP */}
            <div data-aos="fade-up">
              <label className="text-sm text-[var(--color-primary-gray)] font-semibold mb-1">
                OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                {...register("otp", { required: "OTP is required" })}
                className="w-full px-4 py-[14px] border border-secondry-gray my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.otp && (
                <p className="text-sm text-red-600 mt-1">otp is required</p>
              )}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Didn’t receive an OTP?{" "}
              <span
                onClick={handleResend}
                className="text-[#52ABFF] cursor-pointer font-medium"
              >
                {isResending ? "Resending" :  "Resend OTP"}
              </span>
            </p>

            {/* Submit Button */}
            <Button
              type="submit"
              Txt={isLoading ? "Verifying OTP..." : "Verify OTP"}
              className="w-full bg-roayl-blue border border-roayl-blue hover:border-secondry-gray hover:bg-white hover:text-roayl-blue py-[14px] transition duration-700 text-sm cursor-pointer text-white rounded-[4px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
