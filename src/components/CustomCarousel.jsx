import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

export default function CustomCarousel ({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pb-5">
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        duration={1000}
        interval={6000}
      >
        {slides.map((slide, index) => (
          <div key={index} className="">
            <img className="max-h-[400px] mx-auto" src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
            {slide.legend && <p className="legend">{slide.legend}</p>}
          </div>
        ))}
      </Carousel>
    </div>
  );
};