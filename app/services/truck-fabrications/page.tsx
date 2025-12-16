"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  FaCheckCircle,
  FaTruck,
  FaCogs,
  FaIndustry,
  FaRuler,
  FaPaintBrush,
  FaPhoneAlt,
  FaBoxOpen,
  FaTint,
  FaSnowflake,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bodyTypes = [
  {
    name: "Flatbed Bodies",
    icon: FaTruck,
    description:
      "Open platform bodies ideal for construction materials, machinery, and general cargo.",
    features: [
      "Steel or aluminum construction",
      "Drop sides available",
      "Heavy-duty tie-down points",
      "Custom lengths up to 40ft",
    ],
  },
  {
    name: "Box Bodies",
    icon: FaBoxOpen,
    description:
      "Enclosed cargo bodies for secure transport of goods and merchandise.",
    features: [
      "Insulated or non-insulated",
      "Roller shutter or swing doors",
      "Interior lighting options",
      "Ply-lined or bare metal",
    ],
  },
  {
    name: "Tipper Bodies",
    icon: FaIndustry,
    description:
      "Hydraulic tipping bodies for efficient unloading of loose materials.",
    features: [
      "Rear or 3-way tipping",
      "Hardox steel construction",
      "Cab protector included",
      "10-30 cubic meter capacity",
    ],
  },
  {
    name: "Tanker Bodies",
    icon: FaTint,
    description:
      "Specialized tanks for petroleum, water, milk, and chemical transport.",
    features: [
      "Stainless or carbon steel",
      "Multi-compartment options",
      "Baffles for stability",
      "Metering systems available",
    ],
  },
  {
    name: "Refrigerated Bodies",
    icon: FaSnowflake,
    description:
      "Temperature-controlled bodies for fresh produce and frozen goods.",
    features: [
      "Insulated sandwich panels",
      "Carrier/Thermo King compatible",
      "T-bar or flat floors",
      "-25°C to +25°C range",
    ],
  },
  {
    name: "Container Bodies",
    icon: FaBoxOpen,
    description: "Fixed container bodies mounted directly on truck chassis.",
    features: [
      "20ft standard sizing",
      "Double doors rear access",
      "Forklift compatible",
      "Lockable security",
    ],
  },
];

const capabilities = [
  {
    title: "Precision Cutting",
    description:
      "CNC plasma and laser cutting for accurate component fabrication.",
    icon: FaRuler,
  },
  {
    title: "Expert Welding",
    description:
      "MIG, TIG, and robotic welding for superior structural joints.",
    icon: FaCogs,
  },
  {
    title: "Panel Forming",
    description: "Hydraulic press brakes for consistent bending and shaping.",
    icon: FaIndustry,
  },
  {
    title: "Surface Finishing",
    description:
      "Sandblasting, priming, and spray painting for lasting protection.",
    icon: FaPaintBrush,
  },
];

const process = [
  {
    step: 1,
    title: "Requirements Analysis",
    description:
      "We assess your payload, cargo type, and operational requirements.",
  },
  {
    step: 2,
    title: "Custom Design",
    description:
      "Our engineers create detailed drawings tailored to your chassis.",
  },
  {
    step: 3,
    title: "Material Preparation",
    description:
      "Precision cutting and forming of steel or aluminum components.",
  },
  {
    step: 4,
    title: "Assembly & Welding",
    description: "Expert fabrication with quality control at every stage.",
  },
  {
    step: 5,
    title: "Finishing",
    description: "Surface treatment, painting, and accessory installation.",
  },
  {
    step: 6,
    title: "Delivery",
    description: "Final inspection and handover with documentation.",
  },
];

