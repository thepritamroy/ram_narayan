import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import { classes } from '../../../../../db'



const page = () => {
  return (
    <main>

      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/academics-primary.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#01013084] backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">Classes</h1>
      </div>

    

      <section>
        <div className="my-12 max-w-5xl mx-auto max-lg:mx-4">
          <h2 className="text-xl font-bold mb-2">CLASSES 2024 - 2025</h2>
          <div className='h-2 bg-[#c90303] w-40'/>
          <table className="w-full border-collapse mt-10 text-center">
            <tbody>
              {classes.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                  {[...Array(5)].map((_, cellIndex) => (
                    <td key={cellIndex} className="p-3 border border-[#6d6d6d68] text-[13px] text-red-700 w-14">
                      {row[cellIndex] || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    
  

      <Footer />
    </main>
  )
}

export default page
