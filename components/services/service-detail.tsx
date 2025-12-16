"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceFeature {
  readonly title: string;
  readonly description: string;
}

interface ServiceDetailProps {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly features: readonly ServiceFeature[];
  readonly href: string;
  readonly reverse?: boolean;
}

export function ServiceDetail({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  href,
  reverse = false,
}: ServiceDetailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className='py-6 md:py-8 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div
        className={`absolute top-1/4 ${
          reverse ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        } w-96 h-96 bg-primary/5 rounded-full blur-3xl`}
      />

      <div className='container mx-auto px-4'>
        <div
          className={`grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}>
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-6 flex'>
            <div className='relative w-full'>
              {/* Main image container */}
              <div className='relative h-full min-h-80 rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className='object-contain'
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
              </div>

              {/* Decorative border */}
              <div
                className={`absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10 ${
                  reverse ? "-rotate-2" : "rotate-2"
                }`}
              />

              {/* Accent element */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className={`absolute ${
                  reverse ? "-right-4 -bottom-4" : "-left-4 -bottom-4"
                } w-24 h-24 bg-primary rounded-2xl -z-10`}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-6 flex flex-col justify-center'>

            <h2 className='font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight'>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className='text-primary'>{title.split(" ").slice(-1)}</span>
            </h2>

            <p className='text-muted-foreground text-base mb-6 leading-relaxed'>
              {description}
            </p>

            {/* Features Grid */}
            <div className='grid sm:grid-cols-2 gap-3 mb-6'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>
                  <Card className='h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm'>
                    <CardContent className='p-3'>
                      <div className='flex items-start gap-2'>
                        <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5'>
                          <FaCheckCircle className='w-3 h-3 text-primary' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-foreground text-sm mb-0.5'>
                            {feature.title}
                          </h4>
                          <p className='text-xs text-muted-foreground leading-relaxed'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Button
                size='lg'
                className='group shadow-lg shadow-primary/25'
                asChild>
                <Link href={href} className='flex items-center gap-2'>
                  Learn More
                  <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
