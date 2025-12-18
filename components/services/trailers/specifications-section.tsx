"use client";

import { FaAward, FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { trailerSpecifications } from "./data";

export function SpecificationsSection() {
  return (
    <section className='py-6 md:py-8 bg-card'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Premium Components</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Technical Specifications
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-8'>
              We use only the finest components from globally trusted brands to
              ensure your trailer performs reliably for years to come.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              {trailerSpecifications.map((spec) => (
                <div key={spec.label} className='bg-background rounded-xl p-4'>
                  <p className='text-sm text-muted-foreground'>{spec.label}</p>
                  <p className='font-semibold text-foreground'>{spec.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
              <FaAward className='w-12 h-12 mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Quality Guaranteed</h3>
              <p className='text-primary-foreground/90 mb-6'>
                Every trailer comes with a comprehensive warranty and our
                commitment to after-sales support. We stand behind our work.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>12-month structural warranty</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Genuine spare parts availability</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>24/7 technical support</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Nationwide service network</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
