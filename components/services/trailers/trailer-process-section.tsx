"use client";

import { HiArrowRight } from "react-icons/hi";
import { AnimatedSection } from "../animated-section";
import { trailerProcess } from "./data";

export function TrailerProcessSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Our Build Process
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            From initial consultation to final delivery, we ensure every step
            meets our exacting standards.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {trailerProcess.map((item, index) => (
            <AnimatedSection key={item.step}>
              <div className='relative'>
                <div className='bg-muted rounded-2xl p-6 h-full'>
                  <div className='w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mb-4'>
                    {item.step}
                  </div>
                  <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
                  <p className='text-muted-foreground text-sm'>
                    {item.description}
                  </p>
                </div>
                {index < trailerProcess.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2'>
                    <HiArrowRight className='w-6 h-6 text-primary' />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
