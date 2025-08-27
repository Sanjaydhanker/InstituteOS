import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../pages/LogoutButton";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa"; // Student Panel Icon

function Studentsidebar() {
  return (
    <div className="flex flex-col h-screen bg-indigo-900 p-4 text-indigo-200 w-16 md:w-56 transition-all duration-400 group hover:w-56">
      {/* Header */}
   <div className="flex items-center space-x-3 h-12">
  {/* Student Icon */}
  <FaUserGraduate className="text-2xl flex-shrink-0 text-indigo-100" />

  {/* Student Panel Text */}
  <h2 className="text-xl font-bold text-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100">
    Student Panel
  </h2>
</div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li className="flex items-center space-x-3 h-12">
            <TbLayoutDashboardFilled className="text-xl" />
            <Link
              to="/studentdashboard"
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Dashboard
            </Link>
          </li>

          {/* Profile */}
          <li className="flex items-center space-x-3 h-12">
            <CgProfile className="text-xl" />
            <Link
              to="student-profile"
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Profile
            </Link>
          </li>

          {/* My Courses */}
          <li className="flex items-center space-x-3 h-12">
            <MdOutlineLibraryBooks className="text-xl" />
            <Link
              to="my-courses"
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              My Courses
            </Link>
          </li>

          {/* Purchase History */}
          <li className="flex items-center space-x-3 h-12">
            <HiOutlineShoppingCart className="text-xl" />
            <Link
              to="purchase-history"
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Purchase History
            </Link>
          </li>

          {/* Settings */}
          <li className="flex items-center space-x-3 h-12">
            <FiSettings className="text-xl" />
            <Link
              to="settings"
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="mt-auto ml-2 mb-4">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Studentsidebar;
