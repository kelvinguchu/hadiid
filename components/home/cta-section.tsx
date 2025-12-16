"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className='py-6 md:py-8 bg-primary'>
      <div className='container mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          {/* Text */}
          <div>
            <h2 className='font-poppins text-2xl md:text-3xl font-bold text-primary-foreground mb-2'>
              Ready to Start Your Project?
            </h2>
            <p className='text-primary-foreground/80'>
              Get a free consultation and custom quote from our experts.
            </p>
          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 shrink-0'>
            <Button
              size='lg'
              className='group bg-primary-foreground text-primary hover:bg-primary-foreground/90'
              asChild>
              <Link href='/contact-us' className='flex items-center gap-2'>
                Get a Free Quote
                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
              asChild>
              <Link
                href='tel:+254759888333'
                className='flex items-center gap-2'>
                <FaPhone className='w-4 h-4' />
                +254 759 888 333
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
