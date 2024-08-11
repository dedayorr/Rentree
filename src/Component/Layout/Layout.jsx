import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
import Page from "../LandingPage/Page";
import "./layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FcServices } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };

  // const modalOpen = () => {
  //   setOpenModal(true);
  // };

  return (
    <div className="">
      {navOpen && (
        <div className="sidebar bg-black h-screen sticky top-0 w-full z-50 animate-in">
          <div
            onClick={closeSideBAr}
            className=" bg-primaryColor text-[26px] text-[#F6E9B2] p-[8px] w-[40px] rounded-[50px] absolute top-[7%] right-[7%]"
          >
            <IoCloseSharp />
          </div>

          <div className="pt-[25%]">
            {" "}
            <a href="/">
              {" "}
              <img
                className="mx-auto  w-[130px] h-[120px] md:w-[100px] md:h-[90px]"
                src="./Rentree-Logo1.png"
                alt="logo"
              />
            </a>
            <ul className="text-white w-[90%] mx-auto flex flex-col ">
              <li
                onClick={closeSideBAr}
                className=" flex items-center text-[25px] mt-[15%] gap-[10%] "
              >
                <PiBuildingApartmentFill className="text-secondaryColor text-[45px]" />
                <a href="#about">Company</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <FcServices className="text-secondaryColor text-[45px]" />
                <a href="#services"> Services</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <FcFaq className="text-secondaryColor text-[45px]" />
                <a href="#faq">FAQ</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <FcPhone className="text-secondaryColor text-[45px]" />
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="layout sticky top-0 z-40 mt-[7%] lg:mt-[1%]">
        <div className="top z-50 flex justify-between items-end mt-[px] mx-[3%] h-[80px] md:hidden">
          <div className="logo ">
            <a href="/">
              {" "}
              <img
                className="md:w-[100px] md:h-[90px]"
                src="./Rentree-Logo1.png"
                alt="logo"
              />
            </a>
          </div>
          <div onClick={openSideBar} className="top-one burger-icon md:hidden ">
            <GiHamburgerMenu />
          </div>
        </div>

        <div className="sticky top-0 hidden md:flex justify-between items-center mx-[5%] mt-[4%]">
          <div className="logo ">
            <a href="/">
              {" "}
              <img
                className="md:w-[100px] md:h-[90px]"
                src="./Rentree-Logo1.png"
                alt="logo"
              />
            </a>
          </div>
          <ul className="hidden bg-white md:mx-[20px] md:flex justify-between text-[#1a4d2e] font-semibold h-[60px] items-center rounded-[50px] gap-[40px] text-[20px] px-[7%] lg:px-[5%] lg:text-[18px] lg:gap-[100px] z-50">
            <li className="hover:text-[20px] cursor-pointer">
              {" "}
              <a href="#about">Company</a>
            </li>
            <li className="hover:text-[20px] cursor-pointer">
              <a href="#services"> Services</a>
            </li>
            <li className="hover:text-[20px] cursor-pointer">
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <div className=" hidden md:flex justify-center items-center text-[25px] text-primaryColor bg-white h-[60px] w-[60px] rounded-[50px] hover:bg-[#1a4d2e] hover:text-white cursor-pointer z-50">
            <BsFillTelephoneFill />
          </div>
        </div>
      </div>
      <Navbar />
      <Page />

      {/* <Footer /> */}
    </div>
  );
}
