"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { optionalFeatures } from "./data";

export function OptionalFeaturesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch'>
          <AnimatedSection className='h-full'>
            <div className='relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/images-2/water-lorry-2.jpg'
                alt='Truck accessories'
                fill
                className='object-cover'
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Badge className='mb-4'>Customization</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Optional Features & Accessories
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              Enhance your truck body with additional features tailored to your
              operational needs.
            </p>

            <div className='space-y-4'>
              {optionalFeatures.map((feature) => (
                <div key={feature} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='w-3 h-3 text-primary' />
                  </div>
                  <span className='text-foreground'>{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
