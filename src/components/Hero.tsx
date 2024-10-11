import Image from 'next/image'
import React from 'react';

const Hero = () => {
  return (
    <div className="content-end bg-[url('../assets/hero.jpg')] bg-no-repeat bg-blend-darken bg-black bg-opacity-60 mt-12 h-[675px] bg-cover text-white pb-32">
        <div className='pl-32'>
            <h1 className='text-5xl w-[720px]'>Handmade Accessories</h1>
            <p className='pt-7 w-[450px]'>
                At Djoux, we craft more than just accessories; we create art that 
                tells a story. Each handmade piece is a celebration of individuality, designed to inspire and empower.
            </p>
            <p className='pt-7'>See what we offer</p>
        </div>
    </div>
  )
}

export default Hero