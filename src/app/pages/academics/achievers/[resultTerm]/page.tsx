import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { results } from "../../../../../../db"

interface Props{
  params : Promise<{resultTerm:string}>
}
const page = async({params}:Props) => {
  const resultTerm = (await params).resultTerm

  console.log(resultTerm)
  return (
   <main>

      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/academics-hs.jpg')", height: "400px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#01013084] backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down"><span className="uppercase">{resultTerm}</span> Result</h1>
      </div>

      <section className="my-12 w-[75%] max-md:w-[90%] mx-auto box-border text-[#01012fda]">
        <div >
          <h1 className="text-lg font-bold max-md:text-sm">{resultTerm === 'hslc' ?'SEBA' : 'AHSEC'}</h1>
          <div className="w-20 h-[6px] bg-[#970404] max-md:h-1"></div>
        </div>

        <div className="uppercase font-extrabold flex flex-col items-center space-y-4 my-10">
          <h1 className="text-3xl max-md:text-2xl max-sm:text-xl text-center">Ram Narayan School, Guwahati</h1>
          <h2 className="text-lg text-[#970404] max-md:text-sm uppercase">{resultTerm} Result 2024-2025</h2>
          <div className="w-30 h-[6px] bg-[#194000]"></div>
        </div>
        
          
          {results.map((res,index)=>(
            res.class === resultTerm ? 
            <section key={index}>
              <section>
                <h2 className="font-bold text-xl border-b-2">TOPPERS</h2> 
                <div className="my-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4  box-border justify-center place-items-center transition-all duration-300 ease-in-out">
                  {res.toppers.map((t,ind)=>(
                  <div key={ind} className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-[180px] fadeInUp animated-fast">
                    <img src={t.images} alt={t.name} className="w-full h-50 object-cover cursor-pointer"/>
                    <div className=" text-[#1a1a1adf] p-4 text-center w-full text-[12px]">
                      <h3 className="font-semibold capitalize">{t.name}</h3>
                      <p>93.67%</p>
                    </div>                         
                  </div>
                  ))}
                </div>
              </section> 

              <section>
                <h2 className="font-bold text-xl border-b-2">SUBJECT TOPPERS</h2> 
                <div className="my-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4  box-border justify-center place-items-center transition-all duration-300 ease-in-out">
                  {res.sub_toppers.map((t,ind)=>(
                  <div key={ind} className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-[180px] fadeInUp animated-fast">
                    <img src={t.images} alt={t.name} className="w-full h-50 object-cover cursor-pointer"/>
                    <div className=" text-[#1a1a1adf] p-4 text-center w-full text-[12px]">
                      <h3 className=" font-semibold capitalize">{t.name}</h3>
                      <h2 className="italic">{t.subject}</h2>
                      <p>93.67%</p>
                    </div>                         
                  </div>
                  ))}
                </div>
              </section> 

              <section>
                <h2 className="font-bold text-xl border-b-2">OVER ALL RESULTS OF HSLC 2024 – 2025</h2> 
                <table className="w-full border-collapse mt-10 mb-12 text-center uppercase text-[12px]">
                  <tbody>
                    <tr>
                      <td className="p-2 border border-[#6d6d6d68] font-bold text-[white] w-14 bg-[#020255]">Percentage</td>
                      <td className="p-2 border border-[#6d6d6d68] font-bold text-[white] w-14 bg-[#9a0404]">No_Of_Students</td>
                    </tr>
                    {res.overall.map((t,ind)=>(
                      <tr key={ind}>
                        <td className="p-2 border border-[#6d6d6d68] text-[black] w-14">{t.percentage}</td>
                        <td className="p-2 border border-[#6d6d6d68] text-[black] w-14">{t.no_of_students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section>
                <h2 className="font-bold text-xl border-b-2 uppercase">YEAR WISE RESULT OF {resultTerm}</h2> 
                <div className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4  box-border justify-center max-sm:place-items-center transition-all duration-300 ease-in-out">
                  {res.year_wise.map((t,ind)=>(
                  <div key={ind} className="flex flex-col bg-[#fff] shadow-md overflow-hidden max-w-md max-sm:w-[340px]">
                    <div className="relative z-10]:">
                      <img src={t.images} alt={t.year} className="w-full h-50 object-cover cursor-pointer"/>

                      <div className="absolute top-0 w-full bg-black h-full z-20 opacity-0 hover:opacity-50 cursor-pointer transition-all duration-600"></div>
                    </div>
                    <div className=" text-[#1a1a1adf] p-4 text-center w-full text-[12px]">
                      <p>{t.year}</p>
                    </div>                         
                  </div>
                  ))}
                </div>
              </section> 

            </section> : null
          ))}
          
        

      </section>

      <Footer />
    </main>
  )
}

export default page
