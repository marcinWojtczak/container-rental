import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import { images } from '@/lib/images'
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5'

interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({setShowModal}: ModalProps) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1e1e20] z-10 opacity-95">
            <div className="w-full md:w-[70vw] lg:w-[60vw] h-[60vh] p-10 relative">
                <Swiper
                    spaceBetween={10}
                    navigation={{
                    nextEl: '.button-next',
                    prevEl:'.button-prev',
                    }}
                    modules={[FreeMode, Navigation]}
                    className="h-full w-full"
                    loop={true}
                >
                    <div className='relative my-10 '>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image 
                            src={image.src}
                            alt={image.alt}
                            sizes="100vw"
                            fill
                            style={{ objectFit: "cover"}}
                            />
                        </SwiperSlide>
                    ))}
                    </div>
                </Swiper>
                <div>
                    <div className='button-next absolute top-[50%] left-[-50px] z-10 bg-white bg-opacity-10 hover:transition-all ease-in-out hover:scale-110'>
                        <IoArrowBackCircleOutline className='h-14 w-14 text-white z-20' strokeWidth={3} />
                    </div>
                    <div className='button-next absolute top-[50%] right-[-50px] z-10 bg-white bg-opacity-10 hover:transition-all ease-in-out hover:scale-110'>
                        <IoArrowForwardCircleOutline className='h-14 w-14 text-white  z-20' strokeWidth={3}/>
                    </div>
                    <button className="absolute p-2 top-[-25px] right-[40px] z-10 bg-white bg-opacity-10 hover:transition-all ease-in-out hover:scale-110" onClick={() => setShowModal(prevState => !prevState)}>
                        <AiOutlineClose className="w-10 h-10 text-white "/>
                    </button>
                </div>
            </div>
        </div>
    )
}
