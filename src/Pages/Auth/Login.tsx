/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import { Link,  } from "react-router-dom";
import { setToken } from "../../redux/slice/authSlice";
import { useLoginMutation } from "../../redux/features/auth/auth.api";
import { baseApi } from "../../redux/baseApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [login, { isLoading,}] = useLoginMutation();

  const handleLogin = async () => {
    const userData = { email, password };

    try {
      // Trigger the login mutation
      const response = await login(userData).unwrap();
      console.log(response?.user, "login");
      const { token, user } = response; // destructure directly

      // Save token & user to localStorage
      dispatch(setToken(token));
      localStorage.setItem("userData", JSON.stringify(user)); // must stringify objects
localStorage.setItem("authToken", token);
dispatch(baseApi.util.resetApiState()); // clears old cached data
window.location.replace("/dashboard");  

      toast.success("Login Successful");
    } catch (err: any) {
      toast.error(`Error: ${err?.message || "Login Failed"}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:text-primary-blue"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:text-primary-blue"
            />
          </div>

          <div className="mb-4">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue disabled:bg-gray-400"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </div>

          <Link  to="/sign-up">
            <div className="cursor-pointer text-right text-primary-blue mt-6 font-semibold hover:underline duration-500">Create Account</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
