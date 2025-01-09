import images from '@/assets/images'; // Ensure this imports your images correctly
import { IoEyeOutline } from 'react-icons/io5';

const OverlappingCards = () => {
  const imageSources = [
    images.card1, // Card 1 Image
    images.card2, // Card 2 Image
    images.card4, // Card 4 Image
    images.card3, // Card 3 Image
  ];

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center mt-60">
      <div className="relative w-full max-w-[600px] h-[700px] sm:max-w-[500px] sm:h-[600px]">
        {imageSources.map((imageSrc, index) => (
          <div
            key={index}
            className={`absolute w-full h-full sm:w-[500px] sm:h-[375px] rounded-lg shadow-xl transition-transform duration-500 transform cursor-pointer
              ${
                index === 0
                  ? "-top-20 -left-40 rotate-[-15deg] hover:translate-x-10 hover:translate-y-10"
                  : index === 1
                  ? "-top-10 left-44 rotate-[10deg] hover:translate-x-[-15px] hover:translate-y-15"
                  : index === 2
                  ? "top-56 left-80 rotate-[-5deg] hover:translate-x-10 hover:translate-y-[-20px]"
                  : "top-60 -left-48 rotate-[5deg] hover:translate-x-[-10px] hover:translate-y-[-15px]"
              }`}
          >
            {/* Image */}
            <img src={imageSrc} alt={`Card ${index + 1}`} className="w-full h-full object-cover rounded-lg" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                <IoEyeOutline className="text-2xl text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlappingCards;
