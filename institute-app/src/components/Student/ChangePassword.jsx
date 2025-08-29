import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  // Get current user from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!loggedInUser) {
      alert("Please login first!");
      navigate("/login");
    } else {
      setCurrentUser(loggedInUser);
    }
  }, [navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      setError("No user found! Please login again.");
      return;
    }

    // Validate old password
    if (formData.oldPassword !== currentUser.password) {
      setError("Old password is incorrect!");
      return;
    }

    // Validate new password & confirm password
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password & confirm password do not match!");
      return;
    }

    // Get all users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Update current user's password in users array
    const updatedUsers = users.map((user) => {
      if (user.email === currentUser.email) {
        return { ...user, password: formData.newPassword };
      }
      return user;
    });

    // Save updated users back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update currentUser password
    const updatedCurrentUser = {
      ...currentUser,
      password: formData.newPassword,
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    setSuccess("Password changed successfully!");
    setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });

    // Redirect to login after 1.5 sec
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type={showPassword ? "password" : "text"}
            name="oldPassword"
            placeholder="Old Password"
            value={formData.oldPassword}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          <input
            type={showPassword ? "password" : "text"}
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          <input
            type={showPassword ? "password" : "text"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-600 text-center">{success}</p>}

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
