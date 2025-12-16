"use client";

import { FaShieldAlt, FaClock, FaMedal, FaCogs } from "react-icons/fa";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    id: "materials",
    icon: FaMedal,
    title: "Premium Materials",
    description:
      "Grade-A steel and high-quality components sourced for maximum durability.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    id: "engineering",
    icon: FaCogs,
    title: "Precision Engineering",
    description:
      "Modern CAD systems ensure every component meets exacting standards.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "delivery",
    icon: FaClock,
    title: "On-Time Delivery",
    description:
      "Reliable project timelines you can count on for your fleet planning.",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    id: "durability",
    icon: FaShieldAlt,
    title: "Built to Last",
    description:
      "Vehicles engineered to withstand Africa's toughest road conditions.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconBg: "bg-gradient-to-br from-primary to-primary/80",
  },
];

export function FeaturesBar() {
  return (
    <section className='py-6 md:py-8 bg-card'>
      <div className='container mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className='text-center mb-6 md:mb-10'>
          <h2 className='font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Excellence in Every <span className='text-primary'>Detail</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}>
              <Card
                className={`group relative h-full overflow-hidden border-0 bg-linear-to-br ${feature.gradient} backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2`}>
                {/* Decorative corner accent */}
                <div className='absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full' />

                <CardHeader className='pb-2 relative z-10'>
                  {/* Icon with floating effect */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}>
                    <feature.icon className='w-6 h-6 text-white' />
                  </motion.div>

                  <CardTitle className='text-lg font-bold tracking-tight transition-colors'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className='relative z-10 pt-0'>
                  <CardDescription className='text-sm leading-relaxed'>
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Bottom accent line */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
