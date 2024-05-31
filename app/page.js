import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ImageScroll from "@/components/ImageScroll";
import Noise from "@/components/Noise";
import Player from "@/components/Player";

export default function Home() {
  const imagesLine1 = Array.from(
    { length: 7 },
    (_, i) => `/images/line1/${i + 1}.png`,
  );
  const imagesLine2 = Array.from(
    { length: 7 },
    (_, i) => `/images/line2/${i + 1}.png`,
  );
  const imagesLine3 = Array.from(
    { length: 7 },
    (_, i) => `/images/line3/${i + 1}.png`,
  );
  const imagesLine4 = Array.from(
    { length: 7 },
    (_, i) => `/images/line4/${i + 1}.png`,
  );
  const imagesLine5 = Array.from(
    { length: 7 },
    (_, i) => `/images/line5/${i + 1}.png`,
  );

  const allImages = [
    ...imagesLine1,
    ...imagesLine2,
    ...imagesLine3,
    ...imagesLine4,
    ...imagesLine5,
  ];

  const part1 = allImages.slice(0, Math.ceil(allImages.length / 3));
  const part2 = allImages.slice(
    Math.ceil(allImages.length / 3),
    Math.ceil((allImages.length * 2) / 3),
  );
  const part3 = allImages.slice(Math.ceil((allImages.length * 2) / 3));

  return (
    <div className="relative">
      <Suspense>
        <Header />
      </Suspense>
      <main className="z-20 bg-black relative">
        <div className="relative flex flex-row min-w-full max-h-[100vh] md:max-h-[50rem] gap-3 overflow-hidden  bg-black lg:px-14 z-0">
          <div className="absolute inset-0 z-10">
            <div className=" overlay-3 z-1 absolute inset-y-0 left-0 w-1/2 bg-cover"></div>
            <div className=" overlay-4 z-1 absolute inset-y-0 right-0 w-1/2 bg-cover"></div>
            <div className="overlay-1 z-2 absolute inset-0 "></div>
            <div className="overlay-5 z-2 absolute inset-0 "></div>
            <div className="block md:hidden overlay-6 z-2 absolute inset-0 "></div>
            <div className=" overlay-2 z-2 absolute inset-0"></div>
          </div>
          <div className="hidden flex-row gap-3 min-w-full md:flex">
            <ImageScroll DURATION={90} images={imagesLine1} />
            <ImageScroll DURATION={70} scrollUp={true} images={imagesLine2} />
            <ImageScroll DURATION={90} images={imagesLine3} />
            <ImageScroll DURATION={70} scrollUp={true} images={imagesLine4} />
            <ImageScroll DURATION={90} images={imagesLine5} />
          </div>
          <div className="flex flex-row min-w-full gap-3 md:hidden">
            <ImageScroll DURATION={90} images={part1} />
            <ImageScroll DURATION={70} scrollUp={true} images={part2} />
            <ImageScroll DURATION={90} images={part3} />
          </div>
        </div>
        <Hero classes="absolute z-50 top-[41vh] md:top-[47vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
        <FeaturesAccordion />
        <Noise opacity={0.04} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
