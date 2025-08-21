/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import signupimg from "../../assets/images/signup/signup-pageimg.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Heading from "../../components/Tags/Heading/Heading";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Tags/Button/Button";
import { useDispatch } from "react-redux";
import { addRole } from "../../redux/Slices/msgSlice";
import { useRegisterUserMutation } from "../../redux/Slices/authSlice";
import toast from "react-hot-toast";

export default function SignUp() {
  const [role, setRole] = useState<"student" | "tutor">("student");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit = async (data: any) => {
    dispatch(addRole(role));

    // FormData payload
    const formData = new FormData();
    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("agree_to_terms", "1");
    formData.append("role", role);

    try {
      const response = await registerUser(formData).unwrap();
      console.log("✅ Registered:", response);

      reset();

      navigate("/otp-verify", {
        state: { email: data.email, password: data.password },
      });
    } catch (error: any) {
      toast(`${(error.messages, "Registration Failed")}`);
    }
  };

  return (
    <div className="min-h-screen container w-auto  flex items-center justify-center py-12 rounded-[12px] ">
      <div className=" grid grid-cols-1 xl:grid-cols-[55%_45%] ">
        {/* Image Section */}
        <div data-aos="fade-right" className="hidden xl:block">
          <img
            src={signupimg}
            alt="Tutor working on laptop"
            className="rounded-l-[12px] object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 border border-secondry-gray rounded-l-[12px]  xl:rounded-l-[0px] rounded-r-[12px]  shadow-md">
          <Heading
            Txt="Create Your Account"
            className="text-center text-[22px] xl:text-[32px] leading-[150%] font-bold text-primary-blue mb-4"
            Variant="h1"
          />
          <p
            data-aos="fade-up"
            className="text-center text-sm text-[var(--color-text-gray)] mb-6"
          >
            Join Syntax Master today
          </p>

          <div
            data-aos="fade-up"
            className="flex justify-center gap-2 my-8 bg-[#F1F5F9] rounded-lg px-3 py-[6px] "
          >
            <button
              type="button"
              className={`w-full py-2 text-[16px] cursor-pointer hover:bg-button-bg-blue hover:text-primary-blue duration-700 font-semibold rounded-md ${
                role === "student"
                  ? "text-[var(--color-primary-gray)] bg-white"
                  : "text-[var(--color-primary-gray)] bg-[#F1F5F9]"
              }`}
              onClick={() => setRole("student")}
            >
              I&apos;m a Student
            </button>
            <button
              type="button"
              className={`w-full py-2 text-[16px] cursor-pointer hover:bg-button-bg-blue hover:text-primary-blue duration-700 font-semibold  rounded-md ${
                role === "tutor"
                  ? "text-[var(--color-primary-gray)] bg-white"
                  : "text-[var(--color-primary-gray)] bg-[#F1F5F9]"
              }`}
              onClick={() => setRole("tutor")}
            >
              I&apos;m a Tutor
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div data-aos="fade-up">
              <label
                htmlFor="text"
                className="text-sm text-[var(--color-primary-gray)] font-semibold leading-[142.857%] mb-3"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                {...register("fullName", { required: true })}
                className="w-full px-4 py-[14px] border border-secondry-gray my-3 rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 mt-1">
                  Full Name is required
                </p>
              )}
            </div>

            <div data-aos="fade-up">
              <label
                htmlFor="email"
                className="text-sm text-[var(--color-primary-gray)] font-semibold leading-[142.857%] mb-3"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">Email is required</p>
              )}
            </div>

            <div data-aos="fade-up">
              <label
                htmlFor="email"
                className="text-sm text-[var(--color-primary-gray)] font-semibold leading-[142.857%] mb-3"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true, minLength: 8 })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  Password must be at least 8 characters long
                </p>
              )}
            </div>

            <div data-aos="fade-up" className="flex items-start py-8">
              <input
                type="checkbox"
                {...register("terms", { required: true })}
                className="mr-2 mt-1 cursor-pointer"
              />
              <label className="text-sm text-gray-700">
                I agree to the
                <span className=" text-[14px] leading-[20px] font-semibold font-['Open_Sans'] bg-gradient-to-r from-[#DEA03C] to-[#F42626] bg-clip-text text-transparent cursor-pointer mx-1">
                  Terms of Service
                </span>
                and
                <span className=" text-[14px] leading-[20px] font-semibold font-['Open_Sans'] bg-gradient-to-r from-[#DEA03C] to-[#F42626] bg-clip-text text-transparent cursor-pointer mx-1">
                  Privacy Policy
                </span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-red-600 mt-1">
                You must agree before submitting.
              </p>
            )}
            <Button
              className="w-full  bg-roayl-blue border border-roayl-blue hover:border-secondry-gray hover:bg-white hover:text-roayl-blue py-[14px] transition duration-700 text-sm cursor-pointer text-white rounded-[4px] "
              type="submit"
              Txt={isLoading ? "Creating Account..." : "Create Account"}
            />
          </form>

          <p className="text-center text-sm mt-4 py-8">
            Already have an account?
            <Link
              to="/Login"
              className="text-[14px] leading-[20px] cursor-pointer font-semibold font-['Open_Sans'] bg-gradient-to-r from-[#DEA03C] to-[#F42626] bg-clip-text text-transparent ml-1"
            >
              Sign in
            </Link>
          </p>

          <div className="flex items-center justify-center my-4">
            <span className="border-b border-b-secondry-gray w-1/4"></span>
            <span className="text-sm text-[var(--color-primary-gray)] px-2">
              Or Sign up With
            </span>
            <span className="border-b border-b-secondry-gray w-1/4"></span>
          </div>

          <div className="flex gap-4 justify-center py-8">
            <button className="border border-secondry-gray hover:bg-primary-blue hover:text-white duration-700 cursor-pointer text-sm font-semibold px-4 py-[14px] rounded-md w-1/2 flex items-center justify-center gap-2">
              <FaGoogle />
              Google
            </button>
            <button className="border border-secondry-gray hover:bg-primary-blue hover:text-white duration-700 cursor-pointer text-sm font-semibold px-4 py-[14px] rounded-md w-1/2 flex items-center justify-center gap-2">
              <FaFacebookF />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
