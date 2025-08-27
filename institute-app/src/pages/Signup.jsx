import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    dob:"",
    contactNo:""
  });

  const signupHandling = (e) => {
    e.preventDefault();

    // Get previous users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = existingUsers.find((user) => user.email === input.email);

    if (userExists) {
      alert("User already exists! Please login.");
      return;
    }

    // Add new user
    const updatedUsers = [...existingUsers, input];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-120 rounded-2xl shadow-2xl hover:shadow-gray-500 p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="mb-4 w-full p-2 border rounded"
          value={input.username}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border rounded"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 w-full  p-2 border rounded"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <input
          name="dob"
          type="date"
          placeholder="date"
          className="mb-4 w-full p-2 border rounded"
          value={input.dob}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <input
          name="contactNo"
          type="text"
          placeholder="Contact No"
          className="mb-4 w-full p-2 border rounded"
          value={input.contactNo}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />

        <button
          onClick={signupHandling}
          className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
