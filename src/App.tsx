import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "@/components/AdvancedBanner";
import "./index.css";
import 'google-fonts'
import Navbar from "./components/Navbar";
import StickyBar from "./components/StickyBar";
import Sections from "./components/Sections";

export default function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <StickyBar />
      <AdvancedBannerTop />
      <Sections />
    </ParallaxProvider>
  );
}
