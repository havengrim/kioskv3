import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_2015_logo.svg", // Google
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo_2022.svg", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/Facebook_Logo_2023.png", // Facebook
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Adobe_logo_2022.svg", // Adobe
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Slack_Icon_2020.png", // Slack
  ];

  // Fallback handler in case the image doesn't load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/150"; // Fallback image if the logo doesn't load
  };

  return (
    <Marquee speed={50} gradient={false} className="mt-20">
      {brandLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Brand Logo ${index + 1}`}
          className="w-36 h-auto mx-4"
          onError={handleError} // Handle image loading error
        />
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
