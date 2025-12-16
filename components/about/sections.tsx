"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import {
  FaEye,
  FaBullseye,
  FaCog,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
  FaWrench,
  FaCheckCircle,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const visionMission = [
  {
    id: "vision",
    icon: FaEye,
    title: "Our Vision",
    description:
      "To be Africa's leading engineering partner for transport solutions, empowering businesses with vehicles that set new benchmarks for quality, reliability, and operational efficiency.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "mission",
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "To design, fabricate, and repair world-class vehicle bodies and trailers by integrating CNC-controlled technology, superior components (like BPW and Hyva), and a client-centric approach to deliver unmatched value and safety.",
    gradient: "from-primary/5 to-primary/20",
  },
];

const coreValues = [
  {
    id: "excellence",
    icon: FaCog,
    title: "Engineering Excellence",
    description: "Precision in every weld and measurement",
  },
  {
    id: "innovation",
    icon: FaLightbulb,
    title: "Purposeful Innovation",
    description: "Solutions designed for African roads",
  },
  {
    id: "safety",
    icon: FaShieldAlt,
    title: "Uncompromising Safety",
    description: "Safety standards that exceed expectations",
  },
  {
    id: "partnership",
    icon: FaHandshake,
    title: "Customer Partnership",
    description: "Your success drives our commitment",
  },
  {
    id: "reliability",
    icon: FaWrench,
    title: "Reliability & Support",
    description: "Dependable service, always",
  },
];

const storyHighlights = [
  "Advanced CNC-controlled fabrication",
  "German-engineered components (BPW, Hyva)",
  "Purpose-built for African conditions",
];

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className='py-6 lg:py-8 bg-background relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

      <div className='container mx-auto px-4 relative'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-10'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>Our Story</Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        <div className='grid lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-6'>
            <h2 className='font-poppins text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6'>
              Engineering Excellence
              <br />
              <span className='relative'>
                <span className='text-primary'>Since Day One.</span>
                <motion.span
                  className='absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>

            <div className='space-y-4 text-muted-foreground text-lg leading-relaxed mb-8'>
              <p>
                <strong className='text-foreground'>
                  HADIID Industries Ltd
                </strong>{" "}
                was established to solve a critical challenge in the African
                transport sector: the need for vehicles that are not just
                imported, but truly engineered for our unique and demanding
                conditions.
              </p>
              <p>
                We specialize in transforming standard chassis from brands like
                Isuzu, Hino, and Mercedes into purpose-built workhorses—from
                rugged heavy-duty trailers for mining sites to efficient buses
                for city routes.
              </p>
            </div>

            {/* Highlights */}
            <div className='space-y-3'>
              {storyHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='w-3.5 h-3.5 text-primary' />
                  </div>
                  <span className='text-foreground font-medium'>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-6'>
            <div className='relative'>
              {/* Main image */}
              <div className='relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/schoolbuses/DSC09520.webp'
                  alt='HADIID Industries workshop and team'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                className='absolute -bottom-4 left-2 md:-bottom-8 md:-left-8'>
                <Card className='bg-primary text-primary-foreground border-0 shadow-xl'>
                  <CardContent className='p-3 md:p-6'>
                    <div className='text-2xl md:text-4xl font-bold'>15+</div>
                    <div className='text-xs md:text-sm text-primary-foreground/80'>
                      Years of Excellence
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Decorative border */}
              <div className='absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function VisionMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className='py-6 lg:py-8 bg-card relative overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className='container mx-auto px-4 relative'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center mb-8 md:mb-16'>
          <h2 className='font-poppins text-4xl lg:text-5xl font-bold text-foreground'>
            Driving Africa&apos;s Future
          </h2>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className='grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-20'>
          {visionMission.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}>
              <Card
                className={`relative overflow-hidden border-0 shadow-xl bg-linear-to-br ${item.gradient} h-full`}>
                {/* Accent line */}
                <div className='absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/80 to-primary/50' />

                <CardContent className='pt-10 pb-8 px-8'>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                    }}
                    className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6'>
                    <item.icon className='h-8 w-8 text-primary' />
                  </motion.div>

                  <h3 className='font-poppins text-2xl font-bold mb-4 text-foreground'>
                    {item.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed text-lg'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-center mb-6 md:mb-10'>
          <h2 className='font-poppins text-3xl md:text-4xl font-bold'>
            Our Core <span className='text-primary'>Values</span>
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}>
              <Card className='h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group'>
                <CardContent className='p-6 text-center'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'>
                    <value.icon className='h-7 w-7 text-primary' />
                  </motion.div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    {value.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
