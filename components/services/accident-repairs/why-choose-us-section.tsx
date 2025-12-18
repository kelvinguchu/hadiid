"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { whyChooseUsItems } from "./data";

export function WhyChooseUsSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/ac2.jpeg'
                alt='Repair workshop'
                fill
                className='object-cover'
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Badge className='mb-4'>Why Choose Us</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Your Vehicle in <span className='text-primary'>Expert Hands</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              We take pride in delivering quality repairs with transparency and
              professionalism.
            </p>

            <div className='grid grid-cols-1 gap-3'>
              {whyChooseUsItems.map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='w-3 h-3 text-primary' />
                  </div>
                  <span className='text-foreground'>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
