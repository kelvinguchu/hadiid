"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const heroImages = [
  "/images-2/hero.jpg",
  "/images-2/hero-1.jpg",
  "/images-2/hero-2.jpg",
  "/images-2/hero-3.jpg",
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='relative h-[80vh] min-h-125 max-h-175 overflow-hidden'>
      {/* Background Carousel */}
      <div className='absolute inset-0'>
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className='h-full w-full'>
          <CarouselContent className='h-full ml-0'>
            {heroImages.map((src, index) => (
              <CarouselItem key={src} className='h-full pl-0 relative'>
                <Image
                  src={src}
                  alt={`Hadiid Industries - Vehicle Body Manufacturing ${
                    index + 1
                  }`}
                  fill
                  className='object-cover'
                  priority={index === 0}
                />
                <div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-auto right-16 bottom-8 top-auto translate-y-0 z-10 bg-black/20 hover:bg-primary hover:text-primary-foreground border-white/20 text-white cursor-pointer transition-colors' />
          <CarouselNext className='right-4 bottom-8 top-auto translate-y-0 z-10 bg-black/20 hover:bg-primary hover:text-primary-foreground border-white/20 text-white cursor-pointer transition-colors' />
        </Carousel>
      </div>

      {/* Content */}
      <div className='relative h-full container mx-auto px-6 lg:px-8 flex items-center pointer-events-none'>
        <div
          className={`max-w-xl transition-all duration-700 pointer-events-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
          <div className='w-16 h-1 bg-primary mb-6' />

          <h1 className='font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6'>
            Crafting Vehicles
            <br />
            <span className='text-primary'>Built for Africa</span>
          </h1>

          <p className='text-white/80 text-lg mb-8 max-w-md'>
            Strong bus bodies, trailers, and truck fabrications from East
            Africa&apos;s most trusted manufacturer.
          </p>

          <div className='flex flex-wrap gap-4'>
            <Button size='lg' className='group' asChild>
              <Link href='/services' className='flex items-center gap-2'>
                Explore Products
                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>
            <Button size='lg' variant='secondary' asChild>
              <Link href='/contact-us'>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
        {heroImages.map((src, index) => (
          <button
            key={src}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current
                ? "bg-primary w-8"
                : "bg-white/50 w-2 hover:bg-white/80"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom accent line */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-primary' />
    </section>
  );
}
