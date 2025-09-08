import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Login from "./Auth/Login";
import WelcomePage from "./NotLogin/WelcomePage";
import Register from "./Auth/Register";
import About from "./NotLogin/About";
import Contact from "./NotLogin/Contact";
import AdminDashboard from "./Admin/AdminDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import StudentDashboard from "./Student/StudentDashboard";
import Courses from "./NotLogin/Courses";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
