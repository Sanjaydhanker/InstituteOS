import { useNavigate } from "react-router-dom";
import React, { useEffect, useState }  from "react";

function Profile() {
const navigate = useNavigate();

const [user , setUser] = useState({
  username:"",
  dob:"",
  email:"",
  contactno:"",
  course:""
}
)
 useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  setUser(currentUser);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {user.username}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-indigo-600 font-semibold">
              {user.course || "B.Tech - Computer Science"}
            </p>
          </div>

          {/* Personal Info */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
              Personal Information
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold">Username:</span>  {user.username}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">DOB:</span> {user.dob}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Contact:</span> +91 {user.contactno}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button onClick={()=> navigate('/studentdashboard/edit-profile')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-md transition">
              Edit Profile
            </button>
            <button onClick={() => navigate("/studentdashboard/change-password")} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg shadow-md transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
