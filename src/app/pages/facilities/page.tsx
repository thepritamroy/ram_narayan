import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import FacilityCard from "./FacilityCard"
import { facilities } from "../../../../db"



const page = () => {
  return (
    <main>

        <Navbar/>

      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-black/100 to-transparent z-10" />
      
      <div className="relative">
        <img src="/hero-image-1.jpg" alt="About Us" className="h-[400px] w-full object-cover"/>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">Facilities</h1>
      </div>
      
      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4 w-[75%] max-md:w-full mx-auto box-border justify-center transition-all duration-300 ease-in-out">

        {facilities.map((facility, index) => (
          <FacilityCard key={index} title={facility.title} description={facility.description} images={facility.images} />
        ))}

      </section>

      

      <Footer />
    </main>
  )
}

export default page
