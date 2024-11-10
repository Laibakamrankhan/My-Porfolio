import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8 '>
        <h2 className='text-5xl '>Get in Touch</h2>
        <p className='text-gray-500 text-[18px] pt-2'>
            Drop Me a line , Give me a call , or send me a message by submitting the form.
        </p>
        <div className='flex gap-3 items-center'>
        <IoIosMail size={30}  /> laibakamran356@gmail.com
        </div>
        <div className='flex gap-3 items-center'>
        <BsFillTelephoneFill size={30}  /> 036677727
        </div>
        </div>
        <div className='space-y-8'>
         <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name:</label>
            <input type="text" className='h-[40px] bg-transparent border border-[#a855f7]' id="name"/>
         </div>
         <div className='flex flex-col gap-1'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" className='h-[40px] bg-transparent border border-[#a855f7]' id="email"/>
         </div>
         <div className='flex flex-col gap-1'>
            <label htmlFor="message">Message:</label>
            <textarea className=' bg-transparent border border-[#a855f7]' id="message" rows={8}></textarea>
         </div>
         <button className='bg-[#a855f7] p-2 px-6 '>Send</button>
         
         
        </div>


        </div>
      
    </div>
  )
}

export default Contact
