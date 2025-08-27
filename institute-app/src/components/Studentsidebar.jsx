import React from 'react'
import { Link } from "react-router-dom";
import LogoutButton from '../pages/LogoutButton';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

function Studentsidebar() {
  return (
    <div className="flex flex-col h-screen bg-indigo-900 p-4 text-indigo-200 w-16 md:w-56 transition-all duration-400 group hover:w-56">
      {/* group → child elements ke hover effects control karne ke liye */}
      {/* Header */}
      <h2 className="text-2xl font-bold mb-8 text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100">
        Student Panel
      </h2>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li className="flex items-center space-x-2">
            <TbLayoutDashboardFilled className="text-xl" />
            <Link 
              to="/studentdashboard" 
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Dashboard
            </Link>
          </li>

          {/* Profile */}
          <li className="flex items-center space-x-2">
            <CgProfile className="text-xl" />
            <Link 
              to="/student-profile" 
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Profile
            </Link>
          </li>

          {/* My Courses */}
          <li className="flex items-center space-x-2">
            <MdOutlineLibraryBooks className="text-xl" />
            <Link 
              to="/my-courses" 
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              My Courses
            </Link>
          </li>

          {/* Purchase History */}
          <li className="flex items-center space-x-2">
            <HiOutlineShoppingCart className="text-xl" />
            <Link 
              to="/purchase-history" 
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Purchase History
            </Link>
          </li>

          {/* Settings */}
          <li className="flex items-center space-x-2">
            <FiSettings className="text-xl" />
            <Link 
              to="/settings" 
              className="hidden group-hover:block md:block hover:bg-indigo-700 rounded p-2 w-full"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="mt-auto ml-2">
        <LogoutButton />
      </div>
    </div>
  )
}

export default Studentsidebar;
