"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { repairServices } from "./data";

export function RepairServicesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Our Services</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Comprehensive Repair Services
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Everything you need to restore your vehicle under one roof.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 gap-6'>
          {repairServices.map((service) => (
            <AnimatedSection key={service.title}>
              <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0'>
                      <service.icon className='w-7 h-7 text-primary' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-bold text-xl mb-2'>
                        {service.title}
                      </h3>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {service.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {service.items.map((item) => (
                          <Badge
                            key={item}
                            variant='secondary'
                            className='text-xs'>
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
