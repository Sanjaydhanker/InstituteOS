import React from 'react'
import Studentsidebar from './Studentsidebar'
import { Outlet } from 'react-router-dom'

function Studentdashboard() {
  return (
    <>
    <div className='w-full bg-indigo-100 h-screen flex'>
        {/* Sidebar Start */}
       
           <Studentsidebar/>  
        
        <div className='flex-7 h-screen  bg-amber-200'>

        <Outlet></Outlet>

        </div>

    </div>

    </>
  )
}

export default Studentdashboard