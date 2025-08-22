import { useState } from "react";
import { useRegisterMutation } from "../../redux/features/auth/auth.api"; // Ensure correct import
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");
    const navigate = useNavigate();

  // Register mutation from your api slice
  const [register, { isLoading, error }] = useRegisterMutation();

  // Handle form submission
  const handleRegister = async () => {
    try {
      const userData = { email, password, role };
      await register(userData).unwrap();
      console.log(Response, "regiser");
      toast.success("Registration successful");
            navigate("/login");

      // Optionally: Navigate or redirect user after successful registration
      // navigate("/success-page");
    } catch (err) {
      console.error("Registration error", err);
      toast.error(`Error: ${error || "Registration Failed"}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        {/* Form Section */}
        <form>
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
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:text-primary-blue"
            >
              <option value="rider">Rider</option>
              <option value="driver">Driver</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <button
              type="button"
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue disabled:bg-gray-400"
            >
              {isLoading ? "Creating Account..." : "Register"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-right">
          <Link
            to="/login"
            className="text-primary-blue "
          >
            Already have an account?{" "}
            <span className="ml-1 text-green-500 font-semibold hover:underline  transition duration-300">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
