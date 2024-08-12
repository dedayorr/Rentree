import React from "react";
import "./sections.css";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "animate.css/animate.min.css";

export const SectionOne = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div id="about" className="mt-[20%] md:mt-[10%] lg:mt-[3%]">
     
  
      <div className="scrolling-text">
        <div className="scroll-content ">HOTELS - APARTMENTS - BOAT CRUISE  </div>
      </div>
      <div
        ref={ref}
        className={`animated-element ${
          inView ? "in-view" : ""
        } bg-[#F3CA52] py-[10%] text-white px-[5%] lg:py-[5%] flex gap-[5%]`}
      >
        <div className="w-full lg:w-1/2">
          {" "}
          <h2 className=" text-primaryColor font-bold text-[25px] md:text-[30px] lg:text-[40px]">
            ABOUT
          </h2>
          <hr className=" bg-black h-[5px] w-[10%] mb-[5%] lg:w-[10%]" />
          <div className="about">
            {" "}
            <p className=" text-justify md:text-[20px]">
              Welcome to Rentree, the premier platform designed to simplify the
              process of booking accommodations and renting spaces in Nigeria.{" "}
            </p>
            <br />
            <img
              className=" lg:hidden"
              src="./about-image.png"
              alt="info-image"
            />
            <br />
            <div>
              {" "}
              <h4 className="text-primaryColor font-semibold text-[20px] mb-[5%] md:text-[25px]">
                How we are unique
              </h4>
              <p className="text-justify md:text-[20px]">
                Founded with the vision of providing a hassle-free experience,
                Rentree connects you with the best hotels, apartments, and boats
                to cater to your diverse needs. Whether you are planning a
                vacation, organizing a party, or looking for a serene getaway,
                Rentree ensures you find the perfect spot.
              </p>
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block lg:w-1/2 object-cover"
          src="./about-image.png"
          alt="about-image"
        />
      </div>
    </div>
  );
};