const stats = [
  { value: "500+", label: "Bodies Built" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30", label: "Day Turnaround" },
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

export default function TruckFabricationsPage() {
  return (
    <div>
      <PageHeader
        title='Truck Body Fabrication'
        subtitle='Transform your cab-and-chassis into a purpose-built transporter engineered for performance and efficiency.'
        backgroundImage='/images/truck_body.png'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Truck Body Fabrication" },
        ]}
      />
      <div className='px-4'>
        {/* Introduction Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Custom Solutions</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Bodies Built to{" "}
                  <span className='text-primary'>Your Specifications</span>
                </h2>
                <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                  At HADIID Industries, we specialize in transforming
                  cabin-and-chassis vehicles into fully functional transporters.
                  Whether you need a simple flatbed or a complex refrigerated
                  body, we deliver solutions tailored to your exact
                  requirements.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Our experienced team works with all major truck brands
                  including Isuzu, Hino, Fuso, Mercedes-Benz, Scania, and Volvo
                  to ensure perfect fitment and optimal load distribution.
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
                      src='/images/truck_body.png'
                      alt='Truck body fabrication'
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

        {/* Body Types Section */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Our Expertise</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Types of Truck Bodies
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                We manufacture a comprehensive range of truck bodies for various
                industries and applications.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {bodyTypes.map((body) => (
                <AnimatedSection key={body.name}>
                  <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                    <CardContent className='p-6'>
                      <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4'>
                        <body.icon className='w-7 h-7 text-primary' />
                      </div>
                      <h3 className='font-bold text-xl mb-2'>{body.name}</h3>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {body.description}
                      </p>
                      <ul className='space-y-2'>
                        {body.features.map((feature) => (
                          <li
                            key={feature}
                            className='flex items-center gap-2 text-sm'>
                            <FaCheckCircle className='w-4 h-4 text-primary shrink-0' />
                            <span>{feature}</span>
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

        {/* Capabilities Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <div className='grid grid-cols-2 gap-4'>
                  {capabilities.map((cap) => (
                    <Card key={cap.title} className='border-none shadow-lg'>
                      <CardContent className='p-5'>
                        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3'>
                          <cap.icon className='w-6 h-6 text-primary' />
                        </div>
                        <h3 className='font-semibold mb-1'>{cap.title}</h3>
                        <p className='text-muted-foreground text-sm'>
                          {cap.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Badge className='mb-4'>Manufacturing Excellence</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  State-of-the-Art{" "}
                  <span className='text-primary'>Fabrication</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Our workshop is equipped with modern machinery and tools that
                  enable us to produce truck bodies of exceptional quality. From
                  precision cutting to expert welding, every process is
                  optimized for accuracy and efficiency.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  We use high-tensile steel, marine-grade aluminum, and
                  corrosion-resistant materials to ensure your truck body
                  withstands the rigors of daily operation.
                </p>
                <div className='flex flex-wrap gap-4'>
                  <Button size='lg' className='rounded-full gap-2' asChild>
                    <Link href='/contact-us'>
                      Get Quote <HiArrowRight />
                    </Link>
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='rounded-full gap-2'
                    asChild>
                    <Link href='/our-work'>View Our Work</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Fabrication Process
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                A systematic approach ensures quality and timely delivery on
                every project.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {process.map((item) => (
                <AnimatedSection key={item.step}>
                  <div className='bg-background rounded-2xl p-6 h-full relative'>
                    <div className='absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center'>
                      {item.step}
                    </div>
                    <h3 className='font-semibold text-lg mb-2 mt-4'>
                      {item.title}
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Options */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src='/images/truck_body.png'
                    alt='Truck accessories'
                    fill
                    className='object-cover'
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Badge className='mb-4'>Customization</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Optional Features & Accessories
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Enhance your truck body with additional features tailored to
                  your operational needs.
                </p>

                <div className='space-y-4'>
                  {[
                    "Internal shelving and compartments",
                    "Bulkheads and partitions",
                    "Access ladders and walkways",
                    "Tie-down rails and cargo nets",
                    "Branded panels and signage",
                    "Lighting (interior and exterior)",
                    "Hydraulic tailgate lifts",
                    "Side access doors and curtains",
                  ].map((feature) => (
                    <div key={feature} className='flex items-center gap-3'>
                      <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                        <FaCheckCircle className='w-3 h-3 text-primary' />
                      </div>
                      <span className='text-foreground'>{feature}</span>
                    </div>
                  ))}
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
              Ready to Build Your Truck Body?
            </h2>
            <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
              Contact us today for a consultation and detailed quotation
              tailored to your specifications.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button
                size='lg'
                variant='secondary'
                className='rounded-full gap-2'
                asChild>
                <Link href='/contact-us'>
                  Get a Free Quote <HiArrowRight />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='rounded-full gap-2 bg-transparent border-white text-white hover:bg-white/10'
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
