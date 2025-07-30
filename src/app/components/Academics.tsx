'use client'

import Link from 'next/link'

const academicsData = [
  {
    title: 'Classes',
    description:
      'Dive right into class with one of our expert teachers. Rather than just listening, memorizing, and repeating facts',
    image: '/academics-primary.jpg', // Rename and move your image accordingly
    label: 'Classes',
  },
  {
    title: 'Course of Studies',
    description:
      'Enroll in our hands-on, innovative class for intermediate and advanced students.',
    image: '/academics-secondary.jpg',
    label: 'Courses',
  },
  {
    title: 'Achievers',
    description:
      'This class aims to guide students through the foundations of the subject and beyond.',
    image: '/academics-hs.jpg',
    label: 'Achievers',
  },
]

const Academics = () => {
  return (
    <section className="bg-[#f5f7fa] py-16 px-4 md:px-12 text-center" id='academics'>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4 uppercase italic playfair">Academics</h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        We follow a high academic standard as a guide for the creativity and leadership of our
        teachers. Our objectives are not set in stone, with occasional revisions developed in
        response to research on new methods.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {academicsData.map((item, index) => (
          <div key={index} className="text-left">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-auto rounded-sm object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 px-3 py-1 font-semibold text-sm rounded-tl-lg shadow">
                {item.label}
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <Link
            href={`/pages/academics/${item.label.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`}
            className="text-sm mt-4 text-blue-600 hover:underline cursor-pointer"
          >
            LEARN MORE
          </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Academics
