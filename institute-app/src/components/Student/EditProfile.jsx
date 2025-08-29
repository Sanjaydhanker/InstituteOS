import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contactno: "",
    dob: "",
    course: "",
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Get current user on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please login first!");
      navigate("/login");
    } else {
      setCurrentUser(user);
      setFormData({
        fullname: user.fullname,
        email: user.email,
        contactno: user.contactno,
        dob: user.dob,
        course: user.course,
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) return setError("No user found!");

    // Update users array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? { ...user, ...formData } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update current user
    const updatedCurrentUser = { ...currentUser, ...formData };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    setSuccess("Profile updated successfully!");

    // Redirect to login after 1.5 sec
    setTimeout(() => {
      navigate("/studentdashboard/student-profile");
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="contactno"
            placeholder="Contact Number"
            value={formData.contactno}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Error */}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Success */}
          {success && <p className="text-green-600 text-center">{success}</p>}

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
