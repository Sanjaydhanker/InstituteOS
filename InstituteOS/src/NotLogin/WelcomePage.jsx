import React from "react";
import Navbar from "./Navbar";
import backgoundImage from "../assets/codingbg3.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MycourseList } from "../Controls/CourseControl";

function WelcomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-200 to-green-300 min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full mt-14 flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12">
        {/* Left Text */}
        <div className="lg:w-1/2 px-4">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to <span className="text-indigo-600">InstituteOS</span>
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            InstituteOS makes it easy to manage students, teachers, courses, and reports
            with a clean and powerful dashboard.
          </p>
          <Link
            to="/courses"
            className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Explore Courses
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            className="h-[350px] lg:h-[400px] w-full object-cover rounded-2xl shadow-lg"
            src={backgoundImage}
            alt="InstituteOS"
          />
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {MycourseList.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5"
            >
              <img
                className="w-full h-48 object-cover rounded-xl mb-4"
                src={course.image}
                alt={course.name}
              />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {course.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{course.about}</p>
              <Link
                to={`/courses/${course.name.toLowerCase()}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Show All Courses Button */}
        <div className="text-center mt-8">
          <Link
            to="/courses"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default WelcomePage;
