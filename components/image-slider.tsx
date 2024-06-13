import React, { useState, useEffect } from "react";

export function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
