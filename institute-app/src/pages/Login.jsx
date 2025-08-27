import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded admin credentials
  const adminEmail = "sanjaydhanker87@gmail.com";
  const adminPassword = "mahi7781";

  const loginHandling = (e) => {
    e.preventDefault();

    // Admin login
    if (email === adminEmail && password === adminPassword) {
      alert("Welcome Admin!");
      navigate("/admindashboard");
      return;
    }

    // Student login
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert(`Welcome ${validUser.username}`);
      navigate("/studentdashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-96 rounded-2xl shadow-2xl hover:shadow-gray-500 p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginHandling}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
