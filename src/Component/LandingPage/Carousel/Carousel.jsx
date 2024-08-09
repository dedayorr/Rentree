import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows for a cleaner look
  };

  const slidesData = [
    {
      image: "https://via.placeholder.com/1200x600",
      text: "Slide 1 Text",
    },
    {
      image: "https://via.placeholder.com/1200x600",
      text: "Slide 2 Text",
    },
    {
      image: "https://via.placeholder.com/1200x600",
      text: "Slide 3 Text",
    },
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
