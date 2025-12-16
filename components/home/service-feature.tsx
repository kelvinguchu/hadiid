"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { FaCheck } from "react-icons/fa";

interface ServiceFeatureProps {
  readonly title: string;
  readonly titleHighlight: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly reverse?: boolean;
}

export function ServiceFeature({
  title,
  titleHighlight,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
}: ServiceFeatureProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className='py-4 bg-background'>
      <div className='container mx-auto'>
        {/* Outer card with border and white background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='bg-white border border-border rounded-2xl p-2 md:p-4 shadow-sm'>
          <div
            className={`grid lg:grid-cols-2 gap-2 items-stretch ${
              reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}>
            {/* Content with darker background */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col justify-center bg-muted/50 rounded-xl p-4 md:p-6'>
              <h3 className='font-poppins text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4'>
                {title} <span className='text-primary'>{titleHighlight}</span>
              </h3>

              <p className='text-muted-foreground leading-relaxed mb-6'>
                {description}
              </p>

              {/* Features list */}
              <ul className='space-y-3'>
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className='flex items-center gap-3'>
                    <div className='w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0'>
                      <FaCheck className='w-2.5 h-2.5 text-primary' />
                    </div>
                    <span className='text-sm text-foreground'>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image with border radius */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='relative aspect-4/3 lg:aspect-auto min-h-70 rounded-xl overflow-hidden'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className='object-cover'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
