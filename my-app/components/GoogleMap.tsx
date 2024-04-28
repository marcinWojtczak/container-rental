'use client'
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker,  } from '@react-google-maps/api'
import Link from "next/link"
import { IoArrowForwardCircle } from 'react-icons/io5'
import { motion } from "framer-motion"


export default function Map() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBlfxEV3b4mczdnUmvZLK8mXsPxbEXHr7E"
    })
    
    const coordinates = { lat: 52.17259, lng: 20.84684 }
    const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=13&t=m&hl=en&gl=US&mapclient=apiv3`
 
    const center = {
      lat: coordinates.lat,
      lng: coordinates.lng
    };

    if (loadError) {
      return <div className="text-[20px] font-semibold px-24 py-8">Error loading map...</div>;
    }
  
    if (!isLoaded) {
      return <div className="text-[20px] font-semibold px-24 py-8">Loading map...</div>;
    }

    const handleClick = () => {
      window.open(url, '_blank')
    }
    
    return (
      <div className='flex flex-col items-center text-center md:pt-20 pb-20 md:pb-40' id="map">
        <motion.div
          initial={{ opacity: 0, y: 100}}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
          className='flex flex-col items-center px-3 md:px-8 my-14 md:my-20 max-w-[850px] z-10'
        >
          <h2 className="text-white font-semibold mb-6 border-b-2 w-fit border-[#e83622]">Dojazd</h2>
          
            <p className='text-white mb-6 '>Nasze magazyny znajdują się w doskonałej lokalizacji, co zapewnia łatwy dostęp i efektywną logistykę dla naszych klientów. Zapraszamy do    odwiedzenia nas pod adresem:<label className='font-black'>Aleje Jrozlolimksie 337a.</label> Znajdź nas i przekonaj się, że nasza lokalizacja spełni wszystkie Twoje oczekiwania!
            </p>
            <Link 
              href={url}
              target='_blank'
              className="flex items-center gap-4 pl-6 bg-[#e83622] rounded-full text-white transition-color ease-in-out duration-300 hover:scale-105 hover:shadow-2xl shadow-[#1e1e20] hover:text-white hover:bg-opacity-0 border border-[#e83622]  hover:border-white"
            >
              <p>Sprawdź dojazd</p>
              <IoArrowForwardCircle className='w-12 h-12 hover:text-white -rotate-45'/>
            </Link>
         
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 100}}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
           once: true
         }}
          className='relative h-full w-full px-3 md:px-8'>
          <GoogleMap
            mapContainerStyle={{  width: '100%', height: '500px' }}
            center={center}
            zoom={12}
          >
            <Link 
              href={url}
              target='_blank'
            >
              <Marker position={{lat: coordinates.lat,  lng: coordinates.lng}} onClick={handleClick}/> 
            </Link>
          </GoogleMap>
        </motion.div>
      </div>
    ) 

}
