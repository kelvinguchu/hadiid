"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { trailerTypes } from "./data";

export function TrailerTypesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Our Range</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Trailer Types We Build
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            From flatbeds to tankers, we manufacture a complete range of
            trailers for every transport need.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {trailerTypes.map((trailer) => (
            <AnimatedSection key={trailer.name}>
              <Card className='h-full overflow-hidden group hover:shadow-xl transition-all p-0'>
                <div className='relative aspect-video overflow-hidden'>
                  <Image
                    src={trailer.image}
                    alt={trailer.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
                  <h3 className='absolute bottom-4 left-4 text-white font-bold text-xl'>
                    {trailer.name}
                  </h3>
                </div>
                <CardContent className='p-5'>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {trailer.description}
                  </p>
                  <ul className='space-y-2'>
                    {trailer.features.map((feature) => (
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
