"use client";

import { ImageSlider } from "@/components/image-slider";

const images = Array.from({ length: 138 }, (_, i) => `/image-${(i + 1).toString().padStart(3, '0')}.jpg`);

export default function Home() {
  return <ImageSlider images={images} interval={50} />;
}
