import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Page from "../LandingPage/Page";
import "./layout.css"

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Page />
      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}
