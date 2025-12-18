"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";

export function TrailersIntro() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Industry Leading</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Trailers Built for{" "}
              <span className='text-primary'>African Roads</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              At HADIID Industries, we understand that African terrain demands
              exceptional durability. Our trailers are engineered to withstand
              the toughest conditions while maximizing your payload capacity and
              operational efficiency.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              Whether you&apos;re transporting goods across the highway, hauling
              materials from mining sites, or moving equipment to construction
              zones, our trailers deliver consistent performance year after
              year.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button size='lg' className='rounded-full gap-2' asChild>
                <Link href='/contact-us'>
                  Request Quote <HiArrowRight />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='rounded-full gap-2'
                asChild>
                <Link href='tel:+254759888333'>
                  <HiPhone /> Call Now
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='relative'>
              <div className='relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/lorries/DSC09750.jpg'
                  alt='Heavy duty trailer'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10' />
              <div className='absolute -top-4 -right-4 border-2 border-primary/30 rounded-2xl w-full h-full -z-10' />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
