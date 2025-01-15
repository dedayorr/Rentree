import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Page from "../LandingPage/Page";
import "./layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FcServices } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi2";
import { Modal } from "../../Modal/Modal";

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const [openContact, setContactOpen] = useState(false);
  const [terms, setTerms] = useState(false);

  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };

  const termsAndCondition = () => {
    setTerms(true);
    setNavOpen(false);
  };

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
                src="./logo512.png"
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
                onClick={termsAndCondition}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <HiDocumentText className="text-red-500 text-[45px]" />
                <p>Terms & Conditions</p>
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
                className="h-[90px] md:w-[100px] md:h-[90px]"
                src="./new-logo-bg.png"
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
                className="md:w-[200%] md:h-[100px] "
                src="./new-logo-bg.png"
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
            <li
              onClick={() => setTerms(true)}
              className="hover:text-[20px] cursor-pointer"
            >
              <p>Terms & Conditions</p>
            </li>
          </ul>

          <div
            onClick={() => setContactOpen(!openContact)}
            className="relative hidden md:flex justify-center items-center text-[25px] hover:bg-[#1a4d2e] hover:text-white text-primaryColor bg-white h-[60px] w-[60px] rounded-[50px]  cursor-pointer z-50"
          >
            <BsFillTelephoneFill className="" />
            {openContact && (
              <div
                className="bg-white absolute flex flex-col top-[105%] p-5 gap-[10px] text-[#1a4d2e]"
                style={{ boxShadow: "rgba(0, 225, 0, 0.5) 0px 5px 15px" }}
              >
                <a className="hover:underline" href="tel:+2348165229144">
                  08165229144
                </a>
                <a className="hover:underline" href="tel:+2349060770017">
                  09060770017
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {terms && (
        <Modal>
          <div
            className="no-scrollbar relative bg-white m-5 overflow-y-scroll py-[15%] px-5 flex flex-col gap-4 rounded-lg text-justify md:pt-[5%] md:w-[50%] md:"
            style={{ maxHeight: "97vh" }}
          >
            <div
              onClick={() => setTerms(false)}
              className=" bg-primaryColor text-[20px] text-[#F6E9B2] p-[4px] w-[30px] rounded-[50px] absolute top-[3%] right-[6%] lg:right-[3%]"
            >
              <IoCloseSharp />
            </div>
            <h1 className="text-primaryColor font-extrabold text-[25px] lg:text-[30px]">
              Terms And Conditions
            </h1>
            <p>
              These Terms and Conditions ("Agreement") govern your use of Our
              platform. By making a booking, you (the "Guest") agree to abide by
              these Terms and Conditions. Please read them carefully.
            </p>{" "}
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Booking and Payment
            </h2>
            1.1 <h3 className="font-semibold text-primaryColor">Reservation</h3>
            <p>
              To secure a booking, a deposit or full payment is required, as
              specified during the booking process. Bookings are not confirmed
              until payment is received and processed.
            </p>
            1.2{" "}
            <h3 className="font-semibold text-primaryColor">Payment Methods</h3>
            <p>
              Payments are accepted through Bank transfers. All payments must be
              made in the currency specified on the platform.
            </p>
            1.3{" "}
            <h3 className="font-semibold text-primaryColor">
              Cancellation and Refund Policy
            </h3>
            <p>
              Cancellation policies vary by booking and are specified at the
              time of reservation. Generally, cancellations made few days before
              the check-in date will receive a full refund, while cancellations
              made a day or few hours before check-in may be subject to partial
              or no refund.
            </p>
            1.4{" "}
            <h3 className="font-semibold text-primaryColor">
              Security Deposit
            </h3>
            <p>
              A refundable security deposit may be required at the time of
              check-in. The deposit will be refunded before check-out, subject
              to an inspection of the Property for damages or missing items.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Check-In and Check-Out
            </h2>
            
            2.1{" "}
            <h3 className="font-semibold text-primaryColor">Check-In Time</h3>
            <p>
              Check-in is available from The time listed by various hosts on the
              arrival date.
            </p>
            2.2{" "}
            <h3 className="font-semibold text-primaryColor">Check-Out Time</h3>
            <p>
              Check-out is by dont by the host as listed on the departure date.
              Late check-out may incur an additional charge.
            </p>
            2.3{" "}
            <h3 className="font-semibold text-primaryColor">Identification</h3>
            <p>
              Guests must provide valid photo identification (e.g., passport,
              driver&apos;s license) upon check-in.
            </p>
            2.4{" "}
            <h3 className="font-semibold text-primaryColor">Keys and Access</h3>
            <p>
              Guests will be provided with keys or access instructions at
              check-in. Lost keys will incur a replacement fee listed by the
              Host.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Use of the Property
            </h2>
            3.1{" "}
            <h3 className="font-semibold text-primaryColor">
              Occupancy Limits
            </h3>
            <p>
              The maximum number of guests allowed to stay in the Property is
              determined by various hosts. Any additional guests must be
              approved in advance and may incur additional charges.
            </p>
            3.2{" "}
            <h3 className="font-semibold text-primaryColor">
              No Smoking Policy
            </h3>
            <p>
              Smoking is strictly prohibited inside the Property. A fine will be
              charged for violating this rule by the host.
            </p>
            3.3 <h3 className="font-semibold text-primaryColor">Pets</h3>
            <p>
              Pets are not allowed unless specifically agreed upon during the
              booking process. If pets are allowed, an additional cleaning fee
              may apply.
            </p>
            3.4 <h3 className="font-semibold text-primaryColor">House Rules</h3>
            <p>
              Guests must comply with the Property&apos;s house rules.
              Violations of these rules may result in additional charges or
              eviction without refund.
            </p>
            3.5{" "}
            <h3 className="font-semibold text-primaryColor">Property Damage</h3>
            <p>
              Guests are responsible for any damage to the Property, its
              furniture, fixtures, or appliances during their stay. Damages must
              be reported immediately. A charge will be made to the security
              deposit for any repairs or replacements needed.
            </p>
            3.6{" "}
            <h3 className="font-semibold text-primaryColor">
              Noise and Disturbance
            </h3>
            <p>
              Guests are expected to respect neighbors and avoid loud noise or
              disruptive behavior. Any complaints from neighbors or local
              authorities may result in immediate eviction without refund.
            </p>
            3.7{" "}
            <h3 className="font-semibold text-primaryColor">
              Use of Amenities
            </h3>
            <p>
              Amenities such as [Wi-Fi, pool, gym, etc.] are for guest use.
              Guests must follow the rules and hours of operation for these
              amenities.
            </p>
            3.8 <h3 className="font-semibold text-primaryColor">Cleaning</h3>
            <p>
              The Property will be cleaned before check-in. Additional cleaning
              services are available upon request for an extra fee.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Liability and Insurance
            </h2>
            4.1 <h3 className="font-semibold text-primaryColor">Liability</h3>
            <p>
              Responsibility for any personal injury, loss, or damage to guests
              or their belongings during their stay at the Property rest on
              guests, unless caused by negligence on the part of the host.
            </p>
            4.2{" "}
            <h3 className="font-semibold text-primaryColor">Guest Insurance</h3>
            <p>
              It is recommended that guests have travel insurance to cover
              potential losses or damages, including cancellations, personal
              injury, or damage to the Property.
            </p>
            4.3{" "}
            <h3 className="font-semibold text-primaryColor">Force Majeure</h3>
            <p>
              Neither party shall be held liable for failure to perform any
              obligation under this Agreement due to causes beyond their
              reasonable control, such as natural disasters, government actions,
              or strikes.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Privacy and Data Protection
            </h2>
            5.1{" "}
            <h3 className="font-semibold text-primaryColor">Personal Data</h3>
            <p>
              We respect your privacy and will handle your personal data in
              accordance with applicable data protection laws. Your personal
              data may be used for the purpose of processing your booking and
              providing you with related services.
            </p>
            5.2{" "}
            <h3 className="font-semibold text-primaryColor">
              Marketing Communications
            </h3>
            <p>
              By making a booking, you consent to receive marketing
              communications from Rentree about future promotions or offers. You
              can opt out at any time.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Amendments to Terms and Conditions
            </h2>
            6.1
            <p>
              We reserves the right to modify or update these Terms and
              Conditions at any time. Any changes will be communicated via the
              website or directly to the Guest. Continued use of the Property
              constitutes acceptance of the modified Terms and Conditions.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Governing Law and Dispute Resolution
            </h2>
            7.1{" "}
            <h3 className="font-semibold text-primaryColor">Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the host laws.
            </p>
            7.2{" "}
            <h3 className="font-semibold text-primaryColor">
              Dispute Resolution
            </h3>
            <p>
              In the event of a dispute, the parties agree to attempt resolution
              through informal negotiation. If this fails, disputes may be
              resolved through contact us.
            </p>
            <br/>
            <h2 className=" text-primaryColor text-[20px] font-bold">
              Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact us at: Abiodun falade street, wole ola
              estate, osogbo 230284, osun, Nigeria 08165229144, 09060770017
              therentree@gmail.com
            </p>
            <p>
              By confirming your booking, you acknowledge that you have read,
              understood, and agreed to these Terms and Conditions.
            </p>
          </div>
        </Modal>
      )}
      <Navbar />
      <Page />

      <Footer />
    </div>
  );
}
