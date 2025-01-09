import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "@/components/AdvancedBanner";
import "./index.css";
import 'google-fonts'
import Navbar from "./components/Navbar";
import StickyBar from "./components/StickyBar";
import Sections from "./components/Sections";
import Slider from "./components/ui/slider";
import Paragraph from "./components/ui/paragraph";
import OverlappingCards from "./components/ui/overlappingCards";


export default function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <StickyBar />
      <AdvancedBannerTop />
      <Sections />
      <Slider />
      <Paragraph />
      <OverlappingCards />
    </ParallaxProvider>
  );
}
