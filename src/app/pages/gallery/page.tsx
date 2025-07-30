"use client"

import Navbar from "@/app/components/Navbar"
import Link from "next/link"
import { gallery } from "../../../../db"


const page = () => {
  return (
    <main>
      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image-1.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#610101]/80 backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">Photo Gallery</h1>
      </div>

      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4 w-[75%] max-md:w-full mx-auto box-border justify-center transition-all duration-300 ease-in-out place-items-center">

        {gallery.map((gal,index)=>(
          <div key={index} className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-[300px] fadeInUp animated-fast">
          <img src={gal.images[0]} alt={gal.title} className="w-full h-50 object-cover cursor-pointer" 
            onClick={() => window.open(gal.images[0], '_blank')}
          />
          <div className=" text-[#1a1a1adf] p-4 text-center w-full">
            <h3 className="text-[12px] font-semibold uppercase">{gal.title} Celebration</h3>
          </div>
          <Link href={`/pages/gallery/${gal.title}`} className="italic text-red-700 pb-4 hover:text-red-800">View more</Link>
        </div>
        ))}

      </section>

    </main>
  )
}

export default page
