import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Player } from "@lottiefiles/react-lottie-player";

function Navbar() {
  return (
    <>
      {" "}
      <div className="Nav-body">
        <div className="overlay"><h1 className="hero-text">Your go-to platform for booking hotels and renting apartments in Lagos</h1></div>
        <div className="top">
          <div className="logo">Rentree Logo</div>
          <div className="top-one burger-icon">
            <GiHamburgerMenu />
          </div>
        </div>
        

        {/* <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ height: "300px", width: "300px" }}
        ></Player> */}

        
      </div>
    </>
  );
}

export default Navbar;
