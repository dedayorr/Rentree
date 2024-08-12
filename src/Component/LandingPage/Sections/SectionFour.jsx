import React from "react";
import "./sections.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";

function SectionFour() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`animated-element ${
        inView ? "in-view" : ""
      } my-[10%] mx-[5%] lg:my-[5%]`}
    >
      <div>
        <h4 className="text-primaryColor font-bold text-[25px] md:text-[30px] lg:text-[40px]">
          CONTACT
        </h4>
        <hr className=" bg-black h-[5px] w-[19%] mb-[5%] lg:w-[10%]" />
        <p id="contact" className=" text-justify md:text-[20px] mb-[5%]">
          We are here to assist you with any questions or concerns you may have.
          Please feel free to reach out to us:
        </p>
      </div>
      <div className="lg:flex lg:items-center flex-row-reverse">
        {" "}
        <div className="w-full lg:w-1/2 lg:text-[20px]">
          <div className="">
            Email :{" "}
            <span className="text-primaryColor underline">
              rentree@email.com
            </span>
          </div>
          <div className="">
            Phone :{" "}
            <span className="text-primaryColor underline">+234 xxxx xxxx</span>
          </div>
          <p className="my-[5%]">Follow us on social media:</p>
          <div className="">
            Facebook :{" "}
            <span className="text-primaryColor underline">facebook link</span>
          </div>
          <div className="">
            Instagram :{" "}
            <span className="text-primaryColor underline">Instagram link</span>
          </div>
        </div>
        <Player
          className="w-full lg:w-1/2 hidden lg:block"
          autoplay
          loop
          src="https://lottie.host/2f56a1d2-773d-4a1c-b619-4f5d4f6ac05c/0tSL0jbvRB.json"
          style={{
            height: "500px",
            width: "500px",
            background: "transparent",
          }}
        ></Player>
      </div>
    </div>
  );
}

export default SectionFour;
