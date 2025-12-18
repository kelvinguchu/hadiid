"use client";

import { motion } from "motion/react";
import Image from "next/image";

const partners = [
  { id: "isuzu", name: "Isuzu", logo: "/partners/isuzu.png" },
  { id: "hino", name: "Hino", logo: "/partners/hino.png" },
  { id: "fuso", name: "Fuso", logo: "/partners/fuso.png" },
  { id: "mercedes", name: "Mercedes-Benz", logo: "/partners/mercedes.png" },
  { id: "scania", name: "Scania", logo: "/partners/scania.png" },
  { id: "volvo", name: "Volvo", logo: "/partners/volvo.png" },
  { id: "man", name: "MAN", logo: "/partners/man.png" },
  { id: "tata", name: "Tata", logo: "/partners/tata.png" },
  { id: "faw", name: "FAW", logo: "/partners/faw.png" },
  { id: "howo", name: "Howo", logo: "/partners/howo.png" },
];

export function PartnersMarquee() {
  return (
    <section className='py-4 sm:py-6 md:py-8 bg-muted/30 overflow-hidden'>
      <div className='container mx-auto mb-4 sm:mb-6 px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className='text-center'>
          <h2 className='font-poppins text-xl sm:text-2xl md:text-3xl font-bold text-foreground'>
            Trusted <span className='text-primary'>Chassis Partners</span>
          </h2>
        </motion.div>
      </div>

      <div className='relative h-14 sm:h-16 md:h-20'>
        {/* Left vignette */}
        <div className='absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none' />

        {/* Right vignette */}
        <div className='absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none' />

        {/* Marquee container */}
        <div className='flex h-full items-center'>
          <motion.div
            className='flex gap-6 sm:gap-8 md:gap-12 items-center'
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}>
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={`first-${partner.id}`}
                className='flex items-center justify-center w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-14 shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={115}
                  height={52}
                  className='object-contain w-auto h-full'
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`second-${partner.id}`}
                className='flex items-center justify-center w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-14 shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300'>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={115}
                  height={52}
                  className='object-contain w-auto h-full'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
