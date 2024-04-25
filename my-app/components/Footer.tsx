'use client'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="pt-10 md:pt-20 px-4 md:px-24 bg-white w-full text-[#1e1e20]" id='contact'>
      <div className='flex flex-col md:flex-row gap-8 items-center md:justify-between w-full border-b border-[#1e1e20] mb-5'>
        <motion.h4
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.7,
            delay: 0.1
          }}
        >
          KontenStore
        </motion.h4>
        <motion.div 
           initial={{ x: '100%', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{
             type: "tween",
             duration: 0.7,
             delay: 0.1
           }}
          className='flex flex-col gap-10'
        >
          <div>
            <p className='mb-2 font-semibold'>Kontakt:</p>
            <div className='flex items-center gap-4 md:ml-10'>
              <FaPhoneAlt className='w-5 h-5 text-[#e83622]'/>
              <div>
                <p>531 787 144,</p>
                <p>502 186 636</p>        
              </div>
            </div>
          </div>
          <div className='mb-10 md:mb-20'>
            <p className='mb-2 font-semibold'>Adres:</p>
            <div className='flex items-center gap-4 md:ml-10'>
              <FaMapMarkerAlt className='w-5 h-5 text-[#e83622]'/>
              <div>
                <p>al. Jerozolimskie 337A</p>
                <p>05-816 Reguły</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <h6 className='flex justify-center mb-5'>© 2024 KonetnStore All rights reserved.</h6>
    </footer>
  )
}
