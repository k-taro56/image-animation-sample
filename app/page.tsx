"use client";

import { ImageSlider } from "@/components/image-slider";

const images = ["/toroko01.png", "/toroko02.png", "/toroko03.png"];

export default function Home() {
  return <ImageSlider images={images} />;
}
