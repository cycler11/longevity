"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MediaEvent } from '@/data/media-events';

interface MediaHorizontalScrollerProps {
  events: MediaEvent[];
}

export function MediaHorizontalScroller({ events }: MediaHorizontalScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.querySelector('.media-card')?.clientWidth || 480;
    const scrollAmount = cardWidth + 24; // card width + gap
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollImage = (eventId: string, direction: 'left' | 'right', imageCount: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[eventId] || 0;
      let newIndex = current;
      if (direction === 'left') {
        newIndex = current > 0 ? current - 1 : imageCount - 1;
      } else {
        newIndex = current < imageCount - 1 ? current + 1 : 0;
      }
      return { ...prev, [eventId]: newIndex };
    });
  };

  return (
    <section className="w-full py-12 md:py-24 bg-black/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          className="flex flex-col items-center gap-4 text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl header-text-glow">
            Media
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Explore our events and community gatherings
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 ${
                !canScrollLeft ? 'opacity-0 pointer-events-none' : ''
              } transition-opacity`}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 ${
                !canScrollRight ? 'opacity-0 pointer-events-none' : ''
              } transition-opacity`}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {events.map((event, index) => {
              const currentIndex = currentImageIndex[event.id] || 0;
              const currentImage = event.images[currentIndex];

              return (
                <motion.div
                  key={event.id}
                  className="media-card flex-shrink-0 w-[90vw] sm:w-[420px] md:w-[480px] snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                      <h3 className="text-xl md:text-2xl font-bold header-text-glow">
                        {event.title}
                      </h3>
                    </div>

                    {/* Image Gallery */}
                    <div className="flex-1 p-6">
                      {/* Main Image Display */}
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-black/20">
                        {currentImage ? (
                          <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (!target.src.includes('default.png')) {
                                target.src = '/events/default.png';
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/20 text-muted-foreground">
                            No image
                          </div>
                        )}
                        
                        {/* Image Navigation Buttons (only if more than 1 image) */}
                        {event.images.length > 1 && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10"
                              onClick={() => scrollImage(event.id, 'left', event.images.length)}
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10"
                              onClick={() => scrollImage(event.id, 'right', event.images.length)}
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                            
                            {/* Image Counter */}
                            <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/60 text-xs text-white">
                              {currentIndex + 1} / {event.images.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Thumbnail Strip */}
                      {event.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                          {event.images.map((img, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [event.id]: imgIndex }))}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                imgIndex === currentIndex
                                  ? 'border-primary scale-105'
                                  : 'border-white/10 hover:border-white/30'
                              }`}
                              aria-label={`View image ${imgIndex + 1}`}
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  if (!target.src.includes('default.png')) {
                                    target.src = '/events/default.png';
                                  }
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
