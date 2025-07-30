import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import FacultyCard from '../FacultyCard'

const faculties = [
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
]

const page = () => {
  return (
    <main>

      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image-1.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#010130]/90 backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">Support Staff</h1>
      </div>

      <section className='text-center text-white bg-[#010130] p-8 mt-12 w-[75%] max-md:w-[95%] mx-auto box-border'>
        <h1 className='text-3xl font-bold mb-4'>
          Meet Support Staff
        </h1>
        <p>
          Our support staff is dedicated to providing the best possible environment for our students and faculty. With a focus on service and efficiency, they ensure that our school runs smoothly and effectively.
        </p>
      </section>

      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4 w-[75%] max-md:w-full mx-auto box-border justify-center transition-all duration-300 ease-in-out place-items-center">

        {faculties.map((faculty, index) => (  
          <FacultyCard key={index} name={faculty.name} description={faculty.description} images={faculty.images} />
        ))}

      </section>

      <Footer />
    </main>
  )
}

export default page
