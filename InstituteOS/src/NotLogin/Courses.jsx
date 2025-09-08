import React from "react";
import Navbar from "./Navbar";
import { MycourseList } from "../Controls/CourseControl";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Courses() {
  return (
    <div className="bg-linear-to-b from-indigo-200 to-green-300 h-screen w-full">
      <Navbar></Navbar>

      {/* Courses Section */}
      <div className="w-full bg-gray-100 py-16">
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
      </div>
      <Footer/>
    </div>
  );
}

export default Courses;
