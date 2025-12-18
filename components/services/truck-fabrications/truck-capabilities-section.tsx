"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { truckCapabilities } from "./data";

export function TruckCapabilitiesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <div className='grid grid-cols-2 gap-4'>
              {truckCapabilities.map((cap) => (
                <Card key={cap.title} className='border-none shadow-lg'>
                  <CardContent className='p-5'>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3'>
                      <cap.icon className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-1'>{cap.title}</h3>
                    <p className='text-muted-foreground text-sm'>
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Badge className='mb-4'>Manufacturing Excellence</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              State-of-the-Art <span className='text-primary'>Fabrication</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              Our workshop is equipped with modern machinery and tools that
              enable us to produce truck bodies of exceptional quality. From
              precision cutting to expert welding, every process is optimized
              for accuracy and efficiency.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              We use high-tensile steel, marine-grade aluminum, and
              corrosion-resistant materials to ensure your truck body withstands
              the rigors of daily operation.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button size='lg' className='rounded-full gap-2' asChild>
                <Link href='/contact-us'>
                  Get Quote <HiArrowRight />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='rounded-full gap-2'
                asChild>
                <Link href='/our-work'>View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
