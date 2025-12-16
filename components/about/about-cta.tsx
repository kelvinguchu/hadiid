"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

export function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className='relative py-12 md:py-24 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/schoolbuses/DSC09530.webp'
          alt='HADIID Industries workshop'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/70' />
      </div>

      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-primary' />
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className='absolute top-1/2 right-10 w-64 h-64 border border-primary/20 rounded-full -translate-y-1/2 hidden lg:block'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
        className='absolute top-1/2 right-20 w-48 h-48 border border-primary/30 rounded-full -translate-y-1/2 hidden lg:block'
      />

      <div className='container mx-auto px-4 relative'>
        <div className='max-w-3xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <div className='w-16 h-1 bg-primary mb-6' />

            <h2 className='font-poppins text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
              Partner with an
              <br />
              <span className='text-primary'>Engineering Leader</span>
            </h2>

            <p className='text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-xl'>
              Whether you need a custom fleet or expert repairs, our team is
              ready to engineer a solution that drives your success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 mb-10'>
            <Button
              size='lg'
              className='text-lg px-8 group shadow-lg shadow-primary/30'
              asChild>
              <Link href='/contact-us' className='flex items-center gap-2'>
                Get a Free Quote
                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white'
              asChild>
              <Link href='/services'>View Our Services</Link>
            </Button>
          </motion.div>

          {/* Contact quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-6 text-white/60'>
            <a
              href='tel:+254759888333'
              className='flex items-center gap-2 hover:text-primary transition-colors'>
              <FaPhone className='w-4 h-4' />
              <span>0759 888 333</span>
            </a>
            <a
              href='mailto:inquiries@hadiidindustries.com'
              className='flex items-center gap-2 hover:text-primary transition-colors'>
              <FaEnvelope className='w-4 h-4' />
              <span>inquiries@hadiidindustries.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
