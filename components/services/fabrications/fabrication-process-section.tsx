"use client";

import { AnimatedSection } from "../animated-section";
import { fabricationProcess } from "./data";

export function FabricationProcessSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Process</h2>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {fabricationProcess.map((item) => (
            <AnimatedSection key={item.step}>
              <div className='bg-muted rounded-2xl p-6 h-full relative'>
                <div className='absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center'>
                  {item.step}
                </div>
                <h3 className='font-semibold text-lg mb-2 mt-4'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
