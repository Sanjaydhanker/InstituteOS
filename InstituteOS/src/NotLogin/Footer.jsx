import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook ,FaGithubSquare ,FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-full h-auto bg-indigo-200 p-10  flex justify-around'>
        <div>
            <h1 className='text-3xl font-bold text-indigo-800 my-2'>Links</h1>
            <ul className=''>
                <li>
                    <Link className='hover:text-indigo-700' to="/" >Home</Link>
                </li>
                <li>
                    <Link className='hover:text-indigo-700' to="/courses" >Courses</Link>
                </li>
                <li>
                    <Link className='hover:text-indigo-700' to="/about" >About</Link>
                </li>
                <li>
                    <Link className='hover:text-indigo-700' to="/contact" >Contact</Link>
                </li>
                
            </ul>
        </div>
        <div>
            <h1 className='text-3xl font-bold text-indigo-800 my-2'>Other Links</h1>
            <ul>
                <li className='flex items-center text-2xl gap-2'>
                    <FaSquareInstagram className='text-red-600' />
                    <Link className='hover:text-indigo-700' to="https://www.instagram.com/#" target='__blank'>Instagram</Link>
                </li>
                <li className='flex items-center text-2xl gap-2'>
                    <FaFacebook className='text-blue-600' />
                    <Link className='hover:text-indigo-700' to="https://www.facebook.com//#" target='__blank'>Facebook</Link>
                </li>
                <li className='flex items-center text-2xl gap-2'>
                    <FaLinkedin className='text-blue-600' />
                    <Link className='hover:text-indigo-700' to="https://in.linkedin.com/" target='__blank'>Linkedin</Link>
                </li>
                <li className='flex items-center text-2xl gap-2'>
                    <FaGithubSquare  className='text-black' />
                    <Link className='hover:text-indigo-700' to="https://github.com/" target='__blank'>GithubSquare </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer