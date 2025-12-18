"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { busStats } from "./data";

export function BusBodyIntro() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Expert Craftsmanship</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Buses Built for{" "}
              <span className='text-primary'>African Roads</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              HADIID Industries designs and builds bus bodies that are
              specifically engineered for the unique challenges of African
              terrain. From school buses to luxury coaches, we deliver vehicles
              that combine safety, comfort, and durability.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              Our experienced team works with manufacturer-supplied chassis to
              create custom bus bodies that meet international safety standards
              while being optimized for local conditions.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {busStats.map((stat) => (
                <div key={stat.label} className='text-center'>
                  <p className='text-3xl font-bold text-primary'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-muted-foreground'>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='relative'>
              <div className='relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/school-bus-making/DSC01391.jpg'
                  alt='School bus'
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
