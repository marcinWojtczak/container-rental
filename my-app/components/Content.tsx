'use client'
import React from 'react'
import CardsData from '@/components/CardsData'
import { motion } from 'framer-motion'
import {  IoDocumentTextOutline } from 'react-icons/io5'

export default function Content() {
 
  return (
    <div className='flex w-screen flex-col items-center text-center py-10 md:py-20 bg-slate-100' id="offer">
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
        className='max-w-[450px] md:max-w-[850px] text-center px-3 md:px-8 my-14 md:my-20 flex flex-col items-center'
      >
        <h2 className='text-[#1e1e20] font-semibold mb-6 border-b-2 w-fit  border-[#e83622]'>Oferta</h2>
        <p className='text-[#1e1e20]'>Oferujemy wynajem elastycznych i bezpiecznych magazynów zrobionych z kontenerów dla firm i osób prywatnych. Zapewniamy korzystne ceny na przechowywanie Twoich towarów i przedmiotów.</p>
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
        className='flex flex-col gap-12 items-center w-full'>
        <CardsData />
        <a
              href="/UmowaNajmu.pdf" 
              download
              className="w-fit flex items-center gap-4 px-12 py-2 bg-[#1e1e20] rounded-full text-[#e83622] transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-[#1e1e20] hover:bg-opacity-0 border border-[#1e1e20] hover:border hover:border-[#1e1e20]"
            >
                <p className='font-semibold'>Pobierz Umowę</p>
                <IoDocumentTextOutline className='w-12 h-12'/>
          </a>
      </motion.div>
    </div>
  ) 
}
