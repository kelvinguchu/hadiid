"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export function ServicesCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className='relative py-12 md:py-24 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/schoolbuses/DSC09540.webp'
          alt='HADIID Industries workshop'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/60' />
      </div>

      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-primary' />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='absolute -bottom-20 -right-20 w-80 h-80 border border-primary/20 rounded-full hidden lg:block'
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='absolute -bottom-10 -right-10 w-60 h-60 border border-primary/30 rounded-full hidden lg:block'
      />

      <div className='container mx-auto px-4 relative'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <div className='w-16 h-1 bg-primary mb-6' />

            <h2 className='font-poppins text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
              Have a Project
              <br />
              <span className='text-primary'>in Mind?</span>
            </h2>

            <p className='text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-xl'>
              Let&apos;s discuss how our expert fabrication and repair services
              can meet your specific needs. Contact us today for a detailed,
              no-obligation quote.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='text-lg px-8 group shadow-lg shadow-primary/30'
                asChild>
                <Link href='/contact-us' className='flex items-center gap-2'>
                  Request a Quote
                  <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white'
                asChild>
                <a href='tel:+254759888333' className='flex items-center gap-2'>
                  <FaPhone className='w-4 h-4' />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats/Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='hidden lg:grid grid-cols-2 gap-6'>
            {[
              { value: "500+", label: "Vehicles Built" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors'>
                <div className='text-3xl md:text-4xl font-bold text-primary mb-2'>
                  {stat.value}
                </div>
                <div className='text-white/60 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
