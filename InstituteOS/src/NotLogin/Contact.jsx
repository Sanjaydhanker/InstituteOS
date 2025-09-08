import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-indigo-200 to-green-300 min-h-screen w-full">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="mb-6 text-gray-700 text-center max-w-md">
          Have questions or need more information about our courses? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-0"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-700">
          <p>Email: sanjaydhanker87@gmail.com</p>
          <p>Phone: +91 8791026344</p>
          <p>Address: Noida 63, Tech City, India</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
