"use client";
import { TypewriterEffectSmooth } from "@/components/typewriter-lineup";
import artists from "../utils/artists";
import { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [artistsPerArray, setArtistsPerArray] = useState(3); // Default value
  useEffect(() => {
    function updateArtistsPerArray() {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 768) {
        // Adjust the breakpoint as needed
        setArtistsPerArray(2);
      } else {
        setArtistsPerArray(3);
      }
    }

    updateArtistsPerArray(); // Initial check
    window.addEventListener("resize", updateArtistsPerArray);

    return () => {
      window.removeEventListener("resize", updateArtistsPerArray);
    };
  }, []);

  const artistWordArrays = [];
  for (let i = 0; i < artists.length; i += artistsPerArray) {
    const wordArray = [];

    for (let j = 0; j < artistsPerArray && i + j < artists.length; j++) {
      const artistName = artists[i + j];

      // Check if the artist name is longer than 20 characters
      if (artistName.length > 25) {
        // Create a separate array for this artist
        artistWordArrays.push([{ text: artistName }]);
      } else {
        wordArray.push({ text: artistName });

        // Add separator if not the last artist:
        if (j < artistsPerArray - 1) {
          wordArray.push({
            text: "•",
            className: "text-red-600 text-[0.5rem] text-center ",
          });
        }
      }
    }

    if (wordArray.length > 0) {
      artistWordArrays.push(wordArray);
    }
  }

  return (
    <div
      id="lineup"
      className="z-20 justify-center relative max-h-screen md:pt-10 gap-7 flex min-h-screen w-full flex-col items-center md:gap-14"
    >
      <div className="text-center justify-center flex flex-col items-center">
        {artistWordArrays.map((words, index) => (
          <TypewriterEffectSmooth key={index} words={words} />
        ))}
        <TypewriterEffectSmooth
          className="pt-2 md:pt-4"
          cursorClassName="hidden"
          wordClassName="text-xs md:text-xl"
          words={[{ text: "DJ: Braminho, Loxgold, Tjocke" }]}
        />
      </div>
      <p className="text-center text-red-600  text-xs md:text-xl md:-mt-2 z-10 px-4 ">
        All proceeds will go to World Food Programme & Plan International
      </p>
      <Link href="https://www.tickster.com/se/sv/events/tmjyg8tn6x8jfmb/2024-05-30/sthlm-aid">
        <button className="btn btn-error lg:btn-wide rounded-3xl bg-red-600 border-red-600 hover:bg-red-900 text-white-smoke hover:text-[rgb(200,200,200)] md:text-xl hover:border-red-900">
          Get Tickets
        </button>
      </Link>
    </div>
  );
};

export default Page;
