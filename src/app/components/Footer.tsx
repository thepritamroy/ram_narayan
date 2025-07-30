import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#0d131f] text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo + Address */}
        <div>
          <img src="/logo.png" alt="Don Bosco School Logo" className="w-32 mb-4" /> {/* Replace with actual logo path */}
          <p className="text-sm leading-6 text-gray-300">
            All Correspondence must be addressed to The Principal, Ram Narayan School, Guwahati, Sawkuchi, <br />
            Guwahati-781040, Assam, India <br />
            Affiliated to SEBA
          </p>
        </div>

        {/* School Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-gray-600 w-fit">School</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/pages/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/pages/facilities" className="hover:text-white">Facility</Link></li>
            <li><Link href="/pages/about/#overview" className="hover:text-white">Overview</Link></li>
            <li><Link href="/pages/transport" className="hover:text-white">Transport</Link></li>
            <li><Link href="/pages/contact-us" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-gray-600 w-fit">Get In Touch</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>📞 +91 9604937212</li>
            <li>📞 +91 7896049373</li>
            <li>✉️ ramnarayanguwa@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center text-xs text-gray-500 pt-6">
        All © copyright reserve under Ram Narayan Guwahati | Developed by Pritam 2025
      </div>
    </section>
  );
};

export default Footer;
