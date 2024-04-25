'use client'
import React, { useState, useEffect } from 'react'
import { AlignJustify, X } from 'lucide-react';
import Menu from '@/components/Menu'
import Link from 'next/link'


export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const [navStyle, setNavStyle] = useState<boolean>(false)
  
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY > 20) {
        setNavStyle(true)
      } else (
        setNavStyle(false)
      )
    }

    window.addEventListener('scroll', changeColor)

    return () => { 
      window.removeEventListener('scroll', changeColor)
    }
  }, [])
     

  const handleMenu = () => {
    setMenuToggle(!menuToggle)
  }
    
  return (
    <header className={`flex justify-between items-center w-full px-4 md:px-12 fixed z-50 h-[100px] ${navStyle ? ' bg-white shadow-md easy-in-out duration-300' : ''}`}>
      <Link href='/'>
        <h3 className='text-[32px] font-semibold text-[#1e1e20]'>Konten<label className='text-[#1e1e20] font-medium'>Store</label></h3>
      </Link>
      <nav className='flex'>
        <div className='bg-[#081c15] p-2 bg-opacity-5 easy-in-out duration-300 hover:scale-110 lg:hidden' onClick={handleMenu} >
          <AlignJustify className='text-[#1e1e20] h-8 w-8 easy-in-out duration-300 hover:scale-110'/>
        </div>
        <Menu handleMenu={handleMenu} menuToggle={menuToggle} navStyle={navStyle}/>
      </nav>
    </header>
  ) 
}
