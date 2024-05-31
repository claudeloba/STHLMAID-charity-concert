"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Artist = ({ imageSrc, spotifyPreviewUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative inline-block">
      <Image
        width={500}
        height={500}
        src={imageSrc}
        alt="Artist"
        className="rounded-full w-36 h-36"
      />
      <div className="absolute inset-0 rounded-full bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlayPause}
          className="text-white text-2xl focus:outline-none"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <audio ref={audioRef} src={spotifyPreviewUrl}></audio>
    </div>
  );
};

export default Artist;
