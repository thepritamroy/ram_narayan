import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <main>

      <Navbar/>
      
      <div className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image-1.jpg')", height: "500px", width: "100%", backgroundSize: "cover" }}>

        <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm z-0"></div>

        <h1 className="absolute text-white text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold top-2/3 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-slide-up-to-down">Contact us</h1>
      </div>
      
      <section className="bg-[#1b1b1b] text-white py-40 px-4 mb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
                  
          <div>
            <div className="flex justify-center md:justify-start mb-2">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Phone</h4>
            <p className="text-sm text-gray-300">0361- 2540583 / +91 9435044456</p>
            <p className="text-sm text-gray-300 mt-2">
              School Office – 7:30 am – 3:00 pm (Mon–Fri) <br />
              7:30 am – 12:00 pm (Sat)
            </p>
          </div>

        
          <div>
            <div className="flex justify-center md:justify-start mb-2">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <p className="text-sm text-gray-300">
              principal@ramnarayankaliganj.net /<br />
              ramnarayanschool@yahoo.in
            </p>
          </div>

          
          <div>
            <div className="flex justify-center md:justify-start mb-2">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Location</h4>
            <p className="text-sm text-gray-300">
              RAM NARAYAN SCHOOL <br />
              Panbazar, Guwahati–781001
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-red-500 hover:underline"
            >
              View On Google Map
            </a>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-gray-100">
        <div className=" px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
          <div className="w-full h-[450px] shadow-lg rounded overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458382.85615047195!2d91.05637718906249!3d26.1603493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a4527deafb191%3A0xa84e3245159bc62f!2sOYO%20Assam%20Inn!5e0!3m2!1sen!2snl!4v1753844618822!5m2!1sen!2snl" width="100%" height="450" style={{border:0}} allowFullScreen
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}

export default page
