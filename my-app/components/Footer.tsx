import { FaMapMarkerAlt } from 'react-icons/fa';
import { MotionH4 } from '@/components/MotionDiv'
import React from 'react'
import { Monoton } from 'next/font/google'
import Contact from '@/components/Contact'

const monoton = Monoton({
  weight: [ '400'],
  subsets: ['latin'],
  variable: '--font-monoton'
})

export default function Footer() {
  return (
    <footer className=" bg-white w-screen text-[#1e1e20]" id='contact'>
      <div className='pt-10 md:pt-20 px-4 md:px-24 flex flex-col md:flex-row gap-8 items-center md:justify-between w-full border-b border-[#1e1e20] mb-5'>
        <MotionH4
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={`${monoton.variable} text-[#e83622] font-monoton`}
        >
          KontenStore
        </MotionH4>
        <MotionH4 
           initial={{ x: '-100%', opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
           viewport={{ once: true }}
          className='flex flex-col gap-10'
        >
          <div className='mb-10 md:mb-20'>
            <p className='mb-2 font-semibold'>Kontakt:</p>
            <Contact />
            <p className='mb-2 font-semibold'>Adres:</p>
            <div className='flex items-center gap-4 md:ml-10'>
              <FaMapMarkerAlt className='w-5 h-5 text-[#e83622]'/>
              <div>
                <p>al. Jerozolimskie 337A</p>
                <p>05-816 Reguły</p>
              </div>
            </div>
          </div>
        </MotionH4>
      </div>
      <h6 className='flex justify-center mb-5'>© 2024 KonetnStore All rights reserved.</h6>
    </footer>
  )
}
