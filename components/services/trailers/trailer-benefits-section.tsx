"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { trailerBenefits } from "./data";

export function TrailerBenefitsSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Why Choose Our Trailers?
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Every trailer we build represents our commitment to quality,
            durability, and customer satisfaction.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {trailerBenefits.map((benefit) => (
            <AnimatedSection key={benefit.title}>
              <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                    <benefit.icon className='w-8 h-8 text-primary' />
                  </div>
                  <h3 className='font-semibold text-lg mb-2'>
                    {benefit.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
