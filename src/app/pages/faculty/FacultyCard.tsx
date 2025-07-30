
interface Props {
  name: string;
  description: string;
  images: string;
}

const FacultyCard = ({ name, description, images }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden max-w-md fadeInUp animated-fast">
      <img src={images} alt="Faculty" className="w-full h-80 object-cover" />
      <div className="bg-blue-950 text-white p-8 text-center w-full">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">class : {description}</p>
      </div>
    </div>
  );
};

export default FacultyCard;