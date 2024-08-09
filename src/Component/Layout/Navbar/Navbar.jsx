import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Player } from "@lottiefiles/react-lottie-player";
import { BsFillTelephoneFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../LandingPage/Carousel/Carousel";

function Navbar() {
  return (
    <div className="relative">
      {" "}
      <Carousel />
      {/* Navigation - mobile view */}
      <div className="top flex justify-between items-end mt-[20px] mx-[3%] h-[80px] md:hidden">
        <div className="logo ">
          <img
            className="md:w-[100px] md:h-[90px]"
            src="./Rentree-Logo1.png"
            alt="logo"
          />
        </div>
        <div className="top-one burger-icon md:hidden ">
          <GiHamburgerMenu />
        </div>
      </div>
      {/* navigation - desktop view */}
      <div className=" hidden md:flex justify-between items-center mx-[5%] mt-[4%]">
        <div className="logo ">
          <img
            className="md:w-[100px] md:h-[90px]"
            src="./Rentree-Logo1.png"
            alt="logo"
          />
        </div>
        <ul className="hidden bg-white md:mx-[20px] md:flex justify-between text-[#1a4d2e] font-semibold h-[60px] items-center rounded-[50px] gap-[40px] text-[20px] px-[7%] lg:px-[5%] lg:text-[18px] lg:gap-[100px] z-50">
          <li className="hover:text-[20px] cursor-pointer">Company</li>
          <li className="hover:text-[20px] cursor-pointer">Services</li>
          <li className="hover:text-[20px] cursor-pointer">FAQ</li>
        </ul>

        <div className=" hidden md:flex justify-center items-center text-[25px] text-primaryColor bg-white h-[60px] w-[60px] rounded-[50px] hover:bg-[#1a4d2e] hover:text-white cursor-pointer z-50">
          <BsFillTelephoneFill />
        </div>
      </div>
      <div className="lg:w-[70%] mx-auto mt-[45px] lg:mt-[110px]">
        <h1 className="hero-text text-white text-[27px] md:text-[40px] lg:text-[60px]">WELCOME TO <span className="text-primaryColor">RENTREE</span></h1>
        <p className="text-white text-center md:text-[20px] lg:text-[20px] lg:mt-[30px] lg:tracking-[5px]">
          Your go-to platform for booking <span className="text-primaryColor font-semibold">hotels</span>, renting <span className="text-primaryColor font-semibold">apartments</span>, event
          centers, and offering <span className="text-primaryColor font-semibold">boats</span> for water voyages, ensuring your
          experience is seamless and memorable.
        </p>
      </div>
      <div className="hero-buttons flex flex-col gap-[10px] justify-center items-center mt-[80px] md:mt-[50px] md:gap-[20px] lg:gap-[50px] lg:mt-[140px] lg:flex-row">
        <button className="hero-button bg-primaryColor w-[65%] h-[45px] text-[#f6eab2c8] rounded-[5px] flex justify-center items-center gap-[10px] lg:w-[25%] lg:h-[60px] lg:rounded-[15px] lg:text-[20px] lg:hover:bg-white lg:hover:text-primaryColor">
          <svg
            className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.4em"
            viewBox="0 0 256 283"
          >
            <path
              fill="#ea4335"
              d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
            ></path>
            <path
              fill="#fbbc04"
              d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
            ></path>
            <path
              fill="#4285f4"
              d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
            ></path>
            <path
              fill="#34a853"
              d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
            ></path>
          </svg>
          <svg
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="0.91em"
            height="1em"
            viewBox="0 0 256 283"
          >
            <path
              fill="#ea4335"
              d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
            ></path>
            <path
              fill="#fbbc04"
              d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
            ></path>
            <path
              fill="#4285f4"
              d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
            ></path>
            <path
              fill="#34a853"
              d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
            ></path>
          </svg>
          <p >Download on Google Play</p>
        </button>
        <button className="hero-button  bg-primaryColor w-[65%] h-[45px] text-[#f6eab2c8] rounded-[5px] flex justify-center items-center gap-[10px] lg:w-[25%] lg:h-[60px] lg:rounded-[15px] lg:text-[20px] lg:hover:bg-white lg:hover:text-primaryColor">
          <svg
            className="hidden md:block hover:text-primaryColor"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.4em"
            viewBox="0 0 56 56"
          >
            <path
              fill="currentColor"
              d="M41.937 29.513c.07 7.552 6.625 10.065 6.698 10.097c-.056.178-1.047 3.582-3.454 7.098c-2.08 3.04-4.238 6.07-7.64 6.132c-3.34.061-4.415-1.982-8.235-1.982s-5.013 1.92-8.177 2.043c-3.282.125-5.782-3.287-7.88-6.316c-4.285-6.196-7.56-17.508-3.162-25.144c2.184-3.792 6.089-6.193 10.326-6.254c3.223-.062 6.266 2.168 8.236 2.168s5.667-2.682 9.554-2.288c1.627.068 6.194.657 9.127 4.95c-.236.147-5.45 3.182-5.393 9.496m-6.28-18.545C37.4 8.858 38.573 5.922 38.253 3c-2.512.101-5.55 1.674-7.352 3.782c-1.614 1.867-3.029 4.856-2.647 7.72c2.8.216 5.66-1.423 7.403-3.534"
            ></path>
          </svg>
          <svg
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 56 56"
          >
            <path
              fill="currentColor"
              d="M41.937 29.513c.07 7.552 6.625 10.065 6.698 10.097c-.056.178-1.047 3.582-3.454 7.098c-2.08 3.04-4.238 6.07-7.64 6.132c-3.34.061-4.415-1.982-8.235-1.982s-5.013 1.92-8.177 2.043c-3.282.125-5.782-3.287-7.88-6.316c-4.285-6.196-7.56-17.508-3.162-25.144c2.184-3.792 6.089-6.193 10.326-6.254c3.223-.062 6.266 2.168 8.236 2.168s5.667-2.682 9.554-2.288c1.627.068 6.194.657 9.127 4.95c-.236.147-5.45 3.182-5.393 9.496m-6.28-18.545C37.4 8.858 38.573 5.922 38.253 3c-2.512.101-5.55 1.674-7.352 3.782c-1.614 1.867-3.029 4.856-2.647 7.72c2.8.216 5.66-1.423 7.403-3.534"
            ></path>
          </svg>
          <p>Download on App Store</p>
        </button>
      </div>
      {/* <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ height: "300px", width: "300px" }}
        ></Player> */}
    </div>
  );
}

export default Navbar;
