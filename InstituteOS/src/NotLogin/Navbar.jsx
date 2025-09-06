import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThree ,IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev =>  !prev);
  };

  return (
    <>
      <nav className="w-full px-4 md:px-10 mx-auto min-h-14 bg-gray-100 fixed top-0 left-0 z-50 flex justify-between items-center shadow-md transition-all duration-300">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-800 hover:cursor-pointer hover:text-indigo-700">
          <h1>Institute OS</h1>
        </div>

        {/* Menu */}
        <div
          className={`absolute md:static bg-gray-100 md:min-h-fit min-h-[40vh] left-0 
          ${menuOpen ? "top-14" : "top-[-100vh]"} 
          w-full md:w-auto flex items-center px-4 md:px-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-[4vw]">
            <li>
              <Link className="hover:text-indigo-600" to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-600" to="/features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-600" to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-600" to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons + Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            className="rounded bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="rounded bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700"
            to="/register"
          >
            SignUp
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <IoClose className="text-3xl cursor-pointer" />
            ) : (
              <IoReorderThree className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
