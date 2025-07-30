"use client"

interface Props{
  img: string
  title : string
}
const ImageCard = ({img,title}:Props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-[300px] fadeInUp animated-fast">
      <img src={img} alt={title} className="w-full h-50 object-cover cursor-pointer" 
        onClick={() => window.open(img, '_blank')}
      />         
    </div>
  )
}

export default ImageCard
