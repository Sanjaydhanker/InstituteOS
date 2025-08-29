import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  // Hardcoded admin credentials
  const adminName = "sanjaydhanker87";
  const adminPassword = "mahi7781";

  const loginHandling = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!username || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Admin login check
    if (username === adminName && password === adminPassword) {
      alert("Welcome Admin!");
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ username, role: "admin" })
      );
      navigate("/admindashboard");
      return;
    }

    // Get all users from localStorage
    let users = JSON.parse(localStorage.getItem("users"));

    // If users is null or not an array, reset it
    if (!Array.isArray(users)) {
      users = [];
    }

    // Check if user exists
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      // Save current user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      alert(`Welcome ${validUser.username || validUser.email}`);
      navigate("/studentdashboard/student-profile");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-96 rounded-2xl shadow-2xl hover:shadow-gray-500 p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={loginHandling}>
          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="flex">
            <input
              type={showPassword ?    "password" : "text"}
              placeholder="Password"
              className="mb-4 w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           <button  onClick={() => setShowPassword(!showPassword)}  className="mb-4 p-2 border rounded bg-indigo-600  text-white">Show</button>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
