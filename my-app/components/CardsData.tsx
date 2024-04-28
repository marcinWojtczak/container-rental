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
        content: (
            <p>Już od <label className='font-bold text-[18px] text-[#e83622]'>750 zł netto</label> miesięcznie wynajmujemy nasze magazyny, zapewniając transparentność kosztów oraz brak ukrytych opłat.</p>
        ),
    },
    {
        icon: <MdOutlineSecurity className='w-12 h-12 text-[#e83622]'/>,
        title: "Bezpieczeńwość",
        content: (
            <p>Zapewniamy Państwu kompleksowe bezpieczeństwo. Cały obiekt jest monitorowany 24 godziny na dobę, 7 dni w tygodniu. Dodatkowo, każdy kontener jest wyposażony w kłódkę szyfrową, a teren jest ogrodzony.</p>
        ),
    },
    {
        icon: <GoContainer className='w-12 h-12 text-[#e83622]'/>,
        title: "Wymiary",
        content: (
            <p>Każdy kontener ma wysokość wynoszącą 2,90 m, długość 12,19 m oraz szerokość 2,44 m.</p>
        ),
    },
]

export default function CardsData() {

  return (
    <div className='flex flex-wrap gap-2 md:gap-12 max-w-[1450px]'>
        {cardDatas.map((data, index) => (
            <div 
                key={index}
                className='flex-1 flex flex-col gap-4 items-center px-8 md:px-12 py-8'
            >
                {data.icon}
                <h4 className='text-[#1e1e20] font-semibold text-start'>{data.title}</h4>
                <div className='flex flex-col text-center gap-2'>
                    {data.content}
                </div>
            </div>
        ))}
    </div>
  )
}
