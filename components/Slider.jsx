import Image from "next/image";
import React from "react";
// import { image } from "./sliderdata";

const Slider = ({ slides }) => {
  //   console.log(image[0]);
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {slides.map((pic, index) => {
          return (
            <div key={index}>
              <Image
                src={pic.image}
                alt="image"
                width={1440}
                height={600}
                objectFit="cover"
              />
            </div>
          );
        })}

        {/* <Image src="/img4.jpg" alt="image" width={500} height={500} /> */}
      </div>
    </div>
  );
};

export default Slider;
