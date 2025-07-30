import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"


const page = () => {
  return (
    <main>
      
        <Navbar/>
      
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-black/100 to-transparent z-10" />
      
      <div className="relative">
        <img src="/hero-image-1.jpg" alt="About Us" className="h-[400px] w-full object-cover"/>

        <h1 className="absolute text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold top-2/3 z-50 left-1/12 animate-slide-up-to-down">About Our School</h1>
      </div>

      <section className="px-4 py-28 bg-white" id="principal-desk">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">From The Principal’s Desk</h2>
            <p className="mb-6 text-[15px]">Dear Children and Parents,</p>
            <div className="text-gray-800 text-[15px] leading-relaxed">
              <p>
                In the words of Albert Einstein, “Education is not learning of facts, but the training of the mind to think.” However, we cannot do it alone. This is a journey that we have to take together. We are a team – students, teachers, parents, friends and relatives. I invite you to Ram Narayan School, Guwhati for the meaningful journey to the future.
              </p>
              <p>
                Swami Vivekananda once said “Education is the manifestation of the perfection present in man...” Therefore, we shall together strive towards the inherent perfection we each of us are so abundantly bestowed with.
              </p>
              <p>
                And finally in the words of Mother Teresa, “Let us always meet each other with smile in the beginning of love.”
              </p>
              <p>
                At Ram Narayan School, Guwahati, we believe that all that we have accomplished, we did it together. And all that we hope to accomplish, we will do it together.
              </p>
              <p>
                I invite you to check out our website for updates from time to time.
              </p>
            </div>

            <div className="mt-10 text-gray-900 font-medium text-[15px]">
              <p>Fr. Chota Bheem</p>
              <p>Principal</p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src="/principal-image.jpg"
              alt="Principal"
              className="max-w-[400px] w-full rounded shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

    {/*Vision section*/ }

      <section className="px-4 py-16 bg-white" id="vision">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          
          <div className="flex-shrink-0 max-w-md w-full">
            <img
              src="/vision-image.jpg"
              alt="Vision"
              className="w-full object-cover h-[270px] rounded-sm"
            />
          </div>

          
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-6 text-[#1e1d1de5]">Vision</h2>
            <p className="text-gray-800 text-[15px] leading-relaxed">
              Impart sound education by cultivating in the students’ habits of piety, virtue, self-reliance and discipline while they go through their studies. Hence particular attention is given to discipline and character formation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview section*/}

      <section className="px-4 py-16 bg-white space-y-16 text-gray-800 text-[15px] leading-relaxed" id="overview">
  
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-4 ">
              <h2 className="text-3xl font-bold">Overview</h2>
              <p>
                Established in the year 1979, Ram Narayan School, Guwahati, (English Medium), is a Catholic Educational
                Institution. It is based on faith in God, Reason and Kindness. The first batch of students appeared in their HSLC Exam
                </p>
            </div>
            <div className="max-w-md w-full">
              <img
                src="/overview-image.jpg" // Replace with actual image path
                alt="School Overview"
                className="w-full object-cover h-[230px] rounded-sm"
              />
            </div>
          </div>
          <p className="my-5">
              These activities provide children the opportunities to showcase their talents. House wise competitions were conducted throughout the year in solo song, recitation, drawing and painting, extempore, group song, group dance etc.   A word of gratitude to all the Parents! Thank you for trusting us with your children. Thank you for your invaluable help with the many tasks around the school. Thank you for your support in making our events more enjoyable and successful! Thank you for the joy you bring to the children with your presence!
            </p>
        
          <div className="space-y-10">
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Extra and Co-curricular activities</h3>
              <p>
                These activities provide children the opportunities to showcase their talents. House wise competitions were
                conducted throughout the year in solo song, recitation, drawing and painting, extempore, group song, group dance etc.
              </p>
              <p>
                As we have a number of trained Scouts & Guides teachers and Leaders Trainers among our faculty, the Scouts and Guides
                movement is not only very active in our School but our team got prizes in Scouts and Guides Camp and some of our
                Scouts & Guides are selected for the Rajya Puraskar Award.
              </p>
              <p>
                Ample opportunities are provided to our children in sports and outdoor events to play and prove their mettle at
                school and in national level competitions.
              </p>
            </div>

            {/* Academic Excellence */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Academic Excellence</h3>
              <p>
                Amongst the great work that our students do, was the excellent performance of the HSLC Examination. In class X,
                the pass percentage result has always been 100 percent.
              </p>
            </div>

            {/* Faculty */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Qualified and Trained Faculty</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Our Teachers are D.El.Ed qualified, essential for the effective teaching techniques.</li>
                <li>Our teachers conduct regular surveys in the interest to improve student learning.</li>
                <li>
                  Our teachers go through regular training and development courses during summer vacation in the interest to
                  enhance their teaching aptitude.
                </li>
              </ul>
            </div>
          </div>

          {/* Acknowledgement */}
          <div>
            <h3 className="text-lg font-semibold my-5">Acknowledgement to the Parents</h3>
            <p>
              A word of gratitude to all the Parents! Thank you for trusting us with your children. Thank you for your invaluable help
              with the many tasks around the school. Thank you for your support in making our events more enjoyable and successful!
              Thank you for the joy you bring to the children with your presence!
            </p>
            <p>
              Teaching and parenting is of course, a privileged, sacred trust and the closer we work together, the more fruitful the
              opportunities for each and every child continue to be in our school.
            </p>
          </div>
        </div>

      </section>

      {/* Timing section */}

      <section className="px-4 py-16 bg-white space-y-16 text-gray-700 text-[15px] leading-relaxed" id="timing">
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            <span className="border-l-4 border-red-600 pl-2 mr-2">School</span>
            Timings
          </h2>

          {/* Timing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nursery & KG */}
            <div className="bg-white rounded py-12 text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3">
              <h3 className="text-lg font-bold mb-3">Classes Nursery and KG</h3>
              <p>Monday to Friday</p>
              <p>08.15 am to 11.15 am</p>
              <p className="mt-2">Saturday</p>
              <p>Closed</p>
            </div>

            {/* Class I to X */}
            <div className="bg-white rounded py-12 text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3">
              <h3 className="text-lg font-bold mb-3">Class I to X</h3>
              <p>Monday to Friday</p>
              <p>08.15 am to 02.00 pm</p>
              <p className="mt-2">Saturday</p>
              <p>08.15 am to 12.00 pm</p>
            </div>

            {/* Sunday and Holidays */}
            <div className="bg-white rounded py-12 text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3"
            >
              <h3 className="text-lg font-bold mb-3">Sunday and Holidays</h3>
              <p>The school office will remain closed.</p>
              <p>Official works will not be considered on holidays.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Uniform section */}

      <section className="px-4 py-16 bg-white space-y-16 text-gray-700 text-[15px] leading-relaxed" id="uniform">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">SCHOOL</span> <span className="font-normal">UNIFORM</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Boys */}
            <div className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.08)]">
              <div className="py-8 bg-linear-to-r from-red-950 to-red-700 text-white text-center text-2xl font-bold">Boys</div>
              <ul>
                {[
                  "Grey Pant",
                  "White Shirt",
                  "Black Shoes",
                  "Maroon Socks",
                  "School Monogram",
                  "Maroon Tie",
                  "Grey Sweater"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 text-center ${idx % 2 !== 0 ? "bg-gray-200" : "bg-white"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Girls */}
            <div className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.08)]">
              <div className="py-8 bg-linear-to-r from-red-950 to-red-700 text-white text-center text-2xl font-bold">Girls</div>
              <ul>
                {[
                  "Grey Skirt (Pleated)",
                  "Red Ribbon/Hair Band",
                  "White Shirt",
                  "Black Shoes",
                  "Maroon Socks",
                  "School Monogram",
                  "Maroon Tie",
                  "Grey Sweater"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 text-center ${idx % 2 !== 0 ? "bg-gray-200" : "bg-white"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PT Dress */}
            <div className="rounded-lg overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.08)]">
              <div className="py-8 bg-linear-to-r from-red-950 to-red-700 text-white text-center text-2xl font-bold">PT Dress</div>
              <ul>
                {[
                  "White Pants for Boys",
                  "White Skirts (Pleated) for Girls",
                  "White Ribbon/Hair Band for Girls",
                  "House T. Shirt",
                  "White Canvas Shoes",
                  "White Socks"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 text-center ${idx % 2 !== 0 ? "bg-gray-200" : "bg-white"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules section */}

      <section className="py-16 px-4 bg-white" id="rules">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Text + Button */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">Rules and Regulations</h2>
            <a
              href="/rules-and-regulations.pdf" // <-- Replace with actual file path
              download
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded"
            >
              Download
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1">
            <img
              src="/rules-image.jpg" // <-- Replace with your actual image path
              alt="Rules and Regulations"
              className="w-full shadow-[0_0_25px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}

export default page