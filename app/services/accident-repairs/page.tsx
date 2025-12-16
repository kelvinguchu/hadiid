"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  FaCheckCircle,
  FaWrench,
  FaCar,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaSprayCan,
  FaSearch,
  FaFileAlt,
  FaPhoneAlt,
  FaTruck,
  FaBus,
  FaExchangeAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const repairServices = [
  {
    icon: FaWrench,
    title: "Panel Beating",
    description:
      "Expert panel repair and replacement to restore your vehicle's body to factory condition.",
    items: [
      "Dent removal",
      "Panel replacement",
      "Structural straightening",
      "Frame alignment",
    ],
  },
  {
    icon: FaSprayCan,
    title: "Spray Painting",
    description:
      "Professional painting with color matching and multi-coat finishing for a flawless result.",
    items: [
      "Full respray",
      "Spot repairs",
      "Color matching",
      "Clear coat finishing",
    ],
  },
  {
    icon: FaTools,
    title: "Mechanical Repairs",
    description:
      "Complete mechanical restoration including suspension, steering, and brake systems.",
    items: [
      "Suspension repair",
      "Steering alignment",
      "Brake systems",
      "Engine components",
    ],
  },
  {
    icon: FaExchangeAlt,
    title: "Parts Replacement",
    description:
      "Genuine and OEM-equivalent parts for all vehicle makes and models.",
    items: [
      "Body panels",
      "Bumpers & grilles",
      "Lighting systems",
      "Glass replacement",
    ],
  },
];

const vehicleTypes = [
  {
    icon: FaCar,
    name: "Sedans & SUVs",
    description: "Personal vehicles of all makes and models",
  },
  {
    icon: FaTruck,
    name: "Trucks & Pickups",
    description: "Light to heavy-duty commercial trucks",
  },
  {
    icon: FaBus,
    name: "Buses & Coaches",
    description: "School buses, minibuses, and coaches",
  },
  {
    icon: FaTruck,
    name: "Trailers",
    description: "All types of trailers and semi-trailers",
  },
];

const process = [
  {
    step: 1,
    title: "Assessment",
    icon: FaSearch,
    description:
      "Thorough inspection to document all damage and determine repair scope.",
    duration: "Same day",
  },
  {
    step: 2,
    title: "Quotation",
    icon: FaFileAlt,
    description:
      "Detailed, itemized quote with parts, labor, and timeline breakdown.",
    duration: "24 hours",
  },
  {
    step: 3,
    title: "Approval",
    icon: FaCheckCircle,
    description:
      "Review and approval of repair plan, insurance coordination if needed.",
    duration: "1-2 days",
  },
  {
    step: 4,
    title: "Repair",
    icon: FaTools,
    description:
      "Expert technicians execute repairs with quality control checks.",
    duration: "Varies",
  },
  {
    step: 5,
    title: "Quality Check",
    icon: FaShieldAlt,
    description:
      "Multi-stage inspection ensures repairs meet our high standards.",
    duration: "1 day",
  },
  {
    step: 6,
    title: "Handover",
    icon: FaCar,
    description: "Final walkthrough, documentation, and vehicle handover.",
    duration: "Same day",
  },
];

const turnaroundTimes = [
  {
    type: "Minor Repairs",
    description: "Small dents, scratches, minor panel damage",
    time: "1-3 days",
    examples: ["Door dings", "Bumper scuffs", "Small paint chips"],
  },
  {
    type: "Moderate Repairs",
    description: "Panel replacement, multiple panels, mechanical work",
    time: "5-7 days",
    examples: ["Fender replacement", "Hood damage", "Side panel repairs"],
  },
  {
    type: "Major Repairs",
    description: "Structural damage, frame straightening, extensive work",
    time: "10-14 days",
    examples: [
      "Front-end collision",
      "Rollover damage",
      "Multi-panel replacement",
    ],
  },
  {
    type: "Heavy Vehicle Repairs",
    description: "Trucks, buses, trailers with significant damage",
    time: "14-21 days",
    examples: ["Trailer rebuilds", "Bus body repairs", "Truck cab restoration"],
  },
];

const stats = [
  { value: "1000+", label: "Vehicles Repaired" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "24hrs", label: "Quote Turnaround" },
];

const whyChooseUs = [
  "Transparent, itemized quotations with no hidden costs",
  "OEM-equivalent parts for all repairs",
  "Skilled, certified technicians",
  "Insurance claim assistance",
  "Courtesy vehicle available (subject to availability)",
  "Written warranty on all repairs",
  "Progress updates via WhatsApp",
  "Secure, covered workshop facility",
];

function AnimatedSection({
  children,
  className = "",
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}>
      {children}
    </motion.div>
  );
}

