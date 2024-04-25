'use client'
import React, { useEffect, useState } from 'react'
import Slider from '@/components/Slider'
import { motion } from 'framer-motion'

export default function Gallery() {
  const [screenSize, setScreenSize] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 1380) {
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
      <div className='flex flex-col px-4 md:px-24 pb-20 md:pb-40 md:pt-20' id="gallery">
        <motion.div 
           initial={{ x: '-100%', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{
             type: "tween",
             duration: 0.7,
             delay: 0.1
           }}
          className='flex flex-col my-20 gap-10 max-w-[950px]'
        >
          <h2 className="text-[#1e1e20] font-semibold">Galeria</h2>
          <p className='text-[#1e1e20] md:ml-28'>Przestronne i bezpieczne magazyn w kontenerze morskim – idealne rozwiązanie dla Twoich potrzeb przechowywania.</p>
        </motion.div>
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.7,
            delay: 0.1
          }}
          className='w-full'
        >
          <Slider />
        </motion.div>
      </div>
  </>
  )
}
