'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { images } from '@/lib/images' 
import Image from 'next/image';
import Modal from '@/components/Modal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5'



export default function Slider() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
 

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth
      if (width >= 1200) {
        setSlidesPerView(3)
      } else if (width >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [slidesPerView])
  
  useEffect(() => {
    function handleModalStateChange() {
      if (showModal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    
    handleModalStateChange();

    return () => {
      document.body.style.overflow = 'auto';
    };
    
  }, [showModal])

  function handleClickThumbnail(index: number) {
   setActiveIndex(index)
   setShowModal(true)
  };

  return (
    <>
      <div className='w-full'>
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          freeMode={true}
          navigation={{
            nextEl: '.button-next',
            prevEl:'.button-prev',
          }}
          style={{
            "--swiper-pagination-color": "#ff471d",
            "--swiper-pagination-bullet-size": "2px",
            "--swiper-pagination-bullet-width": "60px",
          } as React.CSSProperties }
          modules={[Navigation, Pagination]}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
                <div className='h-[450px] relative' onClick={() => handleClickThumbnail(index)}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </SwiperSlide>
          ))}

          <div className='hidden md:block absolute bottom-[50%] left-[10px] z-20 button-next hover:transition-all ease-in-out hover:scale-110'>
            <IoArrowBackCircleOutline className='h-14 w-14 text-white rounded-full' strokeWidth={3} />
          </div> 
          <div className='hidden md:block absolute bottom-[50%] right-[10px] z-20  rounded-full button-prev hover:transition-all ease-in-out hover:scale-110'>
            <IoArrowForwardCircleOutline className='h-14 w-14 text-white rounded-full' strokeWidth={3}/>
          </div>
        </Swiper>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  )
}
