'use client'
import React, { useState, useEffect } from 'react'
import { AlignJustify } from 'lucide-react';
import Menu from '@/components/Menu'
import Link from 'next/link'
import { Monoton } from 'next/font/google'

const monoton = Monoton({
  weight: [ '400'],
  subsets: ['latin'],
  variable: '--font-monoton'
})


export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState<boolean>(true)
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
     
  
    
  return (
    <header className={`flex justify-between items-center w-screen px-4 py-6 md:px-12 fixed z-20 ${navStyle ? ' bg-white shadow-md easy-in-out duration-300' : ''}`}>
      <Link href='/'>
        <h4 className={`${monoton.variable} text-[#e83622] font-monoton transition-all easy-in-out duration-300 z-20 `}
        >
          KontenStore
        </h4>
      </Link>
      <nav className='flex'>
        <AlignJustify className={`${navStyle ? 'text-[#081c15]' : 'text-white '} lg:hidden h-8 w-8 easy-in-out duration-300 hover:scale-110`} onClick={() => setMenuToggle(!menuToggle)}/>
        <Menu setMenuToggle={setMenuToggle} menuToggle={menuToggle} navStyle={navStyle}/>
      </nav>
    </header>
  ) 
}
