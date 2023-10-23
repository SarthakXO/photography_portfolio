"use client";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
// import { image } from "./sliderdata";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[1240px] max-h-[600px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>

      {slides.map((pic, index) => {
        return (
          <div
            className={
              index == current
                ? `  opacity-[1] ease-in duration-300`
                : "  opacity-0"
            }
            key={index}
          >
            <div className="flex relative justify-center p-4">
              <FaArrowCircleLeft
                size={50}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  src={pic.image}
                  alt="image"
                  width={1440}
                  height={600}
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                onClick={nextSlide}
              />
            </div>
          </div>
        );
      })}

      {/* <Image src="/img4.jpg" alt="image" width={500} height={500} /> */}
    </div>
  );
};

export default Slider;
