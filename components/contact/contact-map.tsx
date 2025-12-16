"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ContactMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className='py-6 md:py-8 bg-muted/30 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />

      <div className='container mx-auto px-4'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>
            Our Location
          </Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-center mb-6 md:mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold font-poppins mb-4'>
            Find Us On The <span className='text-primary'>Map</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative'>
          {/* Decorative border */}
          <div className='absolute -inset-3 border-2 border-primary/20 rounded-3xl -z-10' />

          <div className='rounded-2xl overflow-hidden shadow-2xl'>
            <iframe
              src='https://www.openstreetmap.org/export/embed.html?bbox=36.82787%2C-1.3106%2C36.84787%2C-1.2906&layer=mapnik&marker=-1.3006%2C36.8379'
              title='HADIID Industries Location - Kampala Road, Industrial Area, Nairobi'
              className='w-full h-96 md:h-112.5 border-0'
              allowFullScreen
              loading='lazy'
            />
          </div>

          {/* Map attribution */}
          <p className='text-xs text-muted-foreground text-center mt-3'>
            Map data ©{" "}
            <a
              href='https://www.openstreetmap.org/copyright'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'>
              OpenStreetMap
            </a>{" "}
            contributors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
