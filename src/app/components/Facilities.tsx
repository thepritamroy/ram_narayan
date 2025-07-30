'use client'

import Link from 'next/link'
import { FaRegStar } from 'react-icons/fa'

const facilities = [
  'Smart Classrooms',
  'Central Library',
  'Chemistry Lab',
  'Physics Lab',
  'Biology Lab',
  'Computer Lab',
  'CCtv',
  'Power Backup',
  'Playground',
  'Indoor Games',
  'Auditorium',
  'Hostels',
  'Fire Extinguishers',
  'Drinking Water',
  'Cafeteria'
]

const Facilities = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-10 text-white"
      style={{ backgroundImage: 'url("/facilities-bg.jpg")' }} // Replace with your actual image
    >
      <div className="absolute inset-0 bg-[#000d3d]/80 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">Facilities</h2>
        <div className="w-32 h-1 bg-red-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-[#34b4ff] font-semibold text-lg">
          {facilities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <FaRegStar className="text-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link href="/pages/facilities" className="mt-8">
          <button className="cursor-pointer mt-12 bg-[#e6012e] hover:bg-[#c40025] text-white font-bold py-3 px-8 outline outline-[#ffffff81] transition duration-300">
            View More
          </button>
        </Link>

      </div>
    </section>
  )
}

export default Facilities
