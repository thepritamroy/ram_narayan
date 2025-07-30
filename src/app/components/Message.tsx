import Link from "next/link";


const Message = () => {
  return (
    <section className="bg-[#03033b] text-white px-40 max-xl:px-24 max-lg:px-16 max-md:px-8 py-16">
      <h1 className="text-4xl max-sm:text-2xl mb-5 font-extrabold">Principal's Message</h1>
      <div className="flex items-center max-lg:flex-col max-lg:gap-5">
        <div>
          <img src="/principal-image.jpg" alt="Principal" className="w-[400px] rounded" />
        </div>
        <div className="ml-5 text-[17px] flex-2 text-[#ffffffb1] flex flex-col gap-5">
          <div>
            <p className='italic'><strong>Dear Friends,</strong></p>
            <p>Welcome to Ram Narayan High School, Guwahati!</p>
          </div>
          <p>I gladly welcome all of you to our enriching website, which I am sure will serve as an essential interactive tool for all of you to acquaint yourselves with the large and extended Ram Narayan family.
          </p>

          <p>Over more than seven decades of relentless academic endeavour and brilliance, our school has become a much sought after educational institution that...</p>
          <Link href="/pages/about/#principal-desk" className="bg-red-700 text-white px-5 py-4 mt-2 rounded-xs hover:bg-red-800 w-36 cursor-pointer">Read More</Link >
        </div>
      </div>
    </section>
  );
};

export default Message;