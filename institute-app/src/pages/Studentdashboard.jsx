import React from 'react'
import Studentsidebar from '../components/Studentsidebar'

function Studentdashboard() {
  return (
    <>
    <div className='w-full bg-indigo-100 h-screen flex'>
        {/* Sidebar Start */}
        <div className='w-10 hover:w-20 h-screen bg-indigo-600 md:flex-1  xl:flex-1 sidebar'>
           <Studentsidebar/>  
        </div>
        <div className='flex-7 h-screen  bg-amber-200'>

        </div>

    </div>

    </>
  )
}

export default Studentdashboard