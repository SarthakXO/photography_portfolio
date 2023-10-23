import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

import { image } from "../components/sliderdata";

export default function Home() {
  return (
    <main>
      <Hero
        heading="capture photos"
        message="making a gallery of the world around me"
      />
      <Slider slides={image} />
    </main>
  );
}
