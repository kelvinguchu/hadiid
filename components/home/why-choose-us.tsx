"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FaCogs, FaLeaf, FaHandshake, FaAward } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const advantages = [
  {
    icon: FaCogs,
    title: "Modern Technology",
    description:
      "State-of-the-art CAD systems and precision machinery for exacting standards.",
    number: "01",
  },
  {
    icon: FaLeaf,
    title: "Efficiency Focused",
    description:
      "Lighter, stronger bodies that increase payload and reduce fuel costs.",
    number: "02",
  },
  {
    icon: FaHandshake,
    title: "True Partnership",
    description:
      "Dedicated support from concept to delivery, ensuring your success.",
    number: "03",
  },
  {
    icon: FaAward,
    title: "Quality Assured",
    description:
      "Rigorous quality control guarantees products exceeding industry standards.",
    number: "04",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className='py-6 md:py-8 bg-background'>
      <div className='container mx-auto'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>
            Why Choose Us
          </Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        {/* Grid of advantages */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}>
              <Card className='group h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300'>
                <CardHeader className='pb-3'>
                  <div className='flex items-start justify-between mb-3'>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <item.icon className='w-5 h-5 text-primary' />
                    </div>
                    <span className='text-3xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors'>
                      {item.number}
                    </span>
                  </div>
                  <CardTitle className='text-base font-semibold'>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription className='text-sm leading-relaxed'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
