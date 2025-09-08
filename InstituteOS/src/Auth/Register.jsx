import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    course: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Toggle Password Visibility
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate username
    const userExists = users.some((user) => user.username === formData.username);
    if (userExists) {
      setError("Username already registered!");
      return;
    }

    // Save new user
    const updatedUsers = [...users, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSuccess("🎉 Registration successful!");
    setFormData({
      role: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      course: "",
    });

    // Hide success message after 3 sec
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-indigo-300 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[500px] lg:w-[600px] transition-all duration-300 h-auto p-10 shadow-lg shadow-gray-400 bg-white rounded-2xl"
      >
        <h1 className="text-3xl text-center mb-5 text-indigo-700 font-bold">
          Registration
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
          placeholder="User Name"
          className="w-full border rounded p-2 outline-0 my-3 focus:outline-indigo-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
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
            placeholder="Password"
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

        {/* Confirm Password */}
        <div className="w-full my-3 flex items-center border rounded p-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full outline-none"
            required
          />
          <div
            className="cursor-pointer ml-2"
            onClick={toggleConfirmPassword}
          >
            {showConfirmPassword ? (
              <FaRegEye className="text-xl text-indigo-700" />
            ) : (
              <FaEyeSlash className="text-xl text-indigo-700" />
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full border rounded p-2 outline-0 my-3 focus:outline-indigo-500"
          required
        />

        {/* Course - dont show when thw user role is =="admin" */}
        {formData.role !== "admin" && (
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border rounded p-2 my-3 focus:outline-indigo-500"
            required
          >
            <option value="" disabled>
              Select Course
            </option>
            <option value="mern">MERN Stack</option>
            <option value="mean">MEAN Stack</option>
            <option value="java">Java Full Stack</option>
            <option value="data">Data Analyst</option>
          </select>
        )}

        {/* Error Message */}
        {error && <p className="text-red-600 text-center font-semibold">{error}</p>}

        {/* Success Message */}
        {success && <p className="text-green-600 text-center font-semibold">{success}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 p-3 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
