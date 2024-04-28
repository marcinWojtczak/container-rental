'use client'
import React, { useEffect, useState, ReactNode } from 'react'
import { motion,   } from 'framer-motion'
import Slider from '@/components/Slider'
import image1 from '@/public/kontener4.jpeg'
import image2 from '@/public/kontener3.jpeg'
import image3 from '@/public/kontener2.jpeg'
import image4 from '@/public/magazyn-lrg.jpg'
import Image from "next/image"



export default function Gallery() {
  const [screenSize, setScreenSize] = useState<boolean>(false)


  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 980) {
        setScreenSize(true)
      } else {
        setScreenSize(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [screenSize])

 

  return (
    <>
      <div className='flex flex-col items-center text-center md:pt-20 pb-20 md:pb-40' id="gallery">
        <motion.div 
           initial={{ opacity: 0, y: 100}}
           transition={{
             duration: 0.5,
             delay: 0.1
           }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{
            once: true
          }}
           className='max-w-[850px] text-center px-3 md:px-8 my-14 md:my-20 flex flex-col items-center'
        >
          <h2 className='text-[#1e1e20] font-semibold mb-6 border-b-2 w-fit border-[#e83622]'>Galeria</h2>
          <p className='text-[#1e1e20]'>Przestronne i bezpieczne magazyn w kontenerze morskim - idealne rozwiązanie dla Twoich potrzeb przechowywania.</p>
        </motion.div>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.1
          }}
          viewport={{
            once: true
          }}
          className='flex items-center xl:items-end gap-12 justify-center w-full px-3 md:px-8'
        >
          {!screenSize ? (
            <div className='grid grid-cols-2 grid-rows-5 gap-4 lg:gap-8 w-[1250px] h-[80vh]'>
            <div className='relative col-start-1 col-end-2 row-span-2 hover:opacity-85 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image 
                alt='container image'
                src={image1}
                fill
                sizes="100vw"
                style={{ objectFit: "cover"}}
              />
            </div>
            <div className='relative w-full h-full col-start-2 col-end-3 row-span-3 hover:opacity-85 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image 
                alt='container image'
                src={image2}
                fill
                sizes="100vw"
                style={{ objectFit: "cover"}}
              />
            </div>
            <div className='relative w-full h-full col-start-1 row-start-3 row-end-6 hover:opacity-85 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image 
                alt='container image'
                src={image3}
                fill
                sizes="100vw"
                style={{ objectFit: "cover"}}
              />
            </div>
            <div className='relative w-full h-full col-start-2 row-start-4 row-end-6 hover:opacity-85 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image 
                alt='container image'
                src={image4}
                fill
                sizes="100vw"
                style={{ objectFit: "cover"}}
              />
            </div>
          </div>
          ) : (
            <Slider />
          )}
        </motion.div>
      </div>
  </>
  )
}
