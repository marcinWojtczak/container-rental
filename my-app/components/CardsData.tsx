import React from 'react'
import Image from "next/image"
import image2 from "@/public/kontener2.jpeg"
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCircleCheck } from 'react-icons/fa6';
import { MdOutlineSecurity } from "react-icons/md";
import { GoContainer } from "react-icons/go";

const cardDatas = [
    {
        icon: <MdOutlineAttachMoney className='w-12 h-12 text-[#e83622]'/>,
        title: "Cena",
        content: { 
            first: "Nasze magazyny wynajmiesz już za 750zł netto miesięcznie",
            second: "Transparentność kosztów.",
            third: "Brak ukrytych opłat."
        },
        secondaryIcon: <FaCircleCheck className='w-6 h-6 text-[#1e1e20]'/>
    },
    {
        icon: <MdOutlineSecurity className='w-12 h-12 text-[#e83622]'/>,
        title: "Bezpieczeństwo",
        content: { 
            first: "Cały obiekt jest monitorowany przez systemy bezpieczeństwa 24 godziny na dobę, 7 dni w tygodniu",
            second: "Każdy kontener wyposażony jest w kłódkę szyfrową, aby zapewnić dodatkową ochronę.",
            third: "Teren naszego obiektu jest ogrodzony.",
        },
        secondaryIcon: <FaCircleCheck className='w-6 h-6 text-[#1e1e20]'/>
    },
    {
        icon: <GoContainer className='w-12 h-12 text-[#e83622]'/>,
        title: "Wymiary",
        content: { 
            first:  "Wysokość kontenera wynosi 2,90 m.",
            second: "Długość kontenera wynosi 12,19 m.",
            third: "Szerokość kontenera wynosi 2,44 m.",
        },
        secondaryIcon: <FaCircleCheck className='w-6 h-6  text-[#1e1e20]'/>
    },
]

export default function CardsData() {

  return (
    <div className='flex w-full justify-between flex-wrap gap-2 md:gap-12 '>
        {cardDatas.map((data, index) => (
            <div 
                key={index}
                className='flex-1 flex flex-col items-center gap-6 p-8'
            >
                <div className='bg-[#1e1e20] bg-opacity-10 p-4 rounded-lg'>
                    {data.icon}
                </div>
                <h4 className='text-[#1e1e2] font-semibold'>{data.title}</h4>
                <div className='flex flex-col items-center text-center gap-4'>
                    <div className='flex flex-col text-[#e83622] gap-3'>
                        <p className='text-[#1e1e20]'><label className='text-[#e83622]'>1. </label> {data.content.first}</p>
                        <p className='text-[#1e1e20]'><label className='text-[#e83622]'>2. </label> {data.content.second}</p>
                        <p className='text-[#1e1e20]'><label className='text-[#e83622]'>3. </label> {data.content.third}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
