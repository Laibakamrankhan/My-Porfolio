import React from 'react'
import NavBar from './NavBar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-left lg:bg-[15%] bg-cover' 
    style={{backgroundSize:"20%"}}>
    <NavBar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
     <div className='hidden lg:block'></div>
     <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
            <p data-aos="flip-right">I Am</p>
            <p data-aos="flip-right" className='text-purple-500'>Laiba</p>
            <p data-aos="flip-right" className='text-purple-500'>Kamran</p>
        </div>
     </div>
    </div>
      
    </div>
  )
}

export default Hero
