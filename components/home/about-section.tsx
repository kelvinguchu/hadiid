"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    value: "500+",
    label: "Vehicles Built",
    icon: FaTrophy,
    color: "text-primary",
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: FaIndustry,
    color: "text-foreground",
  },
  {
    value: "90+",
    label: "Expert Team",
    icon: FaUsers,
    color: "text-foreground",
  },
];

const highlights = [
  "State-of-the-art 11,500 sqm facility",
  "Precision CAD engineering",
  "Industry-leading quality standards",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className='py-6 md:py-8 bg-linear-to-b from-card via-card to-background relative overflow-hidden'>
      <div className='container mx-auto'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-10'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>About Us</Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        <div className='grid lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-6 flex flex-col'>
            <h2 className='font-poppins text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6'>
              We don&apos;t just build vehicles.
              <br />
              <span className='relative'>
                <span className='text-primary'>We build trust.</span>
                <motion.span
                  className='absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>

            <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
              For over 15 years, HADIID Industries has been the backbone of East
              Africa&apos;s commercial transport sector. From our
              state-of-the-art facility in Nairobi, we manufacture bus bodies,
              trailers, and truck fabrications that define industry standards.
            </p>

            {/* Highlights with icons */}
            <div className='space-y-3 mb-8'>
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center'>
                    <FaCheckCircle className='w-3.5 h-3.5 text-primary' />
                  </div>
                  <span className='text-foreground font-medium'>{item}</span>
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
                <Link href='/about-us' className='flex items-center gap-2'>
                  Our Full Story
                  <FaArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-6'>
            <div className='relative'>
              {/* Main image container with creative shape */}
              <div className='relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/schoolbuses/DSC09505.webp'
                  alt='Hadiid Industries craftsmanship'
                  fill
                  className='object-cover'
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />

                {/* Experience badge floating on image */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className='absolute top-4 right-4'>
                  <Card className='bg-background/95 backdrop-blur-sm border-0 shadow-xl'>
                    <CardContent className='p-4 text-center'>
                      <span className='font-poppins text-3xl font-bold text-primary block'>
                        15+
                      </span>
                      <span className='text-xs text-muted-foreground uppercase tracking-wider'>
                        Years
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Stats cards floating below */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-8'>
                <Card className='bg-background/95 backdrop-blur-md shadow-2xl border-0'>
                  <CardContent className='p-0'>
                    <div className='grid grid-cols-3 divide-x divide-border'>
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.5 + index * 0.1,
                          }}
                          className='p-4 sm:p-6 text-center group hover:bg-muted/50 transition-colors first:rounded-l-xl last:rounded-r-xl'>
                          <stat.icon className='w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors' />
                          <p
                            className={`font-poppins text-2xl sm:text-3xl font-bold ${stat.color}`}>
                            {stat.value}
                          </p>
                          <p className='text-xs text-muted-foreground mt-1 uppercase tracking-wider'>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10' />
              <div className='absolute -bottom-16 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
