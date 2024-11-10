import React from 'react'
import { LuMenu } from "react-icons/lu";
const NavBar = () => {
  return (
    <div className='container pt-8 '>
      <div className='flex justify-between items-center'>
         <div className='text-xl font-medium '>
          Laiba Khan
         </div>
         <ul className=' flex justify-evenly gap-10 lg:gap-16 '>
            <li className='menuLink  '><a href="#hero">Home</a></li>
            <li className='menuLink  '><a href="#about">About</a></li>
            <li className='menuLink  '><a href="#projects">Projects</a></li>
            <li className='menuLink  '><a href="#skills">Skills</a></li>
            <li className='menuLink  '><a href="#contact">Contact</a></li>
         </ul>
         <LuMenu className='md:hidden' size={30} />
      </div>
    </div>
  )
}

export default NavBar
