import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((imgSrc, index) => (
              <div className="flex-grow-0 flex-shrink-0 w-full" key={index}>
                <div className="aspect-[16/9]">
                   <img
                      src={imgSrc}
                      alt={`Imagine proiect ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className="absolute top-1/2 left-2 md:-left-12 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-md"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-[#23272B]" />
        </button>
        <button
          className="absolute top-1/2 right-2 md:-right-12 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-md"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-[#23272B]" />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;