import React, { useState, useEffect } from "react";

export function ImageSlider({ images, interval = 1000 }: { images: string[], interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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
