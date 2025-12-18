"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { fabricationStats } from "./data";

export function FabricationsIntro() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Bespoke Solutions</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Custom Fabrication for{" "}
              <span className='text-primary'>Every Need</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              When off-the-shelf solutions don&apos;t fit your requirements, our
              specialized fabrication team delivers bespoke metalwork and
              vehicle modifications tailored to your exact specifications.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              From localizing imported vehicles to fabricating protective
              equipment for mining operations, we combine engineering expertise
              with skilled craftsmanship to bring your projects to life.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {fabricationStats.map((stat) => (
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
                  src='/workers/DSC09780.jpg'
                  alt='Specialized fabrication'
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
