'use client'
import React, { useEffect, useState } from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'
import Link from "next/link"
import { motion } from "framer-motion"


export default function Main() {
  const [position, setPosition] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 500) {
        setPosition(true)
      } else {
        setPosition(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)

    return () =>removeEventListener('scroll', handleScroll)

  },[])
  
  return (
    <motion.div 
      className='max-w-[950px] px-4 md:px-24 absolute '  
      initial={{ opacity: 0, y: 100}}
      transition={{
        duration: 0.5,
        delay: 0.1
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true
      }}
    >
      <h1 className='font-bold text-white mb-4'>Wynajme<br/><label className='text-[#e83622]'>Magazynów</label><br/><label>Warszawa</label></h1>
      <div>
        <p className='mb-6 text-white'>Wynajem magazynów dla firm i osób prywatnych w korzystnej cenie – oferujemy elastyczne i bezpieczne rozwiązania przechowywania, które spełnią oczekiwania zarówno biznesów, jak i indywidualnych klientów. 
        </p>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link 
            href='#offer'
            className="w-fit flex items-center gap-4 pl-6 bg-[#e83622] rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-white hover:bg-opacity-0 border border-[#e83622] hover:border hover:border-white"
          >
            <p>Sprawdź ceny</p>
            <IoArrowForwardCircle className='w-12 h-12 hover:text-white -rotate-45'/>
          </Link>
          <Link 
            href='#map'
            className="w-fit flex items-center gap-4 pl-6 border border-white rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-white hover:bg-[#e83622] hover:border-[#e83622]"
          >
            <p>Sprawdź Dojazd</p>
              <IoArrowForwardCircle className='w-12 h-12 -rotate-45' />
          </Link>
        </div>
      </div>
      <Link 
        href='/' 
        className={`${position ? "fixed" : "hidden"} -rotate-90 left-[-20px] z-40 w-fit flex items-center gap-4 pl-6 bg-[#e83622] rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-[#e83622] hover:bg-opacity-0 border border-[#e83622] hover:border hover:border-[#e83622]`}>
        <p>Home</p>
        <IoArrowForwardCircle className='w-12 h-12 hover:text-white'/>
      </Link>
    </motion.div>
  )
}
