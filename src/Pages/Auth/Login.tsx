/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/images/signup/signup-pageimg.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Heading from "../../components/Tags/Heading/Heading";
import Button from "../../components/Tags/Button/Button";
import { useLoginUserMutation, useSocialLoginUserMutation } from "../../redux/Slices/authSlice";
import toast from "react-hot-toast";
import { setUser } from "../../redux/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import axios from "axios";



export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

 const [loginUser, { isLoading }] = useLoginUserMutation();
 const dispatch = useDispatch();
 
type LoginResponseData = {
  token: any;
  email: any;
  role: any;
  is_onboarded: number;
};

const onSubmit = async (data: any) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  try {
    const response = await loginUser(formData).unwrap();
    console.log("Logged in:", response);

    toast.success("Logged in successfully!");

    const { token, email, role, is_onboarded } =
      response.data as LoginResponseData;

    // Redux
    dispatch(setUser({ token, email, role, is_onboarded }));

    // LocalStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);
    localStorage.setItem("user", JSON.stringify(response.data));

    reset();
    if (is_onboarded === 0 && role === "student") {
      navigate("/student-on-boarding");
    } else if (is_onboarded === 0 && role === "tutor") {
      navigate("/onboarding"); // small spelling fix
    } else if (is_onboarded === 1) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  } catch (err: any) {
    // console.error("❌ Login failed:", err);

    // ✅ Check if it's an API response error with a message
    const customError =
      err?.data?.message || err?.error || "Login failed. Please try again.";

    toast.error(customError); // Show the backend error message
  }
 };
 

 const [socialLoginUser] = useSocialLoginUserMutation();

const handleGoogleLogin = useGoogleLogin({
  onSuccess: async tokenResponse => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const user = res.data;

      const formData = new FormData();
      formData.append("token", tokenResponse.access_token);
      formData.append("provider", "google");
      formData.append("username", user.name);
      formData.append("email", user.email);
      formData.append("avatar", user.picture);
      formData.append("role", "tutor");

      const response = await socialLoginUser(formData).unwrap();

      const { token, email, role, is_onboarded } = response.data;

      console.log(is_onboarded,"form login");

      dispatch(setUser({ token, email, role, is_onboarded }));
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userRole", role);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem(
        "is_onboarded",
        JSON.stringify(response.data.is_onboarded)
      );
    

      toast.success("Login Successful!");

      if (is_onboarded === 0 && role === "student") {
        navigate("/student-on-boarding");
      } else if (is_onboarded === 0 && role === "tutor") {
        navigate("/onbording");
      } else if (is_onboarded === 1) {
        navigate("/dashboard");
      } else {
        navigate("/")
      }
    } catch (err: any) {
      console.error("❌ Google Login Failed:", err);
      toast.error(err?.data?.message || "Google Login Failed");
    }
  },
  onError: () => toast.error("Google Login was cancelled or failed."),
});




  return (
    <div className="min-h-screen container w-auto flex items-center justify-center py-12 rounded-[12px]">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_45%]">
        {/* Image Section */}
        <div data-aos="fade-right" className="hidden xl:block">
          <img
            src={loginimg}
            alt="Login visual"
            className="rounded-l-[12px] object-cover h-full w-full"
          />
        </div>

        {/* Login Form */}
        <div className="p-8 border border-secondry-gray rounded-l-[12px] xl:rounded-l-[0px] rounded-r-[12px] shadow-md">
          <Heading
            Txt="Welcome Back"
            className="text-center text-[22px] xl:text-[32px] leading-[150%] font-bold text-primary-blue mb-4"
            Variant="h1"
          />
          <p className="text-center text-sm text-[var(--color-text-gray)] mb-6">
            Log in to continue learning
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
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-[var(--color-primary-gray)] font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                className="w-full px-4 py-[14px] border my-3 border-secondry-gray rounded-md focus:outline-none focus:ring-2 focus:border-[#9fa7ac]"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              className="w-full bg-roayl-blue border border-roayl-blue hover:border-secondry-gray hover:bg-white hover:text-roayl-blue py-[14px] transition duration-700 text-sm cursor-pointer text-white rounded-[4px]"
              type="submit"
              Txt={isLoading ? "Login..." : "Login"}
            />
          </form>

          {/* Forgot Password */}
          <div className="text-right text-sm mt-3">
            <Link to="/reset-password">
              <span className="text-primary-blue cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>

          {/* Create Account */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?
            <span
              onClick={() => navigate("/sign-up")}
              className="text-[14px] leading-[20px] cursor-pointer font-semibold bg-gradient-to-r from-[#DEA03C] to-[#F42626] bg-clip-text text-transparent ml-1"
            >
              Create one
            </span>
          </p>

          {/* OR Sign In with */}
          <div className="flex items-center justify-center my-6">
            <span className="border-b border-b-secondry-gray w-1/4"></span>
            <span className="text-sm text-[var(--color-primary-gray)] px-2">
              Or Sign in With
            </span>
            <span className="border-b border-b-secondry-gray w-1/4"></span>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleGoogleLogin()}
              className="border border-secondry-gray hover:bg-button-bg-blue hover:text-white hover:bg-primary-blue duration-700 cursor-pointer text-sm font-semibold px-4 py-[14px] rounded-md w-1/2 flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Google
            </button>

            <button className="border border-secondry-gray hover:bg-button-bg-blue hover:text-white hover:bg-primary-blue duration-700 cursor-pointer text-sm font-semibold px-4 py-[14px] rounded-md w-1/2 flex items-center justify-center gap-2">
              <FaFacebookF />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
