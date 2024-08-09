import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Disable arrows for a cleaner look
  };

  const slidesData = [
    {
      image: "../apartment-bg.png",
      text: "Slide 1 Text",
    },
    {
      image: "../hotel-bg.png",
      text: "Slide 2 Text",
    },
    {
      image: "../boat-bg.png",
      text: "Slide 3 Text",
    },
    {
      image: "../event-bg.png",
      text: "Slide 4 Text",
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
              className="w-full h-[550px] object-cover md:h-[600px] lg:h-[700px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primaryColor bg-opacity-20">
              {/* <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {slide.text}
              </h2> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
