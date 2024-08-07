import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Page from "../LandingPage/Page";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}
