import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "@/components/AdvancedBanner";
import "./index.css";
import 'google-fonts'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <AdvancedBannerTop />
    </ParallaxProvider>
  );
}
