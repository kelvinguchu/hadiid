"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaBus, FaTruck, FaArrowRight } from "react-icons/fa";
import { LuContainer } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    icon: FaBus,
    title: "Bus Bodies",
    description:
      "Custom-designed bodies for city commuters, shuttles, and luxury coaches.",
    href: "/services/bus-body",
  },
  {
    icon: LuContainer,
    title: "Trailer Bodies",
    description:
      "Durable flatbeds, tankers, and tippers for demanding logistics operations.",
    href: "/services/trailers",
  },
  {
    icon: FaTruck,
    title: "Truck Bodies",
    description:
      "Heavy-duty cargo bodies, refrigerated units, and utility vehicles.",
    href: "/services/truck-fabrications",
  },
];

export function ServicesOverview() {
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
            Our Services
          </Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group'>
              <Link href={service.href} className='block h-full'>
                <Card className='h-full border-border hover:border-primary/40 transition-all duration-300'>
                  <CardHeader>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors duration-300'>
                      <service.icon className='w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300' />
                    </div>
                    <CardTitle className='text-lg font-bold'>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <CardDescription className='text-sm leading-relaxed mb-4'>
                      {service.description}
                    </CardDescription>

                    <span className='inline-flex items-center gap-2 text-sm font-medium text-primary'>
                      Learn more
                      <FaArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
