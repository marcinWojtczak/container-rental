import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import containerImage from "@/public/kontener4.jpeg"
import Image from "next/image";
import Content from "@/components/Content";
import GoogleMap from "@/components/GoogleMap";
import Slider from "@/components/Slider"
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery";


export default function Home() {

  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <div className='flex flex-col w-full h-[70vh] md:h-[100vh] px-4 md:px-12'>
        <div className='w-full relative h-full top-[100px] bg-[#1e1e20] rounded-lg flex items-center'>
          <Main />
          <Image 
            src={containerImage}
            alt='container image'
            fill
            style={{ objectFit: "cover"}}
            quality={100}
            className='rounded-lg opacity-50 blur-sm'
          />
        </div>      
      </div>
      <div className='w-full flex flex-col'>
        <Content />
        <Gallery />
        <GoogleMap />
      </div>
      <Footer />
    </div>
  )
}
