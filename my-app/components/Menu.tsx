import React from 'react'
import { X } from 'lucide-react';
import {  IoArrowForwardCircle } from 'react-icons/io5'
import Link from "next/link"
// import UmowaNajmu from '@/public/'

interface menuProps {
  handleMenu: () =>  void,
  menuToggle: boolean,
  navStyle: boolean
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

export default function Menu({ handleMenu, menuToggle, navStyle }: menuProps) {
  return (
    <>
      <div className={`fixed inset-0 lg:hidden translate-x-full transition-all duration-300 ease-in-out' ${menuToggle ? 'translate-x-0 transition-0 duration-300 ease-in-out' : 'translate-x-full'} `}>
        <div className='text-[#1e1e20] absolute top-0 right-0 h-screen w-full p-4 gap-8 z-100 bg-[#1e1e20]'>
          <div 
            onClick={handleMenu}
            className='flex justify-between items-center bg-opacity-10 transition-transform easy-in-out duration-300 hover:scale-110 mb-20'
          >
            <h3 className='text-white font-light'>KontenStore</h3>
            <X className='w-12 h-12 easy-in-out duration-300 hover:scale-110 text-white'/>
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
                  className={` ${navStyle ? ' font-normal tracking-wider hover:font-medium ' : 'text-[#1e1e20]  hover:font-medium'}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <Link href="#contact">
                <button className="flex items-center gap-4 pl-6 bg-[#e83622] rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-[#e83622] hover:bg-opacity-0 border hover:border-[#e83622] hover:bg-white">
                  <p>Kontakt</p>
                <IoArrowForwardCircle className='w-12 h-12 hover:text-[#1e1e20] -rotate-45'/>
              </button>
            </Link>
        </ul>  
      </div>
    </>
  )
}
