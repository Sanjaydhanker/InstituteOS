import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Login from "./Auth/Login";
import WelcomePage from "./NotLogin/WelcomePage";
import Register from "./Auth/Register";
import About from "./NotLogin/About";
import Features from "./NotLogin/Features";
import Contact from "./NotLogin/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