export default function AccidentRepairsPage() {
  return (
    <div>
      <PageHeader
        title='Accident Repairs'
        subtitle='Expert collision repair for all vehicle types - from minor dents to major structural damage.'
        backgroundImage='/images/ac2.jpeg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Accident Repairs" },
        ]}
      />
      <div className='px-4'>
        {/* Introduction Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Expert Restoration</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  We Restore Vehicles to{" "}
                  <span className='text-primary'>Pre-Accident Condition</span>
                </h2>
                <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                  At HADIID Industries, we understand that vehicle damage is
                  stressful. Our experienced team handles everything from minor
                  cosmetic repairs to major structural restoration, getting you
                  back on the road quickly and safely.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  We work with all insurance companies and provide transparent,
                  itemized quotations so you know exactly what to expect. Our
                  skilled technicians use modern equipment and quality parts to
                  ensure lasting repairs.
                </p>

                {/* Stats */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {stats.map((stat) => (
                    <div key={stat.label} className='text-center'>
                      <p className='text-3xl font-bold text-primary'>
                        {stat.value}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className='relative'>
                  <div className='relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      src='/images/ac2.jpeg'
                      alt='Accident repair'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10' />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                We Repair All Vehicle Types
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                From personal vehicles to heavy commercial trucks, our workshop
                handles them all.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {vehicleTypes.map((vehicle) => (
                <AnimatedSection key={vehicle.name}>
                  <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow text-center'>
                    <CardContent className='p-6'>
                      <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                        <vehicle.icon className='w-8 h-8 text-primary' />
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {vehicle.name}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {vehicle.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Services */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Our Services</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Comprehensive Repair Services
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Everything you need to restore your vehicle under one roof.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 gap-6'>
              {repairServices.map((service) => (
                <AnimatedSection key={service.title}>
                  <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                    <CardContent className='p-6'>
                      <div className='flex items-start gap-4'>
                        <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0'>
                          <service.icon className='w-7 h-7 text-primary' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='font-bold text-xl mb-2'>
                            {service.title}
                          </h3>
                          <p className='text-muted-foreground text-sm mb-4'>
                            {service.description}
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {service.items.map((item) => (
                              <Badge
                                key={item}
                                variant='secondary'
                                className='text-xs'>
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Repair Process
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                A transparent, step-by-step approach to vehicle restoration.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {process.map((item) => (
                <AnimatedSection key={item.step}>
                  <div className='bg-background rounded-2xl p-6 h-full relative'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center'>
                        {item.step}
                      </div>
                      <div>
                        <h3 className='font-semibold text-lg'>{item.title}</h3>
                        <p className='text-sm text-primary'>{item.duration}</p>
                      </div>
                    </div>
                    <p className='text-muted-foreground text-sm'>
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Turnaround Times */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Timeline</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Repair Turnaround Times
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                We understand your vehicle is essential. Here&apos;s what to
                expect.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {turnaroundTimes.map((item) => (
                <AnimatedSection key={item.type}>
                  <Card className='h-full border-2 hover:border-primary/50 transition-colors'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-2 mb-4'>
                        <FaClock className='w-5 h-5 text-primary' />
                        <Badge
                          variant='secondary'
                          className='text-sm font-bold'>
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
                            <span className='text-muted-foreground'>
                              {example}
                            </span>
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

        {/* Why Choose Us */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src='/images/ac2.jpeg'
                    alt='Repair workshop'
                    fill
                    className='object-cover'
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Badge className='mb-4'>Why Choose Us</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Your Vehicle in{" "}
                  <span className='text-primary'>Expert Hands</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  We take pride in delivering quality repairs with transparency
                  and professionalism.
                </p>

                <div className='grid grid-cols-1 gap-3'>
                  {whyChooseUs.map((item) => (
                    <div key={item} className='flex items-center gap-3'>
                      <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                        <FaCheckCircle className='w-3 h-3 text-primary' />
                      </div>
                      <span className='text-foreground'>{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Insurance Section */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Insurance Claims</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  We Work with{" "}
                  <span className='text-primary'>All Insurance Companies</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Dealing with insurance claims can be complicated. Our team has
                  extensive experience working with all major insurance
                  providers in Kenya. We handle the paperwork and communication,
                  making the process as smooth as possible for you.
                </p>
                <ul className='space-y-4 mb-8'>
                  <li className='flex items-start gap-3'>
                    <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <div>
                      <p className='font-semibold'>Direct Insurance Billing</p>
                      <p className='text-sm text-muted-foreground'>
                        We can bill your insurance directly in most cases.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <div>
                      <p className='font-semibold'>Assessment Coordination</p>
                      <p className='text-sm text-muted-foreground'>
                        We coordinate with insurance assessors on your behalf.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-3'>
                    <FaCheckCircle className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <div>
                      <p className='font-semibold'>Documentation Support</p>
                      <p className='text-sm text-muted-foreground'>
                        Complete photographic documentation and repair reports.
                      </p>
                    </div>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
                  <FaShieldAlt className='w-12 h-12 mb-6' />
                  <h3 className='text-2xl font-bold mb-4'>Quality Guarantee</h3>
                  <p className='text-primary-foreground/90 mb-6'>
                    Every repair comes with our quality guarantee. We stand
                    behind our workmanship.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>12-month warranty on repairs</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>OEM-equivalent parts used</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Multi-point quality inspection</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Before/after photo documentation</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className='py-6 md:py-8 bg-primary text-primary-foreground'>
        <div className='container mx-auto text-center'>
          <AnimatedSection>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Need Accident Repair?
            </h2>
            <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
              Bring your vehicle for a free assessment. We&apos;ll provide a
              detailed quote within 24 hours.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button
                size='lg'
                variant='secondary'
                className='rounded-full gap-2'
                asChild>
                <Link href='/contact-us'>
                  Get Free Assessment <HiArrowRight />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='rounded-full bg-transparent gap-2 border-white text-white hover:bg-white/10'
                asChild>
                <Link href='tel:+254759888333'>
                  <FaPhoneAlt /> 0759 888 333
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
