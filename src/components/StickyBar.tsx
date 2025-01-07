import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
const StickyBar = () => {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
            <FaInstagram className="text-white h-5 w-6" />
            <CiFacebook  className="text-white h-5 w-6" />
            <IoMdGlobe className="text-white h-5 w-6" />
      </div>
    </div>
  )
}

export default StickyBar
