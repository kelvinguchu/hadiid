"use client";

import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../animated-section";

export function InsuranceSection() {
  return (
    <section className='py-6 md:py-8 bg-card'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
          <AnimatedSection>
            <Badge className='mb-4'>Insurance Claims</Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              We Work with{" "}
              <span className='text-primary'>All Insurance Companies</span>
            </h2>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              Dealing with insurance claims can be complicated. Our team has
              extensive experience working with all major insurance providers in
              Kenya. We handle the paperwork and communication, making the
              process as smooth as possible for you.
            </p>
            <ul className='space-y-4 mb-8'>
              <li className='flex items-start gap-3'>
                <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                <div>
                  <p className='font-semibold'>Direct Insurance Billing</p>
                  <p className='text-sm text-muted-foreground'>
                    We can bill your insurance directly in most cases.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                <div>
                  <p className='font-semibold'>Assessment Coordination</p>
                  <p className='text-sm text-muted-foreground'>
                    We coordinate with insurance assessors on your behalf.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                <div>
                  <p className='font-semibold'>Documentation Support</p>
                  <p className='text-sm text-muted-foreground'>
                    Complete photographic documentation and repair reports.
                  </p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
              <FaShieldAlt className='w-12 h-12 mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Quality Guarantee</h3>
              <p className='text-primary-foreground/90 mb-6'>
                Every repair comes with our quality guarantee. We stand behind
                our workmanship.
              </p>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>12-month warranty on repairs</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>OEM-equivalent parts used</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Multi-point quality inspection</span>
                </li>
                <li className='flex items-center gap-3'>
                  <FaCheckCircle className='w-5 h-5' />
                  <span>Before/after photo documentation</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
