import { IoReorderTwoOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import images from "@/assets/images";

const Navbar = () => {
  return (
    <div className="text-3xl text-white fixed top-0 z-50 flex justify-between w-full p-4 items-center bg-transparent">
      {/* Hamburger menu icon for mobile */}
      <div className="bg-white p-2 rounded-full block sm:block">
        <IoReorderTwoOutline className="text-black text-2xl" />
      </div>
      
      {/* Logo */}
      <div>
        <img src={images.logov2} className="w-20 h-20" alt="logo" />
      </div>
      
      {/* "Get In Touch" button */}
      <div className="hidden lg:block">
        <Button className="bg-white text-black hover:bg-gray-300 rounded-full">Get In Touch</Button>
      </div>
    </div>
  );
};

export default Navbar;
