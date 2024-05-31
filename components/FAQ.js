"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Is there an age limit for the concert?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Due to venue restrictions, most tickets are for ages 21 and up. However,
        we have a limited number available for ages 18 and up. Please visit the
        ticket vendor for more information.
      </div>
    ),
  },
  {
    question: "How does my ticket make a difference?",
    answer: (
      <p>
        By attending the STHLM AID Charity Concert, you're not just enjoying a
        night of music; you're making a tangible difference in the lives of
        children facing hunger and crisis. All proceeds go directly to the World
        Food Programme and Plan International. Your ticket makes a difference.
      </p>
    ),
  },
  {
    question: "Where/When is the concert taking place?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        At Trädgården, a popular venue in Stockholm, Sweden. The address is
        Hammarby Slussväg 2. The concert will be held on May 30th and starts at
        17:00 local time.
      </div>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Feel free to email us with any further questions at sthlmaid@gmail.se
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="text-white-smoke z-20">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 text-white-smoke"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className={`flex-1  ${isOpen ? "text-red-600" : ""}`}>
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-black z-20 h-[100vh] md:h-auto" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold  mb-4 text-red-600">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-white-smoke">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
