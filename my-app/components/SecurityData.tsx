import React from 'react'
import Image from "next/image"
import image4 from "@/public/kontener4.jpeg"
import { MdOutlineSecurity } from "react-icons/md";
import { FaCircleCheck } from 'react-icons/fa6';


const priceDatas = [
    {
        content: "Cały obiekt jest monitorowany przez systemy bezpieczeństwa 24 godziny na dobę, 7 dni w tygodniu",
        icon: <FaCircleCheck className='w-6 h-6 text-[#e83622]'/>
    },
    {
        content: "Teren naszego obiektu jest ogrodzony.",
        icon: <FaCircleCheck className='w-6 h-6 text-[#e83622]'/>
    },
    {
        content: "Każdy kontener wyposażony jest w system alarmowy oraz kłódkę szyfrową, aby zapewnić dodatkową ochronę.",
        icon: <FaCircleCheck className='w-6 h-6 text-[#e83622]'/>
    },
]

export default function SecurityData() {
  return (
    <div className='flex w-full xl:w-[650px] gap-8 border bg-white rounded-2xl'>
        <div className='hidden md:block w-1/4 relative'>
            <Image 
            alt='conatiner image'
            src={image4}
            fill
            sizes="100vw"
            style={{ objectFit: "cover"}}
            quality={100}
            className='w-[70%] rounded-l-2xl'
            />
        </div>
        <div className='w-full md:w-3/4 flex flex-col gap-8 py-10'>
            <div className='flex gap-4 items-center px-5 md:px-10'>
                <div className='border border-[#e83622] p-2 rounded-lg '>
                    <div className='bg-[#e83622] bg-opacity-20 p-2 rounded-md'>
                        <MdOutlineSecurity className='w-6 h-6 text-[#e83622] hover:w-12 hover:h-12 transition-all ease-in-out duration-300 '/>
                    </div>
                </div>
                <h4 className='text-[#1e1e20] font-semibold'>Bezpieczeństwo</h4>
            </div>
            {priceDatas.map((data, index) => (
                <div
                    key={index}
                    className='flex flex-col py-18 px-5 md:px-10 gap-8'
                >
                    <div className='flex gap-2 items-center'>
                        <div>{data.icon}</div>
                        <p>{data.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
