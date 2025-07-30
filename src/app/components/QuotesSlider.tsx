'use client'

import { useEffect, useState } from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

const quotes = [
  {
    text: 'Education is the most powerful weapon which you can use to change the world',
    author: 'Nelson Mandela',
  },
  {
    text: 'The roots of education are bitter, but the fruit is sweet',
    author: 'Aristotle',
  },
  {
    text: 'An investment in knowledge pays the best interest',
    author: 'Benjamin Franklin',
  },
]

const QuotesSlider = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goToSlide = (newIndex: number, dir: 'left' | 'right') => {
    setPrev(current)
    setCurrent(newIndex)
    setDirection(dir)
  }

  const prevSlide = () => {
    const newIndex = current === 0 ? quotes.length - 1 : current - 1
    goToSlide(newIndex, 'left')
  }

  const nextSlide = () => {
    console.log("rendered")
    const newIndex = current === quotes.length - 1 ? 0 : current + 1
    goToSlide(newIndex, 'right')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = current === quotes.length - 1 ? 0 : current + 1;
      goToSlide(newIndex, 'right');
    }, 5000);

    return () => clearInterval(interval);
  }, [current]); 


  return (
    <section className="flex w-full overflow-hidden h-40 max-md:h-80 max-md:flex-col">
      {/* Left side (Quotes) */}
      <div className="bg-[#211F4E] text-white flex-1 relative px-6 flex items-center justify-between overflow-hidden">
        <div className=" left-4 text-xl max-lg:hidden">
          <FaTwitter />
        </div>

        {/* Previous Quotes */}
        {prev !== null && (
          
          <div
            key={`prev-${prev}`}
            className={`absolute w-full text-center ${
              direction === 'right'
                ? 'animate-slide-out-to-right'
                : 'animate-slide-out-to-left'
            }`}
          >
            <p className="text-sm sm:text-base font-medium"> “{quotes[prev].text}” </p>
            <p className="text-sm font-semibold mt-1">~ {quotes[prev].author}</p>
          </div>
        )}

        {/* Current Quotes */}
          <div
            key={`current-${current}`}
            className={`absolute w-full text-center left-0 ${
              direction === 'right'
                ? 'animate-slide-in-from-left'
                : 'animate-slide-in-from-right'
            }`}
          >

            <p className="text-sm sm:text-base font-medium px-4"> “{quotes[current].text}” </p>
            <p className="text-sm font-semibold mt-1">~ {quotes[current].author}</p>
          </div>

        {/* Arrows */}
          <div className=" right-4 top-4 flex gap-4 text-white text-sm max-lg:hidden z-50">
            <button onClick={prevSlide}>
              <FaArrowLeft className='cursor-pointer hover:text-[#ffffffd7]'/>
            </button>
            <button onClick={nextSlide}>
              <FaArrowRight className='cursor-pointer hover:text-[#ffffffd7]'/>
            </button>
          </div>
      </div>

      {/* Right side (Static box) */}
      
      <Link href="/pages/admission" className="bg-[#C4082F] text-white font-bold text-lg w-72 max-md:w-full max-md:h-40 flex items-center justify-center text-center">
        Admission Requirements
      </Link>
      
    </section>
  )
}

export default QuotesSlider
