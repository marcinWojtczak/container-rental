import React from 'react'
import { X } from 'lucide-react';
import {  IoArrowForwardCircle } from 'react-icons/io5'
import Link from "next/link"
import { motion } from "framer-motion"

interface menuProps {
  menuToggle: boolean,
  navStyle: boolean
  setMenuToggle: (toggle: boolean) => void
}


const menu = [
  { 
    text: "Oferta",
    link: "#offer" 
  },
  { 
    text: "Galeria" ,
    link: "#gallery"
  },
  { 
    text: "Dojazd" ,
    link: "#map"
  },

]

export default function Menu({ setMenuToggle, menuToggle, navStyle }: menuProps) {
  
  return (
    <>
        <div 
          className={`text-[#1e1e20] absolute h-screen w-full p-4 gap-8 z-50 bg-[#1e1e20] top-0  ${menuToggle ? 'right-[-10000px]' : 'right-0'} tranistion-all duration-500 ease-in-out`}>
          <div 
            className='flex justify-between items-center'
          >
            <h3 className='text-white font-light'>KontenStore</h3>
            <X 
              onClick={() => setMenuToggle(!menuToggle)}
              className='w-12 h-12 easy-in-out duration-300 hover:scale-110 text-white'
            />
          </div>
          <ul className='flex flex-col items-center gap-10 h-full'>
            {menu.map((item, index) => (
              <li 
                key={index}
                className='flex items-center'
              >
                <h4><Link href={item.link} className='text-white lg:font-semibold easy-out duration-300  transition-transform hover:scale-125'>{item.text}</Link></h4>
              </li>
            ))}
            <Link href="#contact" download>
              <button className="w-fit flex items-center gap-4 pl-6 border border-white rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-white hover:bg-[#e83622] hover:border-[#e83622]"> 
                <p>pobierz Umowę</p>
                <IoArrowForwardCircle className='w-12 h-12 -rotate-45'/>
              </button>
            </Link>
          </ul>  
        </div>
        <div className='w-full hidden lg:block'>
        <ul className='flex items-center justify-between w-full gap-20'>
            {menu.map((item, index) => (
              <li 
                key={index}
                className='easy-in-out duration-300 hover:scale-110 flex items-center gap-1'
              >
                <Link
                  href={item.link}
                  className={` hover:text-[#e83622]  ${navStyle ? 'tracking-wider hover:font-medium font-semibold ' : 'text-white font-semibold tracking-wider  hover:font-medium'}`}
                >
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}
            <Link 
              href="#contact" 
              className={`flex items-center gap-4 pl-6 border rounded-full font-semibold ${!navStyle ? ' border-white text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-white hover:bg-[#e83622] hover:border-[#e83622]' : 'border-[#e83622] text-[#e83622] transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#e83622] hover:text-white hover:bg-[#e83622] hover:border-[#e83622]' } `}>
                <p>Kontakt</p>
                <IoArrowForwardCircle className='w-12 h-12 -rotate-45'/>
             
            </Link>
        </ul>  
      </div>
    </>
  )
}
