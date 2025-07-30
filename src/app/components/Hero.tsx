
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Playfair_Display} from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700','400'], // Choose needed weights
  style: ['normal', 'italic'],
});


const Hero = () => {
  const images = 5;

  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goToSlide = (newIndex: number, dir: 'left' | 'right') => {
    setPrev(current)
    setCurrent(newIndex)
    setDirection(dir)
  }

  const prevSlide = () => {
    const newIndex = current === 0 ? images - 1 : current - 1
    goToSlide(newIndex, 'left')
  }

  const nextSlide = () => {
    const newIndex = current === images - 1 ? 0 : current + 1
    goToSlide(newIndex, 'right')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = current === images - 1 ? 0 : current + 1;
      goToSlide(newIndex, 'right');
    }, 10000);

    return () => clearInterval(interval);
  }, [current]); 

  return (


    <section className="relative h-[100vh] max-md:h-[60vh] w-full overflow-hidden group">

      {/* Previous Image */}
        {prev !== null && (
          
          <Image
            key={`prev-${prev}`}
            src={`/hero-image-${prev + 1}.jpg`}
            alt="Previous"
            width={700}
        height={700}
            className={`absolute w-full h-full object-cover ${
              direction === 'right'
                ? 'animate-slide-out-to-right'
                : 'animate-slide-out-to-left'
            }`}
          />
        )}

        {/* Current Image */}
        <Image
          key={`current-${current}`}
          src={`/hero-image-${current + 1}.jpg`}
          alt="Current"
          width={700}
        height={700}
          className={`absolute w-full h-full object-cover cursor-pointer ${
            direction === 'right'
              ? 'animate-slide-in-from-left'
              : 'animate-slide-in-from-right'
          }`}
        />


      {/* Gradient Overlay */}
      <div className="absolute h-5/6 max-md:h-full inset-0 bg-gradient-to-b from-black/100 to-transparent z-10" />

      {/* Centered Text and Arrows */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          key={`welcome-${current}`}
          className={`${playfair.className} italic text-white text-2xl md:text-3xl lg:text-4xl font-light pb-5 animate-slide-up-to-down`}
        >
          Welcome to
        </h1>
        <p
          key={`title-${current}`}
          className={`${playfair.className} text-white font-bold text-[4.5em] max-xl:text-[3.3em] max-lg:text-[3em] max-md:text-[2em] max-sm:text-[1.5rem] heading-responsive-1 heading-responsive-2 leading-tight whitespace-nowrap animate-slide-up-to-down`}
        >
          Ram Narayan High School Guwahati
        </p>

          <div className="absolute bottom-14 right-2 z-30 flex overflow-hidden shadow-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-600 max-lg:right-1/2 max-lg:translate-x-1/2 ">
            <button              
              onClick={prevSlide}
              className="bg-[#020288] hover:bg-blue-950 text-white px-3 py-2 text-xl transition duration-300 cursor-pointer">
              <FaAngleLeft />
            </button>
            <button              
              onClick={nextSlide}
              className="bg-[#a40303] hover:bg-red-900 text-white px-3 py-2 text-xl transition duration-300 cursor-pointer">
              <FaAngleRight />
            </button>
          </div>

      </div>
    </section>
  );
};

export default Hero;