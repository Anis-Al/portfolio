'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

interface ProjectCarouselProps {
  images: Array<{
    src: string;
    name: string;
    description: string;
  }>;
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 
        rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>

      <TooltipProvider>
        <Tooltip >
          <TooltipTrigger asChild>
            <div className="relative w-full h-96 flex items-start justify-center bg-gray-900">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain object-top"
                quality={100}
                priority={currentIndex === 0}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs bg-gray-900/90 backdrop-blur-sm border-gray-700">
            <p className="text-sm text-white">{images[currentIndex].description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 
        rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
