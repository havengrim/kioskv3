import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "@/components/AdvancedBanner";
import "./index.css";
import 'google-fonts'
import Navbar from "./components/Navbar";
import StickyBar from "./components/StickyBar";
import Sections from "./components/Sections";
import MarqueeComponent from "./components/ui/marquee";
import Slider from "./components/ui/slider";

export default function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <StickyBar />
      <AdvancedBannerTop />
      <Sections />
      <MarqueeComponent />
      <Slider />
    </ParallaxProvider>
  );
}
