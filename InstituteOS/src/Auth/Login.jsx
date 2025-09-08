import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Toggle Password Visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user matching username, password & role
    const validUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password &&
        user.role === formData.role
    );

    if (!validUser) {
      setError("❌ Invalid credentials or wrong role selected!");
      return;
    }

    // Save current user in localStorage
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    setSuccess("✅ Login Successful!");

    // Redirect based on role after 1.5 sec
    setTimeout(() => {
      if (validUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (validUser.role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-indigo-300 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[500px] lg:w-[600px] transition-all duration-300 h-auto p-10 shadow-lg shadow-gray-400 bg-white rounded-2xl"
      >
        <h1 className="text-3xl text-center mb-5 text-indigo-700 font-bold">
          Login
        </h1>

        {/* Select Role */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded p-2 my-3 focus:outline-indigo-500"
          required
        >
          <option value="" disabled>
            Select Your Role
          </option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="user">User</option>
        </select>

        {/* Username */}
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter Username"
          className="w-full border rounded p-2 outline-0 my-3 focus:outline-indigo-500"
          required
        />

        {/* Password */}
        <div className="w-full my-3 flex items-center border rounded p-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full outline-none"
            required
          />
          <div className="cursor-pointer ml-2" onClick={togglePassword}>
            {showPassword ? (
              <FaRegEye className="text-xl text-indigo-700" />
            ) : (
              <FaEyeSlash className="text-xl text-indigo-700" />
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center font-semibold">{error}</p>}

        {/* Success Message */}
        {success && <p className="text-green-600 text-center font-semibold">{success}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 p-3 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
