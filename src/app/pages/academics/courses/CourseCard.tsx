
interface Props {
  name: string;
  images: string;
}
const CourseCard = ({ name, images }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden w-48 border-4 border-yellow-500">
      <img src={images} alt="Class" className="w-full h-30 object-cover" />
      <div className="bg-blue-200 text-gray-800 p-4 text-center w-full">
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default CourseCard;