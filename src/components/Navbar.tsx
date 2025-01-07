import { FiAlignLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import images from "@/assets/images";

const Navbar = () => {
  return (
    <div className=" text-3xl text-white fixed top-0 z-50 flex justify-between w-full p-6 items-center">
      <div className="bg-white p-4 rounded-full">
        <FiAlignLeft className="text-black text-2xl" />
      </div>
      <div><img src={images.logo} className="w-20 h-20" alt="logo" /></div>
      <div><Button className="bg-white text-black rounded-full">Get In Touch</Button></div>
    </div>
  )
}

export default Navbar
