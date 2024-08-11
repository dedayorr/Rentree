import React, { useEffect } from "react";
import "./sections.css";
import "../../../marquee/Marquee";
import Marquee from "../../../marquee/Marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const SectionOne = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div className="mt-[20%]">
      <Marquee text="HOTELS - APARTMENTS - BOAT CRUISE - EVENT CENTERS" />
      <div
        ref={ref}
        className={`animated-element ${inView ? 'in-view' : ''} bg-[#F3CA52] py-[10%] text-white px-[5%] `}
      >
        <h2 className=" text-primaryColor font-bold text-[30px] animate__animated animate__bounce">ABOUT</h2>
        <hr className=" bg-black h-[5px] w-[10%] mb-[5%]" />
        <p className=" text-justify ">
          Welcome to Rentree, the premier platform designed to simplify the
          process of booking accommodations and renting spaces in Lagos.{" "}
        </p>
        <h4 className="">How we are unique</h4>
      </div>
    </div>
  );
};
