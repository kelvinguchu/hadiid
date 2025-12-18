"use client";

import { FaBus, FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";
import { chassisBrands } from "./data";

export function ChassisCompatibilitySection() {
  return (
    <section className='py-6 md:py-8 bg-card'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Compatibility</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Works with All Major{" "}
              <span className='text-primary'>Chassis Brands</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              We have extensive experience working with chassis from leading
              manufacturers. Our engineers understand the unique characteristics
              of each brand to ensure perfect fitment and optimal performance.
            </p>
            <div className='flex flex-wrap gap-3'>
              {chassisBrands.map((brand) => (
                <Badge
                  key={brand}
                  variant='outline'
                  className='text-sm py-2 px-4'>
                  {brand}
                </Badge>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
              <FaBus className='w-12 h-12 mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Safety First</h3>
              <p className='text-primary-foreground/90 mb-6'>
                Every bus we build is designed with passenger safety as the top
                priority. We incorporate multiple safety features that meet or
                exceed international standards.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Emergency exit doors and windows</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Fire suppression systems</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Anti-roll reinforcement</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>CCTV camera mounting points</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>First aid and safety equipment storage</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
