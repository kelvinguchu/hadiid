"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";

export function FabricationsCTA() {
  return (
    <section className='py-6 md:py-8 bg-primary text-primary-foreground'>
      <div className='container mx-auto text-center'>
        <AnimatedSection>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Have a Custom Fabrication Project?
          </h2>
          <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
            Tell us about your requirements. Our engineers will work with you to
            design the perfect solution.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button
              size='lg'
              variant='secondary'
              className='rounded-full gap-2'
              asChild>
              <Link href='/contact-us'>
                Discuss Your Project <HiArrowRight />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='rounded-full gap-2 bg-transparent border-white text-white hover:bg-white/10'
              asChild>
              <Link href='tel:+254759888333'>
                <FaPhoneAlt /> 0759 888 333
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
