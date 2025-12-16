"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, []);

  return (
    <section className='relative h-[80vh] min-h-125 max-h-175'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/schoolbuses/DSC09496.webp'
          alt='Hadiid Industries - Vehicle Body Manufacturing'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0  bg-linear-to-r from-black/80 via-black/50 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative h-full container mx-auto px-6 lg:px-8 flex items-center'>
        <div
          className={`max-w-xl transition-all duration-700 ${
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

      {/* Bottom accent line */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-primary' />
    </section>
  );
}
