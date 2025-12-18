"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { fabricationCapabilities } from "./data";

export function CapabilitiesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch'>
          <AnimatedSection>
            <Badge className='mb-4'>Workshop Capabilities</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              State-of-the-Art <span className='text-primary'>Equipment</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              Our workshop is equipped with modern machinery and tools that
              enable us to take on complex fabrication projects with precision
              and efficiency.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              {fabricationCapabilities.map((cap) => (
                <div key={cap.title} className='bg-muted rounded-xl p-4'>
                  <h4 className='font-semibold mb-1'>{cap.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className='h-full'>
            <div className='relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/workers/DSC09735.jpg'
                alt='Fabrication workshop'
                fill
                className='object-cover'
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
