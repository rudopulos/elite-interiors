import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const DotButton = ({ selected, onClick }) => (
  <button
    className={`h-3 rounded-full transition-all duration-300 ${selected ? 'w-8 bg-[#23272B]' : 'w-3 bg-gray-300'}`}
    type="button"
    onClick={onClick}
    aria-label="Go to slide"
  />
);

export default function InstagramCarousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((slide, index) => (
            <div className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4" key={index}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block aspect-square rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={slide.imgSrc}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-[#23272B]" />
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-[#23272B]" />
      </button>

      <div className="absolute -bottom-10 left-0 right-0 flex justify-center items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}