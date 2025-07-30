import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import ClassCard from './CourseCard'
import { courses } from '../../../../../db'


const page = () => {
  return (
    <main>

      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/academics-primary.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#01013084] backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">Course of Studies</h1>
      </div>

      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 w-[85%] max-md:w-full mx-auto box-border justify-center transition-all duration-300 ease-in-out place-items-center">

        {courses.map((c, index) => (  
          <ClassCard key={index} name={c.name} images={c.images} />
        ))}

      </section>

      <Footer />
    </main>
  )
}

export default page
