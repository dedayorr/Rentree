import React from "react";
import "./sections.css";

const SectionTwo = () => {
  return (
    <div className="my-[20%] lg:my-[5%]">
      <div className="image-slider">
        <img
          className="slide-image mx-auto "
          src="./phone-frame-3.png"
          alt="phone-frame"
        />
        <img
          className="slide-image mx-auto "
          src=" ./phone-frame-1.png"
          alt="phone-frame"
        />
        <img
          className="slide-image mx-auto "
          src=" ./phone-frame-2.png"
          alt="phone-frame"
        />
      </div>

      <div id="services" className="py-[15%] px-[5%] lg:py-[10%]">
        <div>
          {" "}
          <h2 className=" text-primaryColor font-bold text-[25px] md:text-[30px] lg:text-[40px]">
            What we offer
          </h2>
          <hr className=" bg-black h-[5px] w-[30%] mb-[5%] lg:w-[10%]" />
          
        </div>
        <div >
          <div className="text-justify md:text-[20px]">
            At Rentree, we pride ourselves on offering a variety of options to
            suit every occasion:
          </div>
          <div className="flex flex-col gap-[30px] mt-[10%] lg:flex-row lg:w-[100%] lg:mt-[5%]">
            <div className="border-[4px] border-black rounded-[15px] w-full">
              <div className="text-[24px] font-bold tracking-widest text-center py-[5%] bg-primaryColor rounded-tl-[10px] rounded-tr-[10px]">
                APARTMENTS
              </div>
              <ul className="flex flex-col gap-[20px] p-5 overflow-auto h-[400px]">
                <li className="border p-3 text-center">Apartment 1</li>
                <li className="border p-3 text-center">Apartment 2</li>
                <li className="border p-3 text-center">Apartment 3</li>
                <li className="border p-3 text-center">Apartment 4</li>
                <li className="border p-3 text-center">Apartment 5</li>
                <li className="border p-3 text-center">Apartment 6</li>
                <li className="border p-3 text-center">Apartment 7</li>
                <li className="border p-3 text-center">Apartment 8</li>
                <li className="border p-3 text-center">Apartment 9</li>
              </ul>
            </div>

            <div className="border-[4px] border-black rounded-[15px] w-full ">
              <div className="text-[24px] font-bold tracking-widest text-center py-[5%] bg-primaryColor rounded-tl-[10px] rounded-tr-[10px]">
                HOTELS
              </div>
              <ul className="flex flex-col gap-[20px] p-5 overflow-auto h-[400px]">
                <li className="border p-3 text-center">Hotel 1</li>
                <li className="border p-3 text-center">Hotel 2</li>
                <li className="border p-3 text-center">Hotel 3</li>
                <li className="border p-3 text-center">Hotel 4</li>
                <li className="border p-3 text-center">Hotel 5</li>
                <li className="border p-3 text-center">Hotel 6</li>
                <li className="border p-3 text-center">Hotel 7</li>
                <li className="border p-3 text-center">Hotel 8</li>
                <li className="border p-3 text-center">Hotel 9</li>
              </ul>
            </div>

            <div className="border-[4px] border-black rounded-[15px] w-full ">
              <div className="text-[24px] font-bold tracking-widest text-center py-[5%] bg-primaryColor rounded-tl-[10px] rounded-tr-[10px]">
                BOAT
              </div>
              <ul className="flex flex-col gap-[20px] p-5 overflow-auto h-[400px]">
                <li className="border p-3 text-center">Boat 1</li>
                <li className="border p-3 text-center">Boat 2</li>
                <li className="border p-3 text-center">Boat 3</li>
                <li className="border p-3 text-center">Boat 4</li>
                <li className="border p-3 text-center">Boat 5</li>
                <li className="border p-3 text-center">Boat 6</li>
                <li className="border p-3 text-center">Boat 7</li>
                <li className="border p-3 text-center">Boat 8</li>
                <li className="border p-3 text-center">Boat 9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
