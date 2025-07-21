import React from 'react'
import heroImg from "../assets/hero.webp"

const Hero = () => {
  return (
   <section className='max-w-7xl mx-auto border-b-2'>
        <div className='flex flex-col items-center my-20 '>
            <h1 className='text-6xl uppercase font-bold lg:text-[10rem] p-2'>
                SENIUS
            </h1>
            <p className='lg:mt-6 text-sm mb-4 font-medium tracking-tighter '>
                Re-imagine Your Space with Expert Renovation Services
            </p>
            <img src={heroImg} alt="hero-image" className='w-full object-cover rounded-2xl p-2 h-[65vh]' />
        </div>
   </section>
  )
}

export default Hero