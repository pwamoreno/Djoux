import Image from 'next/image'
import React from 'react'
import galleryOne from '../assets/image-1.jpg';
import galleryTwo from '../assets/image-2.jpg';
import galleryThree from '../assets/image-3.jpg';
import galleryFour from '../assets/image-4.jpg';
import galleryFive from '../assets/image-5.jpg';
import gallerySix from '../assets/image-6.jpg';
import gallerySeven from '../assets/image-7.jpg';
import galleryEight from '../assets/image-8.jpg';
import { PiGreaterThan } from "react-icons/pi";

const Gallery = () => {
  return (
    <div className='pt-32'>
      <h1 className='text-4xl text-center'>Gallery</h1>
      <div className='grid grid-cols-4 gap-4 text-center pt-8'>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryOne} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryTwo} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryThree} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryFour} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryFive} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={gallerySix} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={gallerySeven} alt='gallery-img'/>
        </div>
        <div className='h-[454px]'>
          <Image className='h-[454px] w-full object-cover' src={galleryEight} alt='gallery-img'/>
        </div>
      </div>
      <div className='flex justify-center pt-8'>
        <p className=''>See More</p>
        <PiGreaterThan className='place-self-center'/>
      </div>
    </div>
  )
}

export default Gallery