import { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

export default function CustomCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreenImage) {
        setFullscreenImage(null);
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenImage]);

  return (
    <div className="pb-12">
      <Carousel
        autoPlay={!fullscreenImage}
        animation="slide"
        indicators={true}
        duration={1000}
        interval={6000}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-[500px] flex flex-col justify-center items-center text-center">
            <img
              className="max-h-[400px] w-auto cursor-pointer"
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              onClick={() => setFullscreenImage(slide)}
            />
            {slide.caption && (
              <p className="text-left font-light pt-4 text-darkGray w-full max-w-[800px]">
                {slide.caption}
              </p>
            )}
          </div>
        ))}
      </Carousel>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white bg-darkBlue bg-opacity-100 hover:bg-midBlue rounded-full text-2xl transition"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            aria-label="Close fullscreen"
          >
            &times;
          </button>
        
          <div
            className="max-w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage.image}
              alt="Full screen"
              className="max-h-[70vh] sm:max-h-[90vh] max-w-[90vw] object-contain"
            />
            {fullscreenImage.caption && (
              <p className="text-white text-left mt-4 text-lg font-semibold opacity-80 max-w-[90vw]">
                {fullscreenImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}