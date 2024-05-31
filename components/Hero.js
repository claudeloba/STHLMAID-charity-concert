"use client";
import { suprapower, suprapowerMedium } from "@/app/fonts";
import Link from "next/link";

const Hero = ({ classes }) => {
  return (
    <section
      className={`w-full md:max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 lg:gap-16 md:px-8 py-8 lg:py-20 z-50 ${classes}`}
    >
      <div className="flex flex-col gap-6 md:gap-2 items-center justify-center w-full text-center max-w-full md:max-w-[80%] ">
        <p className={`${suprapower.className} text-white-smoke`}>
          Trädgården, 30th May
        </p>
        <h1
          aria-label="Stockholm Aid"
          className=" font-extrabold gap-0 text-5xl md:text-8xl lg:text-9xl xl:text-[11rem] capitalize flex flex-col text-center justify-center items-center z-10  tracking-normal"
        >
          <span
            style={{
              maskImage: "url(/noise.webp)",
              maskSize: "contain",
              WebkitMaskImage: "url(/noise.webp)",
              WebkitMaskSize: "contain",
              display: "inline",
            }}
            className={`${suprapowerMedium.className} leading-none text-white-smoke not-italic capitalize  inline-flex  subpixel-antialiased m-0 p-0`}
          >
            STHLM<span className="text-red-600">AID</span>
          </span>
        </h1>
        <p
          className={` ${suprapowerMedium.className} text-sm md:text-lg max-w-[75%] min-w-[75%] text-white-smoke m-0 p-0 tracking-wider lg:text-xl`}
        >
          All proceeds go towards the{" "}
          <span className="font-bold">World Food Programme</span> and{" "}
          <span className="font-bold">Plan International</span>.
        </p>
        <p
          className={`${suprapowerMedium.className} text-sm md:text-lg max-w-[75%] min-w-[75%] text-white-smoke m-0 p-0 tracking-wider  lg:text-xl`}
        ></p>
      </div>
      <div className="flex flex-row gap-12 z-10 justify-center items-center">
        <Link href="#lineup">
          <button className="btn btn-outline  lg:btn-wide rounded-3xl text-white-smoke border-red-600 hover:bg-red-900 hover:border-red-900 hover:text-[rgb(200,200,200)] md:text-xl">
            Lineup
          </button>
        </Link>
        <Link href="https://www.tickster.com/se/sv/events/tmjyg8tn6x8jfmb/2024-05-30/sthlm-aid">
          <button className="btn btn-error lg:btn-wide rounded-3xl bg-red-600 border-red-600 hover:bg-red-900 text-white-smoke hover:text-[rgb(200,200,200)] md:text-xl hover:border-red-900">
            Get Tickets
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
