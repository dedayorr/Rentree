import React, { useState } from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Modal } from "../../../Modal/Modal";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "./image/logo512.png";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  const modalOpen = () => {
    setOpenModal(true);
  };

  return (
    <div className="bg-primaryColor py-[15%] lg:py-[2%]">
      <a href="/">
        {" "}
        <img
          className="mx-auto  w-[130px] h-[120px] md:w-[100px] md:h-[100px] rounded"
          src={logo}
          alt="logo"
        />
      </a>

      <div className="flex gap-[10%] justify-center my-[10%] lg:my-[2%]">
        <a
          href="https://www.instagram.com/rentree_app"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="cursor-pointer text-[50px] text-secondaryColor" />
        </a>{" "}
        <BsFacebook className="cursor-pointer text-[50px] text-secondaryColor" />
        <a href="mailto:rentreeapp9@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail className="cursor-pointer text-[50px] text-secondaryColor" />
        </a>
      </div>

      <div className="heroBar hero-buttons flex flex-col gap-[10px] justify-center items-center mt-[80px] md:mt-[50px] md:gap-[20px] lg:gap-[50px] lg:mt-[50px] lg:flex-row">
        <button
          onClick={modalOpen}
          className="hero-button bg-white w-[65%] h-[45px] text-primaryColor rounded-[5px] flex justify-center items-center gap-[10px] lg:w-[25%] lg:h-[60px] lg:rounded-[15px] lg:text-[20px] lg:hover:text-primaryColor lg:hover:bg-secondaryColor"
        >
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
          <p>Download on Google Play</p>
        </button>
        <button
          onClick={modalOpen}
          className="hero-button  bg-white w-[65%] h-[45px] text-primaryColor rounded-[5px] flex justify-center items-center gap-[10px] lg:w-[25%] lg:h-[60px] lg:rounded-[15px] lg:text-[20px] lg:hover:text-primaryColor lg:hover:bg-secondaryColor"
        >
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

      {/* ========Coming soon modal======== */}
      {openModal && (
        <Modal>
          <div className="relative animate-fadeIn bg-primaryColor  w-[90%] md:w-[80%] md:h-[50%] md:rounded-[25px] lg:w-[50%] lg:h-[70%] rounded-[15px]">
            {/* <div >
              {" "}
              <IoCloseSharp className="bg-white rounded-full p-1 absolute top-[5%] right-[5%] font-bold text-[30px] md:text-[30px]" />
            </div> */}
            <Player
              className=""
              autoplay
              loop
              src="https://lottie.host/79df1c42-e7be-44a8-aff2-c9b411d1649f/wUSYcROBzG.json"
              style={{
                height: "300px",
                width: "300px",
                background: "transparent",
              }}
            ></Player>
            <p className="text-[35px] font-bold text-white md:text-[45px] text-center">
              Coming Soon...
            </p>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-white text-primaryColor font-semibold w-[30%] h-[40px] my-[5%] mx-auto flex justify-center items-center hover:bg-tertiaryColor md:text-[20px]"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Footer;
