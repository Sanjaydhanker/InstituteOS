import React from 'react'
import { Link } from "react-router-dom";
import LogoutButton from '../pages/LogoutButton';
import { TbLayoutDashboardFilled } from "react-icons/tb";

function Studentsidebar() {
  return (
    <>
     <h2 className="text-2xl font-bold mb-8">Student Panel</h2>
        
        <nav className="flex-1">
          <ul>
            <li className="mb-4 hover:bg-indigo-700 rounded px-3 py-2 flex">
              <Link to="/studentdashboard" className='hidden md:block' >Dashboard</Link>
              <TbLayoutDashboardFilled className='md:hidden' />
            </li>
            <li className="mb-4 hover:bg-indigo-700 rounded px-3 py-2">
              <Link to="/student-profile">Profile</Link>
            </li>
            <li className="mb-4 hover:bg-indigo-700 rounded px-3 py-2">
              <Link to="/my-courses">My Courses</Link>
            </li>
            <li className="mb-4 hover:bg-indigo-700 rounded px-3 py-2">
              <Link to="/purchase-history">Purchase History</Link>
            </li>
            <li className="mb-4 hover:bg-indigo-700 rounded px-3 py-2">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto">
          <LogoutButton />
        </div>
        </>
  )
}

export default Studentsidebar