import Navbar from "@/app/components/Navbar"
import { gallery } from "../../../../../db"
import ImageCard from "./component/ImageCard"

interface Props{
  params : Promise<{searchTerm:string}>
}

const page = async({params}:Props) => {
  
  const searchTerm = (await params).searchTerm
  const formattedTitle = decodeURIComponent(searchTerm).replace(/\s+/g, ' ').trim();

  
  return (
    <main>
      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image-1.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#610101]/80 backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down capitalize">{formattedTitle} Celebration</h1>
      </div>

      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4 w-[75%] max-md:w-full mx-auto box-border justify-center transition-all duration-300 ease-in-out place-items-center">
        {gallery.map((gal,_)=>(
          gal.title === formattedTitle ? 
          gal.images.map((img,ind)=>(
            <ImageCard key={ind} img= {img} title={gal.title}/>
          )) : gal.images.length === 0 ? 'No images found' : null
        ))}
      </section>

    </main>
  )
}

export default page
