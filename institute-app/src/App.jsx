import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Studentdashboard from "./components/Student/Studentdashboard";
import Admindashboard from "./components/Admin/Admindashboard";
import Studentsidebar from "./components/Student/Studentsidebar";
import Profile from "./components/Student/Profile";
import Mycourse from "./components/Student/Mycourse";
import PurchaseHistory from "./components/Student/PurchaseHistory";
import Settings from "./components/Student/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/studentdashboard" element={<Studentdashboard />}>
          <Route path="student-profile" element={<Profile />} />
          <Route path="my-courses" element={<Mycourse />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
