"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { fabricationServices } from "./data";

export function FabricationServicesSection() {
  return (
    <section className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Our Expertise</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Specialized Services
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Comprehensive fabrication services for vehicles and industrial
            applications.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {fabricationServices.map((service) => (
            <AnimatedSection key={service.title}>
              <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                <CardContent className='p-6'>
                  <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4'>
                    <service.icon className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='font-bold text-xl mb-2'>{service.title}</h3>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {service.description}
                  </p>
                  <ul className='space-y-2'>
                    {service.features.map((feature) => (
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
