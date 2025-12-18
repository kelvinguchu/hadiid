"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";
import { schoolBusFeatures } from "./data";

export function SchoolBusFeatureSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <div className='grid grid-cols-2 gap-4'>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/images/schoolbuses/DSC09520.webp'
                  alt='School bus interior'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/images/schoolbuses/DSC09530.webp'
                  alt='School bus seats'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/images/schoolbuses/DSC09540.webp'
                  alt='School bus exterior'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square rounded-2xl overflow-hidden'>
                <Image
                  src='/images/schoolbuses/DSC09550.webp'
                  alt='School bus details'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Badge className='mb-4'>Featured</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              School Bus <span className='text-primary'>Specialists</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              We have built school buses for over 50 schools across Kenya. Our
              school buses are specifically designed to ensure the safety and
              comfort of students during their daily commute.
            </p>
            <div className='space-y-4 mb-8'>
              {schoolBusFeatures.map((feature) => (
                <div key={feature} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='w-3 h-3 text-primary' />
                  </div>
                  <span className='text-foreground'>{feature}</span>
                </div>
              ))}
            </div>
            <Button size='lg' className='rounded-full gap-2' asChild>
              <Link href='/contact-us'>
                Get School Bus Quote <HiArrowRight />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
