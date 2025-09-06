import React from "react";
import Navbar from "./Navbar";
import backgoundImage from "../assets/codingbg3.jpg";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="bg-linear-to-b from-indigo-200 to-green-300 h-auto w-full">
      <Navbar></Navbar>

      <div className="w-full h-auto mt-14  flex justify-between p-4">
        <div className="px-14 pt-10">
          <h1 className="text-4xl font-bold">
            "Welcome to <span className="text-indigo-600">InstituteOS</span>"
          </h1>
          <p className="text-xl my-4">
            InstituteOS makes it easy to handle students, teachers, courses, and
            reports with a clean and powerful dashboard.
          </p>
          <Link
            to=""
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded " 
          >
            Explore Courses
          </Link>
        </div>
        <div>
          <img
            className="h-[400px] w-full rounded-r-4xl"
            src={backgoundImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
