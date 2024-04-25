'use client'
import React, { useState } from 'react'
import PriceData from '@/components/PriceData'
import SecurityData from '@/components/SecurityData'
import MeasureData from '@/components/MeasureData'
import { motion } from 'framer-motion'


export default function Content() {
 
  return (
    <div className='flex flex-col xl:flex-row mt-[200px] px-4 md:px-24 bg-[#1e1e20] pb-20 md:pb-40 md:pt-20' id="offer">
      <motion.div 
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.1
        }}
        className='flex flex-col mt-20 gap-10 max-w-[950px]'
      >
        <h2 className='text-white font-semibold'>Oferta</h2>
        <p className='text-white md:ml-28'>Oferujemy wynajem elastycznych i bezpiecznych magazynów zrobionych z kontenerów dla firm i osób prywatnych. Zapewniamy korzystne ceny na przechowywanie Twoich towarów i przedmiotów </p>
      </motion.div>
      <motion.div 
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.1
        }}
        className='flex flex-col items-center xl:items-end gap-12 justify-center mt-20 w-full'>
        <PriceData />
        <SecurityData />
        <MeasureData />
      </motion.div>
      
    </div>
  ) 
}
