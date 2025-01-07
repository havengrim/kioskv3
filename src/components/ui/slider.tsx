import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

interface SlideData {
  content: string; // This can be the text or any content for each slide
}

interface SwiperProps {
  slides: SlideData[]; // Array of slide data
}

const AutoSwiper = ({ slides }: SwiperProps) => {
  return (
    <Swiper className="mySwiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

// Example usage of the AutoSwiper component
const Slider = () => {
  const slidesData: SlideData[] = [
    { content: "Slide 1" },
    { content: "Slide 2" },
    { content: "Slide 3" },
    { content: "Slide 4" },
    { content: "Slide 5" },
    { content: "Slide 6" },
    { content: "Slide 7" },
    { content: "Slide 8" },
    { content: "Slide 9" },
  ];

  return <AutoSwiper slides={slidesData} />;
};

export default Slider;
