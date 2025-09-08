import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";

function LogOut() {

    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const handleLogout = () =>{
        localStorage.removeItem(currentUser);
        navigate("/login")
    }

  return (
    <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 p-2 rounded mt-6"
            >
              <FaSignOutAlt /> Logout
            </button>
  )
}

export default LogOut