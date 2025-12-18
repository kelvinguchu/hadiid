"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { busTypes } from "./data";

export function BusTypesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Our Range</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Types of Buses We Build
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            From compact school buses to luxury intercity coaches, we build
            buses for every purpose.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {busTypes.map((bus) => (
            <AnimatedSection key={bus.name}>
              <Card className='h-full overflow-hidden group hover:shadow-xl transition-all p-0'>
                <div className='relative aspect-video overflow-hidden'>
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <bus.icon className='w-5 h-5 text-white' />
                      <h3 className='text-white font-bold text-xl'>
                        {bus.name}
                      </h3>
                    </div>
                    <Badge variant='secondary' className='text-xs'>
                      {bus.capacity}
                    </Badge>
                  </div>
                </div>
                <CardContent className='p-5'>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {bus.description}
                  </p>
                  <ul className='space-y-2'>
                    {bus.features.map((feature) => (
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
