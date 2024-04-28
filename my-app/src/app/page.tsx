import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Content from "@/components/Content";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery";


export default function Home() {

  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <div className='flex flex-col w-full h-[90vh] md:h-[100vh]'>
        <div className='w-full relative h-full  flex items-center'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='bg-fixed bg-parallax bg-cover h-full w-full flex flex-col justify-center'>
            <Main />
          </div>
        </div>      
      </div>
      <div className='w-screen flex flex-col'>
        <Content />
        <Gallery />
        <div className='relative'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
            <div className='bg-fixed bg-parallax bg-cover h-full w-full flex flex-col justify-center'>
              <GoogleMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
