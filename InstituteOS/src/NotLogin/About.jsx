import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-gradient-to-b from-indigo-200 to-green-300 min-h-screen w-full flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          About InstituteOS
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl text-center mb-6">
          InstituteOS is a cutting-edge platform designed to provide students 
          with high-quality education and hands-on training in modern technologies. 
          Our mission is to bridge the gap between learning and real-world application 
          by offering interactive courses, live projects, and expert mentorship.
        </p>

        <p className="text-gray-700 text-lg max-w-3xl text-center mb-6">
          We believe in fostering innovation, creativity, and problem-solving skills 
          among students. Our dedicated team of instructors ensures personalized 
          guidance and support throughout the learning journey.
        </p>

        <p className="text-gray-700 text-lg max-w-3xl text-center">
          Join InstituteOS today and take the first step towards building a 
          successful career in the technology world. Learn, practice, and grow 
          with us!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;
