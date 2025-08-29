import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    contactno: "",
    course: ""
  });

  const [showPassword ,setShowPassword] = useState(true);

  const signupHandling = (e) => {
    e.preventDefault();

    // Validation: All fields required
    if (
      !input.username ||
      !input.email ||
      !input.password ||
      !input.dob ||
      !input.contactno ||
      !input.course
    ) {
      alert("Please fill all the fields!");
      return;
    }

    // Get previous users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("users"));

    // If no users, set empty array
    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    // Check if user already exists
    const userExists = existingUsers.find(
      (user) => user.email.toLowerCase() === input.email.toLowerCase()
    );

    if (userExists) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    // Save new user
    const updatedUsers = [...existingUsers, input];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-[450px] rounded-2xl shadow-2xl hover:shadow-gray-500 p-10 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>

        <form onSubmit={signupHandling}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="mb-4 w-full p-2 border rounded"
            value={input.username}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
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
            required
          />
           <div className="flex">
          <input
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            className="mb-4 w-full p-2 border rounded"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />
          <button  onClick={() => setShowPassword(!showPassword)}  className="mb-4 p-2 border rounded bg-indigo-600  text-white">Show</button>
          </div>

          <input
            name="dob"
            type="date"
            className="mb-4 w-full p-2 border rounded"
            value={input.dob}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />

          <input
            name="contactno"
            type="text"
            placeholder="Contact Number"
            className="mb-4 w-full p-2 border rounded"
            value={input.contactno}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />

          <input
            name="course"
            type="text"
            placeholder="Ex: B.Tech, MCA, BCA"
            className="mb-4 w-full p-2 border rounded"
            value={input.course}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
