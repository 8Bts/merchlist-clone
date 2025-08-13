"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const brands = [
  "/images/brands/apple.avif",
  "/images/brands/cross.png",
  "/images/brands/hans-larsen.png.avif",
  "/images/brands/moleskine.avif",
  "/images/brands/moya.png.avif",
  "/images/brands/new-era.png.avif",
  "/images/brands/ocean-bottle.png.avif",
  "/images/brands/palmfit.avif",
  "/images/brands/rocketbook.png.avif",
  "/images/brands/stanley.avif",
  "/images/brands/swiss-peak.avif",
  "/images/brands/umo.avif",
  "/images/brands/xddesign.avif"
]



export default function Brands() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1, // move 1 at a time
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <div className="bg-[#f9fafa] pt-14 pb-8">
      <h2 className="text-[31px] text-center text-[#1B344D] font-fairplay-display font-semibold mb-8">Customize world-leading brands</h2>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {brands.map((src, idx) => (
            <div
              key={idx}
              className="flex-[0_0_12%] flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Brand ${idx}`}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}