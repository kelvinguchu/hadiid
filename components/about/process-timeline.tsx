"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaComments,
  FaPencilRuler,
  FaCogs,
  FaClipboardCheck,
  FaTruck,
} from "react-icons/fa";

const processSteps = [
  {
    id: "step-01",
    step: "01",
    title: "Consultation & Discovery",
    description:
      "We start by listening, working with you to understand your specific needs, operational challenges, and business goals.",
    icon: FaComments,
  },
  {
    id: "step-02",
    step: "02",
    title: "Design & Engineering",
    description:
      "Using advanced CAD and Finite-Element Analysis (FEA), our engineers create detailed blueprints optimized for strength and efficiency.",
    icon: FaPencilRuler,
  },
  {
    id: "step-03",
    step: "03",
    title: "Fabrication & Assembly",
    description:
      "Our certified technicians use CNC-controlled fabrication, premium components, and precision welding to bring the designs to life.",
    icon: FaCogs,
  },
  {
    id: "step-04",
    step: "04",
    title: "Quality Assurance & Testing",
    description:
      "Every build undergoes rigorous structural and performance testing to ensure it meets our exacting standards for safety and durability.",
    icon: FaClipboardCheck,
  },
  {
    id: "step-05",
    step: "05",
    title: "Delivery & After-Sales Support",
    description:
      "We ensure a smooth handover with operator training and provide robust after-sales support and warranties on all fabricated components.",
    icon: FaTruck,
  },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className='py-6 lg:py-8 bg-background relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center mb-8 md:mb-16'>
          <h2 className='font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4'>
            Our <span className='text-primary'>Process</span>
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className='hidden lg:block relative mx-auto'>
          {/* Horizontal Timeline line */}
          <div className='absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-primary/20 via-primary to-primary/20' />

          <div className='grid grid-cols-5 gap-4'>
            {processSteps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className='relative'>
                {/* Circle marker with icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                  }}
                  className='relative z-10 mx-auto w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30'>
                  <item.icon className='w-6 h-6 text-primary-foreground' />
                </motion.div>

                {/* Step number */}
                <div className='text-center mt-4 mb-3'>
                  <span className='text-primary font-bold text-lg'>
                    Step {item.step}
                  </span>
                </div>

                {/* Content card */}
                <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full'>
                  <CardContent className='p-5 text-center'>
                    <h3 className='font-poppins text-lg font-bold mb-2 text-foreground'>
                      {item.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className='lg:hidden relative max-w-xl mx-auto'>
          {/* Vertical Timeline line */}
          <div className='absolute left-7 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-primary to-primary/20' />

          <div className='space-y-8'>
            {processSteps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className='relative flex gap-6'>
                {/* Circle marker with icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                  }}
                  className='relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/30'>
                  <item.icon className='w-6 h-6 text-primary-foreground' />
                </motion.div>

                {/* Content card */}
                <Card className='flex-1 border-0 shadow-lg'>
                  <CardContent className='p-5'>
                    <span className='text-primary font-bold text-sm'>
                      Step {item.step}
                    </span>
                    <h3 className='font-poppins text-xl font-bold mt-1 mb-2 text-foreground'>
                      {item.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
