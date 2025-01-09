import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import { faker } from "@faker-js/faker"; // Import Faker.js
import "swiper/css";
// import "swiper/css/parallax"; // Import Swiper parallax styles

const AutoSlider = () => {
  // Generate random images for the slides
  const slides = Array.from({ length: 3 }, () =>
    faker.image.url({ width: 1920, height: 1080 }) // Generate random image URLs
  );

  return (
    <div className="w-full h-[100vh] mt-40">
      <Swiper
        modules={[Autoplay, Parallax]} // Include the Parallax module
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        parallax={true} // Enable parallax effect globally
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-[100vh] w-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                data-swiper-parallax="-20%" // Adjust this value to control parallax effect
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
