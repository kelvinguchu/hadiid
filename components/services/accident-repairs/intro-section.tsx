"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { accidentRepairStats } from "./data";

export function AccidentRepairsIntro() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Expert Restoration</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              We Restore Vehicles to{" "}
              <span className='text-primary'>Pre-Accident Condition</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              At HADIID Industries, we understand that vehicle damage is
              stressful. Our experienced team handles everything from minor
              cosmetic repairs to major structural restoration, getting you back
              on the road quickly and safely.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              We work with all insurance companies and provide transparent,
              itemized quotations so you know exactly what to expect. Our
              skilled technicians use modern equipment and quality parts to
              ensure lasting repairs.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {accidentRepairStats.map((stat) => (
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
                  src='/images/ac2.jpeg'
                  alt='Accident repair'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10' />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
