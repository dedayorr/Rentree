import React, { useState } from "react";
import "./sections.css";
import { useInView } from "react-intersection-observer";

function SectionThree() {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const faqs = [
    {
      question: "How do I book a hotel or apartment?",
      answer:
        " Simply browse our listings, select your desired location, and follow the booking instructions provided.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, and mobile payments.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Rentree Yes, cancellations are allowed, but please refer to our cancellation policy for details a hassle-free experience by offering a wide range of options tailored to your preferences.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        " All fees are transparently listed at the time of booking. There are no hidden charges",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email or phone. Our contact details are provided below Yes, cancellations are allowed, but please refer to our cancellation policy for details a hassle-free experience by offering a wide range of options tailored to your preferences.",
    },
  ];

  return (
    <div id="faq" className="bg-black flex items-stretch">
      <div className="faq-container  py-[20%] px-[5%] w-full lg:w-1/2 lg:py-[5%]">
        <h4 className="text-white font-bold text-[25px] md:text-[30px] lg:text-[40px]">
          FAQs
        </h4>
        <hr className=" bg-white h-[5px] w-[10%] mb-[5%] lg:w-[10%]" />
        {faqs.map((faq, index) => (
          <div
            ref={ref}
            key={index}
            className={`animated-element ${inView ? "in-view" : ""} faq-item ${
              openIndex === index ? "active" : ""
            } flex flex-col `}
          >
            <button
              className="faq-question"
              style={{ boxShadow: "rgba(0, 225, 0, 0.5) 0px 5px 15px" }}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className="faq-answer text-white"
              style={{
                maxHeight: openIndex === index ? "300px" : "0",
                padding: openIndex === index ? "10px 10px" : "0 10px",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/2 h-[700px]">
        {" "}
        <img
          className="hidden lg:block w-full h-full object-cover"
          src="./fag-image.png"
          alt="faq"
        />
      </div>
    </div>
  );
}

export default SectionThree;
