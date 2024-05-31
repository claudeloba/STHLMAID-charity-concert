const Noise = ({ opacity = 0.06 }) => {
  return (
    <div
      className="absolute z-0 inset-0 w-full h-full"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "10%",
        opacity: opacity,
      }}
    ></div>
  );
};

export default Noise;
