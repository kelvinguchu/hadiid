"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { truckStats } from "./data";

export function TruckFabricationsIntro() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Custom Solutions</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Bodies Built to{" "}
              <span className='text-primary'>Your Specifications</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              At HADIID Industries, we specialize in transforming
              cabin-and-chassis vehicles into fully functional transporters.
              Whether you need a simple flatbed or a complex refrigerated body,
              we deliver solutions tailored to your exact requirements.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              Our experienced team works with all major truck brands including
              Isuzu, Hino, Fuso, Mercedes-Benz, Scania, and Volvo to ensure
              perfect fitment and optimal load distribution.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {truckStats.map((stat) => (
                <div key={stat.label} className='text-center'>
                  <p className='text-3xl font-bold text-primary'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-muted-foreground'>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='relative'>
              <div className='relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/lorry-making/DSC01598.jpg'
                  alt='Truck body fabrication'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10' />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
