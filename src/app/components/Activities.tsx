'use client'

const Activities = () => {
  return (
    <section className="bg-[#f5f7fa] py-16 px-4">
      <div className='w-[1100px] max-xl:w-[900px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[320px] mx-auto'>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          Recent Activities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {/* Left Column: Golden Jubilee */}
          <div className="bg-white shadow-md ">
            <div className="bg-[#0c5492] text-white px-4 pt-3 pb-2 text-sm font-semibold">
              OCT2025
            </div>
            <div className="bg-[#0c5492] text-white px-4 py-2 text-center">
              <div className="text-xl font-bold tracking-widest">GOLDEN JUBILEE</div>
              <div className="text-md tracking-[0.3em] font-semibold">CELEBRATION 2016</div>
            </div>
            <div className="flex justify-center px-4 gap-1 bg-[#0c5492] py-2 ">
              <img
                src="/jubilee-1.jpeg"
                alt="jubilee"
                className='w-1/4 object-cover '
              />
              <img
                src="/jubilee-2.jpg"
                alt="jubilee"
                className='w-1/4 object-cover '
              />
              <img
                src="/jubilee-3.jpg"
                alt="jubilee"
                className='w-1/4 object-cover '
              />
              <img
                src="/jubilee-4.jpeg"
                alt="jubilee"
                className='w-1/4 object-cover '
              />
            </div>
            <div className="bg-black text-white text-xs px-4 py-1 font-medium">
              Milestones in the Path of Progress:
            </div>
            <div className="p-6 text-gray-700">
              <h3 className="text-lg font-semibold mb-2">Golden Jubilee Celebration</h3>
              <p className="text-sm leading-relaxed">
                Over the decades, Holy Cross has crossed milestones in the path of glory. In 2016,
                the Institution completed 50 years of sojourn in imparting quality education and
                moral dictates to its students. The Golden Jubilee Celebrations held over five days
                in the month of October, 2015 marked the most glittering feather in the crown. The
                Institution also published the Golden Jubilee Souvenir to commemorate the historic
                journey. Students – both past and present – collaborated jointly to observe the
                occasion and fulfill the cherished motto – “Let Your Light Shine”.
              </p>
            </div>
          </div>

          {/* Right Column: Three cards */}
          <div className="space-y-6 ">
            {/* Item 1 */}
            <div className="bg-white shadow-md p-6 flex gap-4">
              <img
                src="/rank-holder.jpeg"
                alt="8th Rank Holder"
                width={80}
                height={80}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1">Felicitation of Rank Holder</h3>
                <p className="text-sm text-gray-500 mb-2">April 2025</p>
                <p className="text-sm text-gray-700">
                  Holy Cross HS School Silchar have always emerged with flying colours in HSLC exam
                  and 2020 is no exception as ANISHA ROY achieved the 8th position in Assam.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white shadow-md p-6 flex gap-4">
              <img
                src="/child-scientist.jpeg"
                alt="Child Scientist"
                width={80}
                height={80}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1">School Topper</h3>
                <p className="text-sm text-gray-500 mb-2">March 2025</p>
                <p className="text-sm text-gray-700">
                  Another glorifying moment when Yagami Light, a kid of class 9, has been awarded the
                  position of School topper.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white shadow-md p-6 flex gap-4">
              <img
                src="/sports-week.jpg"
                alt="Sports Week"
                width={80}
                height={80}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1">Sports week 2025</h3>
                <p className="text-sm text-gray-500 mb-2">Feb 2025</p>
                <p className="text-sm text-gray-700">
                  Sports empowers youth, promotes higher self-esteem, brings about motivation,
                  enables students to earn better grades and also teaches students to maintain a
                  healthy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
