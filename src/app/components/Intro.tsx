'use client'

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  weight : ['800']
})

const tabData = {
  Objectives: (
    <>
      <p>
        The chief aim of the School is to enable individuals to know and develop to the fullest,
        their physical, mental, social, moral and spiritual potentialities based on the principles
        of Christian faith so that they can function as responsible members of the society.
      </p>
      <p>
        Its service is to promote patriotism, spirit of national integration, pride in our cultural
        heritage and a scientific outlook. Fellowship, team spirit, service and dignity of labour is
        given its importance along with intellectual pursuits.
      </p>
    </>
  ),
  Curriculum: <p>Curriculum details go here.</p>,
  "Religious Worship": <p>Religious Worship content goes here.</p>,
};

const Intro = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>();

  return (
    <section className="py-20 px-60 max-xl:px-32 max-lg:px-20 max-sm:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Vertical Boxes */}
        <div className="space-y-6 -mt-52 max-lg:-mt-28 z-50">
          <div className="bg-[#930303] p-8 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Smart Classrooms</h3>
            <Link href="/pages/facilities/#Smart Classrooms" className="mt-4 text-xs font-medium border-white text-white border px-4 py-2 hover:bg-black hover:text-white transition">
              VIEW MORE
            </Link>
          </div>
          <div className="bg-yellow-500 p-8 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Central Library</h3>
            <Link href="/pages/facilities/#Central Library" className="mt-4 text-xs font-medium border-black border px-4 py-2 hover:bg-black hover:text-white transition">
              VIEW MORE
            </Link>
          </div>
          <div className="bg-blue-500 p-8 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Computer Lab</h3>
            <Link href="/pages/facilities/#Computer Lab" className="mt-4 text-xs font-medium border-black border px-4 py-2 hover:bg-black hover:text-white transition">
              VIEW MORE
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className={`text-3xl max-md:text-2xl text-[#030355] font-bold playfair uppercase ${roboto.className}`}>Welcome to Ram Narayan High School</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Ram Narayan High School is an Educational Institution established, administered and run by the
              private sector primarily for the education of village children and for others to the extent possible without
              any discrimination against caste, creed and colour. It is an unaided private School. It was opened on the
              17th January 2003 under the patronage of George Breen, C.S.C. former Prefect Apostolic of Haflong.
            </p>
          </div>

          <div className="rounded shadow-sm">
            <div className="flex flex-col gap-1">
              {Object.keys(tabData).map((tab) => (
                <div key={tab}>
                  <button
                    className={`relative flex-1 w-full text-left px-4 py-3 font-semibold text-sm cursor-pointer rounded-xs transition-all duration-500 ${
                      activeTab === tab ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(activeTab === tab ? undefined : tab as keyof typeof tabData)}
                  >
                    {tab}
                    {activeTab === tab ? (
                      <IoIosArrowRoundUp className="inline ml-2 text-xl absolute right-2" />
                    ) : (
                      <IoIosArrowRoundDown className="inline ml-2 text-xl absolute right-2" />
                    )}
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-500 ease-in-out
                      ${activeTab === tab ? 'max-h-[500px]' : 'max-h-0'}
                    `}
                  >
                    <div
                      className="p-6 space-y-4 text-gray-800 text-sm leading-relaxed"
                    >
                      {tabData[tab as keyof typeof tabData]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

