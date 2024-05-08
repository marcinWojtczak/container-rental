import React from 'react'
import { isMobile } from 'react-device-detect';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  console.log(isMobile ? 'Is mobie' : 'No mobile')
  return (
    <div className='flex items-center gap-4 md:ml-10'>
      <FaPhoneAlt className='w-5 h-5 text-[#e83622]'/>
      {isMobile ? (
      <div>
          <p><a href="tel:531 787 144">531 787 144</a></p>
          <p><a href="tel:502 186 636">502 186 636</a></p> 
      </div>
      ) : (
      <div>
          <p>531 787 144</p>
          <p>502 186 636</p>
      </div>
      )}
  </div>
  )
}
