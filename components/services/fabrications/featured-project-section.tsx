"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";
import { miningConversionFeatures } from "./data";

export function FeaturedProjectSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <div className='grid grid-cols-2 gap-4'>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/lorry-making/DSC01598.jpg'
                  alt='Project 1'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/lorry-making/DSC01632.jpg'
                  alt='Project 2'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/lorry-making/DSC09803.jpg'
                  alt='Project 3'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/lorry-making/DSC09862.jpg'
                  alt='Project 4'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Badge className='mb-4'>Case Study</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Mining Vehicle <span className='text-primary'>Conversion</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              We recently completed a comprehensive modification project for a
              mining company, converting 20 Toyota Land Cruiser 79 Series
              vehicles for underground mining operations.
            </p>
            <div className='space-y-4 mb-8'>
              {miningConversionFeatures.map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='w-3 h-3 text-primary' />
                  </div>
                  <span className='text-foreground'>{item}</span>
                </div>
              ))}
            </div>
            <Button size='lg' className='rounded-full gap-2' asChild>
              <Link href='/our-work'>
                View More Projects <HiArrowRight />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
