"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { bodyTypes } from "./data";

export function BodyTypesSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Our Expertise</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Types of Truck Bodies
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            We manufacture a comprehensive range of truck bodies for various
            industries and applications.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {bodyTypes.map((body) => (
            <AnimatedSection key={body.name}>
              <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                <CardContent className='p-6'>
                  <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4'>
                    <body.icon className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='font-bold text-xl mb-2'>{body.name}</h3>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {body.description}
                  </p>
                  <ul className='space-y-2'>
                    {body.features.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-center gap-2 text-sm'>
                        <FaCheckCircle className='w-4 h-4 text-primary shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
