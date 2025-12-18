"use client";

import { FaClock, FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";
import { turnaroundTimes } from "./data";

export function TurnaroundTimesSection() {
  return (
    <section className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        <AnimatedSection className='text-center mb-6 md:mb-10'>
          <Badge className='mb-4'>Timeline</Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Repair Turnaround Times
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            We understand your vehicle is essential. Here&apos;s what to expect.
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {turnaroundTimes.map((item) => (
            <AnimatedSection key={item.type}>
              <Card className='h-full border-2 hover:border-primary/50 transition-colors'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-2 mb-4'>
                    <FaClock className='w-5 h-5 text-primary' />
                    <Badge variant='secondary' className='text-sm font-bold'>
                      {item.time}
                    </Badge>
                  </div>
                  <h3 className='font-bold text-lg mb-2'>{item.type}</h3>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {item.description}
                  </p>
                  <ul className='space-y-2'>
                    {item.examples.map((example) => (
                      <li
                        key={example}
                        className='flex items-center gap-2 text-sm'>
                        <FaCheckCircle className='w-3 h-3 text-primary shrink-0' />
                        <span className='text-muted-foreground'>{example}</span>
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
