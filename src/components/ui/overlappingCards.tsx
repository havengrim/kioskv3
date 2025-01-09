import { IoEyeOutline } from 'react-icons/io5';

const OverlappingCards = () => {
  const colors = [
    "bg-red-500", // Card 1: Red
    "bg-blue-500", // Card 2: Blue
    "bg-green-500", // Card 3: Green
    "bg-yellow-500", // Card 4: Yellow
  ];

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      <div className="relative w-[500px] h-[400px]">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`absolute w-[300px] h-[200px] rounded-lg shadow-lg transition-transform duration-500 transform cursor-pointer ${color} 
              ${
                index === 0
                  ? "top-0 -left-20 rotate-[-15deg] hover:translate-x-10 hover:translate-y-10"
                  : index === 1
                  ? "top-10 left-44 rotate-[10deg] hover:translate-x-[-15px] hover:translate-y-15"
                  : index === 2
                  ? "top-56 left-48 rotate-[-5deg] hover:translate-x-10 hover:translate-y-[-20px]"
                  : "top-60 -left-20 rotate-[5deg] hover:translate-x-[-10px] hover:translate-y-[-15px]"
              }`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
              <IoEyeOutline className="text-2xl text-white" />
            </div>
            </div>
            
            {/* Icon */}
    
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlappingCards;
