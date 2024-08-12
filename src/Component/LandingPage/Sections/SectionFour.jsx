import React from "react";
import "./sections.css";

function SectionFour() {
  return (
    <div className="my-[10%] mx-[5%] ">
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
      <div>
        <div className="">
          Email :{" "}
          <span className="text-primaryColor underline">rentree@email.com</span>
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
    </div>
  );
}

export default SectionFour;
