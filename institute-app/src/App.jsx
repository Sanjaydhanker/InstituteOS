import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Studentdashboard from './pages/Studentdashboard'
import Admindashboard from './pages/Admindashboard'
import Studentsidebar from './components/Studentsidebar'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/studentdashboard' element={<Studentdashboard/>}></Route>
    <Route path='/admindashboard' element={<Admindashboard/>}></Route>
    <Route path='/sidebar' element={<Studentsidebar/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App