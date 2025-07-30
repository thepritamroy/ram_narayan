

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { RiMenu2Fill } from "react-icons/ri"
import { IoIosClose } from "react-icons/io";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { TfiAngleLeft } from "react-icons/tfi";
import { usePathname } from "next/navigation"
import {Open_Sans} from 'next/font/google';


const openSans = Open_Sans({
  subsets: ["latin"],
  weight : ['800']
})



const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFacultyMenuOpen, setIsFacultyMenuOpen] = useState(false)
  const [isAcademicsMenuOpen, setIsAcademicsMenuOpen] = useState(false)
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false)
  const [isAchieversMenuOpen, setIsAchieversMenuOpen] = useState(false);

  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5 // 50vh
      setIsScrolled(window.scrollY > triggerPoint)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  

  return (
    <section>
    <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicking overlay
      />
    <header
      className={` top-0 w-full z-100 transition-all duration-500 ${
        isScrolled
          ? "fixed animate_navbar"
          : " bg-transparent translate-y-0 absolute"
      }`}
    >
      
      <nav className="flex flex-col max-lg:flex-row max-lg:justify-between max-lg:items-center pl-20 pr-20 max-md:pl-10 max-md:pr-10 max-sm:pl-5 max-sm:pr-5">
        <div className="flex items-center p-4 gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </Link>
          <Link
            href="/"
            className={`open-sans-bold text-4xl max-lg:text-3xl max-md:text-2xl  max-sm:text-xl font-bold text-white ${openSans.className}`}
          >
            Ram Narayan High School
          </Link>
        </div>

        <div className="max-lg:hidden flex justify-center items-center mt-4 gap-10 text-[12px] font-bold font-sans text-[#ffffffa5]">

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/" className={`cursor-pointer ${pathname === '/' ? 'text-white' : ''}`}
              
            >HOME</Link>
            
            {pathname === '/' ? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>
          
          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/about" className={`cursor-pointer ${pathname.startsWith('/pages/about')? 'text-white' : ''}`}>ABOUT</Link>
            <div className="absolute top-[34px] left-0 bg-linear-to-r from-red-950 to-red-700 text-[#ffffff] font-light p-4 w-[320px] shadow-lg opacity-0  group-hover:opacity-100 flex transition-all duration-300 origin-top flex-col pointer-events-none group-hover:pointer-events-auto">
              <h2 className="text-[18px] font-semibold">About us</h2>
              <div className="bg-[#c30303] h-[2px] w-1/2 mb-2"></div>
              <Link href="/pages/about/#principal-desk" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Principal&apos;s Desk</Link>
              <Link href="/pages/about/#vision" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Vision</Link>
              <Link href="/pages/about/#overview" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Overview</Link>
              <Link href="/pages/about/#timing" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">School Timings</Link>
              <Link href="/pages/about/#uniform" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Uniforms</Link>
              <Link href="/pages/about/#rules" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Rules & Regulations</Link>
            </div>
            
            {pathname.startsWith('/pages/about')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div  className="relative group pb-4 hover:text-white transition-all duration-300 ">
            <Link href="/#academics" className={`cursor-pointer ${pathname.startsWith('/pages/academics') ? 'text-white' : ''}`}>ACADEMICS</Link>
            
            <div className="absolute top-[34px] left-0 bg-linear-to-r from-red-950 to-red-700 text-[#ffffff] font-light p-4 w-[320px] shadow-lg opacity-0  group-hover:opacity-100 flex transition-all duration-300 origin-top flex-col pointer-events-none group-hover:pointer-events-auto">

              <h2 className="text-[18px] font-semibold">Academics</h2>
              <div className="bg-[#c30303] h-[2px] w-1/2 mb-2"></div>
              <Link href="/pages/academics/classes" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Classes</Link>
              <Link href="/pages/academics/courses" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Course Of Studies</Link>
              <Link href="/pages/academics/holiday-list" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Holiday List</Link>

              <div className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3 group/achievers relative">Achievers
                
                <div className="absolute left-full top-2 bg-linear-to-r from-red-950 to-red-700 text-[#ffffff] font-light p-4 w-[160px] shadow-lg opacity-0 group-hover/achievers:opacity-100 flex transition-all duration-500 origin-top flex-col pointer-events-none group-hover/achievers:pointer-events-auto">

                  <Link href="/pages/academics/achievers/hslc" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">HSLC Result</Link>
                  <Link href="/pages/academics/achievers/hs" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">HS Result</Link>
                </div>
              
              </div>
            </div>

            {pathname.startsWith('/pages/academics')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/facilities" className={`cursor-pointer ${pathname.startsWith('/pages/facilities') ? 'text-white' : ''}`}>FACILITIES</Link>

            {pathname.startsWith('/pages/facilities')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className={`relative group pb-4 flex items-center hover:text-white transition-all duration-300 ${pathname.startsWith('/pages/faculty') ? 'text-white' : ''}`}>FACULTY
            <div className="absolute top-[34px] left-0 bg-linear-to-r from-red-950 to-red-700 text-[#ffffff] font-light p-4 w-[320px] shadow-lg opacity-0  group-hover:opacity-100 flex transition-all duration-300 origin-top flex-col pointer-events-none group-hover:pointer-events-auto">
              <h2 className="text-[18px] font-semibold">Faculty</h2>
              <div className="bg-[#c30303] h-[2px] w-1/2 mb-2"></div>
              <Link href="/pages/faculty/management" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Management</Link>
              <Link href="/pages/faculty/primary" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Primary School</Link>
              <Link href="/pages/faculty/secondary" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Secondary School</Link>
              <Link href="/pages/faculty/sr-secondary" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Sr. Secondary School</Link>
              <Link href="/pages/faculty/support-staff" className="hover:text-[#dadad9] transition-all duration-300 border-b border-dashed border-[#beb6b6aa] py-3">Support Staff</Link>
            </div>

            {pathname.startsWith('/pages/faculty')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>
          
          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/transport" className={`cursor-pointer ${pathname.startsWith('/pages/transport') ? 'text-white' : ''}`}>TRANSPORT</Link>

            {pathname.startsWith('/pages/transport')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/admission" className={`cursor-pointer ${pathname.startsWith('/pages/admission') ? 'text-white' : ''}`}>ADMISSION</Link>

            {pathname.startsWith('/pages/admission')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/activities" className={`cursor-pointer ${pathname.startsWith('/pages/activities') ? 'text-white' : ''}`}>ACTIVITIES</Link>

            {pathname.startsWith('/pages/activities')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/gallery" className={`cursor-pointer ${pathname.startsWith('/pages/gallery') ? 'text-white' : ''}`}>GALLERY</Link>

            {pathname.startsWith('/pages/gallery')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>

          <div className="relative group pb-4 hover:text-white transition-all duration-300">
            <Link href="/pages/contact-us" className={`cursor-pointer ${pathname.startsWith('/pages/contact') ? 'text-white' : ''}`}>CONTACT US</Link>

            {pathname.startsWith('/pages/contact')? <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full "></div> : <div className="h-[6px] bg-[#ba0404] absolute bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>}
          </div>
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white min-lg:hidden cursor-pointer hover:bg-[#292949] transition-all duration-300 p-2 rounded-full">
          <RiMenu2Fill className="text-xl" />
        </div>

      </nav>
    </header>

      {/*Main menu for mobile view*/}
      <div className={`fixed top-0 right-0 bg-[#040404e7] w-80 z-100 h-[100vh] origin-top-right transition-all duration-400 
        ${isMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 pointer-events-none"}`}>

        <div className="flex flex-col justify-center gap-2 p-4 pl-10 text-[12px] font-bold font-sans text-[#ffffffa5]">
          <IoIosClose className="text-white text-5xl cursor-pointer hover:bg-[#333232a8] transition-all duration-300" onClick={() => setIsMenuOpen(false)} />

          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300 " href="/"
            onClick={()=>setIsMenuOpen(false)}
          >HOME</Link>
          <div className="p-5 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex gap-5 items-center" onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)} >
            <span>ABOUT</span><LiaAngleDoubleRightSolid className="text-white text-lg"/>
          </div>
          <div className="p-5 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex gap-5 items-center" onClick={() => setIsAcademicsMenuOpen(!isAcademicsMenuOpen)} >
            <span>ACADEMICS</span><LiaAngleDoubleRightSolid className="text-white text-lg"/>
          </div>
          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/facilities"
            onClick={()=>setIsMenuOpen(false)}
          >FACILITIES</Link>

          <div className="p-5 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex gap-5 items-center" onClick={() => setIsFacultyMenuOpen(!isFacultyMenuOpen)} >
            <span>FACULTY</span><LiaAngleDoubleRightSolid className="text-white text-lg"/>
          </div>

          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/transport"
            onClick={()=>setIsMenuOpen(false)}
          >TRANSPORT</Link>
          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/admission"
            onClick={()=>setIsMenuOpen(false)}
          >ADMISSION</Link>
          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/activities"
            onClick={()=>setIsMenuOpen(false)}
          >ACTIVITIES</Link>
          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/gallery"
            onClick={()=>setIsMenuOpen(false)}
          >GALLERY</Link>
          <Link className="p-5 hover:text-white hover:scale-110 transition-all duration-300" href="/pages/contact-us"
            onClick={()=>setIsMenuOpen(false)}
          >CONTACT US</Link>
        </div>
      </div>

      {/*Submenus for Faculty*/}
      <div className={`fixed top-0 right-0 bg-[#040404e7] w-80 z-100 h-[100vh] origin-top-right transition-all duration-400 
          ${isFacultyMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        >
        <div className="flex flex-col justify-center gap-2 p-4 pl-10 text-[12px] font-bold font-sans text-[#ffffffa5]">
          <TfiAngleLeft className="text-white text-4xl mt-4 cursor-pointer hover:bg-[#333232a8] transition-all duration-300" onClick={() => setIsFacultyMenuOpen(false)} />

          <Link href="/pages/faculty/management" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsFacultyMenuOpen(false)}}            
          >MANAGEMENT</Link>
          <Link href="/pages/faculty/primary" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsFacultyMenuOpen(false)}}     
          >PRIMARY SCHOOL</Link>
          <Link href="/pages/faculty/secondary" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsFacultyMenuOpen(false)}}     
          >SECONDARY SCHOOL</Link>
          <Link href="/pages/faculty/sr-secondary" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsFacultyMenuOpen(false)}}     
          >SR. SECONDARY SCHOOL</Link>
          <Link href="/pages/faculty/support-staff" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsFacultyMenuOpen(false)}}     
          >SUPPORT STAFF</Link>

        </div>
      </div>

      {/*Submenus for Academics*/}
      <div className={`fixed top-0 right-0 bg-[#040404e7] w-80 z-100 h-[100vh] origin-top-right transition-all duration-400 
          ${isAcademicsMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        >
        <div className="flex flex-col justify-center gap-2 p-4 pl-10 text-[12px] font-bold font-sans text-[#ffffffa5]">
          <TfiAngleLeft className="text-white text-4xl mt-4 cursor-pointer hover:bg-[#333232a8] transition-all duration-300" onClick={() => setIsAcademicsMenuOpen(false)} />
          <Link href="/pages/academics/classes" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAcademicsMenuOpen(false)}}     
          >CLASSES</Link>
          <Link href="/pages/academics/courses" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAcademicsMenuOpen(false)}}  
          >COURSES OF STUDIES</Link>
          <Link href="/pages/academics/holiday-list" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAcademicsMenuOpen(false)}}  
          >HOLIDAY LIST</Link>
          <div className="p-5 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer flex gap-5 items-center" onClick={() => setIsAchieversMenuOpen(!isFacultyMenuOpen)} >
            <span>ACHIEVERS</span><LiaAngleDoubleRightSolid className="text-white text-lg"/>
          </div>
        </div>
      </div>

      {/*Submenus for About */}
      <div className={`fixed top-0 right-0 bg-[#040404e7] w-80 z-100 h-[100vh] origin-top-right transition-all duration-400 
          ${isAboutMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        >
        <div className="flex flex-col justify-center gap-2 p-4 pl-10 text-[12px] font-bold font-sans text-[#ffffffa5]">
          <TfiAngleLeft className="text-white text-4xl mt-4 cursor-pointer hover:bg-[#333232a8] transition-all duration-300" onClick={() => setIsAboutMenuOpen(false)} />
          
          <Link href="/pages/about/#principal-desk" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >PRINCIPAL'S DESK</Link>
          <Link href="/pages/about/#vision" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >VISION</Link>
          <Link href="/pages/about/#overview" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >OVERVIEW</Link>
          <Link href="/pages/about/#timing" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >SCHOOL TIMINGS</Link>
          <Link href="/pages/about/#uniform" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >UNIFORMS</Link>
          <Link href="/pages/about/#rules" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAboutMenuOpen(false)}}  
          >RULES & REGULATIONS</Link>

        </div>
      </div>

      {/*Submenus for Achievers*/}
      <div className={`fixed top-0 right-0 bg-[#040404e7] w-80 z-100 h-[100vh] origin-top-right transition-all duration-400 
          ${isAchieversMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        >
        <div className="flex flex-col justify-center gap-2 p-4 pl-10 text-[12px] font-bold font-sans text-[#ffffffa5]">
          <TfiAngleLeft className="text-white text-4xl mt-4 cursor-pointer hover:bg-[#333232a8] transition-all duration-300" onClick={() => setIsAchieversMenuOpen(false)} />
          
          <Link href="/pages/academics/achievers/hslc" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAcademicsMenuOpen(false); setIsAchieversMenuOpen(false)}}  
          >HSLC RESULT</Link>
          <Link href="/pages/academics/achievers/hs" className="p-5 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={()=>{setIsMenuOpen(false); setIsAcademicsMenuOpen(false); setIsAchieversMenuOpen(false)}} 
          >HS RESULT</Link>

        </div>
      </div>

    </section>
  )
}

export default Navbar

