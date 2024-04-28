'use client'
import React from 'react'
import CardsData from '@/components/CardsData'
import { motion } from 'framer-motion'


export default function Content() {
 
  return (
    <div className='flex flex-col items-center text-center md:py-20 bg-slate-100' id="offer">
      <motion.div 
        
         initial={{ opacity: 0, y: "100%"}}
         transition={{
           duration: 0.5,
           delay: 0.1
         }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{
          once: true
        }}
        className='max-w-[450px] md:max-w-[850px] text-center px-3 md:px-8 my-14 md:my-20 flex flex-col items-center'
      >
        <h2 className='text-[#1e1e20] font-semibold mb-6 border-b-2 w-fit  border-[#e83622]'>Oferta</h2>
        <p className='text-[#1e1e20]'>Oferujemy wynajem elastycznych i bezpiecznych magazynów zrobionych z kontenerów dla firm i osób prywatnych. Zapewniamy korzystne ceny na przechowywanie Twoich towarów i przedmiotów.</p>
      </motion.div>
      <motion.div 
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.1
        }}
        viewport={{
          once: true
        }}
        className='flex items-center xl:items-end gap-12 justify-center w-full'>
        <CardsData />
      </motion.div>
    </div>
  ) 
}
