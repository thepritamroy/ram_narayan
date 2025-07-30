
'use client'

import { useEffect, useState } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

interface Props {
  title: string;
  description: string;
  images: string[];
}

const FacilityCard = ({ title, description, images }: Props) => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goToSlide = (newIndex: number, dir: 'left' | 'right') => {
    setPrev(current)
    setCurrent(newIndex)
    setDirection(dir)
  }

  const prevSlide = () => {
    const newIndex = current === 0 ? images.length - 1 : current - 1
    goToSlide(newIndex, 'left')
  }

  const nextSlide = () => {
    const newIndex = current === images.length - 1 ? 0 : current + 1
    goToSlide(newIndex, 'right')
  }


  useEffect(() => {
  const interval = setInterval(() => {
    const newIndex = current === images.length - 1 ? 0 : current + 1;
    goToSlide(newIndex, 'right');
  }, 5000);

  return () => clearInterval(interval);
}, [current]); 


  return (
    <div className="max-w-md mx-auto mb-10 bg-white text-gray-700" id={title}>
      {/* Heading */}
      <h2 className="text-xl font-bold text-[#1a144b] mb-4">{title}</h2>
      <div className="h-1 w-28 bg-[#cd0033] mb-4" />

      {/* Image Slider */}
      <div className="relative overflow-hidden rounded-sm h-[300px]">
        {/* Previous Image */}
        {prev !== null && (
          
          <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt="Previous"
            className={`absolute w-full h-full object-cover ${
              direction === 'right'
                ? 'animate-slide-out-to-right'
                : 'animate-slide-out-to-left'
            }`}
          />
        )}

        {/* Current Image */}
        <img
          key={`current-${current}`}
          src={images[current]}
          alt="Current"
          className={`absolute w-full h-full object-cover cursor-pointer ${
            direction === 'right'
              ? 'animate-slide-in-from-left'
              : 'animate-slide-in-from-right'
          }`}
          
            onClick={() => window.open(images[current], '_blank')}
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full cursor-pointer"
        >
          <TfiAngleLeft size={16} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full cursor-pointer"
        >
          <TfiAngleRight size={16} />
        </button>
      </div>

      {/* Description */}
      <p className="mt-6 text-[16px] text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FacilityCard


