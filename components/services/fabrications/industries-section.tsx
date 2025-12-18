"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { industries } from "./data";

export function IndustriesSection() {
  return (
    <section className='py-6 md:py-8 bg-card'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Industries We Serve
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Our fabrication services cater to diverse industries with unique
            requirements.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {industries.map((industry) => (
            <AnimatedSection key={industry.name}>
              <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow text-center'>
                <CardContent className='p-6'>
                  <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                    <industry.icon className='w-8 h-8 text-primary' />
                  </div>
                  <h3 className='font-semibold text-lg mb-2'>
                    {industry.name}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {industry.description}
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
