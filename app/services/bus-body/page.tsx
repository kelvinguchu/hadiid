"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  FaCheckCircle,
  FaBus,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaGraduationCap,
  FaRoute,
  FaMountain,
  FaCity,
  FaAward,
  FaPhoneAlt,
  FaWheelchair,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const busTypes = [
  {
    name: "School Buses",
    icon: FaGraduationCap,
    description:
      "Safe and reliable school buses designed to protect students on their daily commute.",
    image: "/school-buses/DSC09536.jpg",
    capacity: "25-67 seats",
    features: [
      "Emergency exits on all sides",
      "First aid kit mounting",
      "GPS tracking ready",
      "High-visibility yellow paint",
    ],
  },
  {
    name: "Urban Transit Buses",
    icon: FaCity,
    description:
      "City buses optimized for frequent stops and high passenger turnover.",
    image: "/psv-bus/DSC00980.jpg",
    capacity: "30-60 seats",
    features: [
      "Low floor entry option",
      "Wide doorways for quick boarding",
      "Standing room design",
      "Route display systems",
    ],
  },
  {
    name: "Intercity Coaches",
    icon: FaRoute,
    description:
      "Comfortable long-distance coaches for intercity and cross-border travel.",
    image: "/psv-bus/DSC09816.jpg",
    capacity: "45-55 seats",
    features: [
      "Reclining seats with legroom",
      "Luggage compartments",
      "Entertainment systems",
      "Toilet facilities optional",
    ],
  },
  {
    name: "Safari & Tour Buses",
    icon: FaMountain,
    description:
      "Specially designed for tourism with panoramic views and enhanced comfort.",
    image: "/school-buses/DSC09517.jpg",
    capacity: "20-40 seats",
    features: [
      "Large viewing windows",
      "Pop-up roof option",
      "Premium seating",
      "PA system included",
    ],
  },
  {
    name: "Staff Transport",
    icon: FaUsers,
    description:
      "Employee shuttle buses for corporate and industrial transport needs.",
    image: "/school-bus-making/DSC00979.jpg",
    capacity: "25-50 seats",
    features: [
      "Comfortable seating",
      "Air conditioning",
      "Corporate branding",
      "WiFi ready",
    ],
  },
  {
    name: "Accessible Buses",
    icon: FaWheelchair,
    description:
      "Wheelchair accessible buses for inclusive public transportation.",
    image: "/psv-bus/DSC00992.jpg",
    capacity: "20-35 seats",
    features: [
      "Wheelchair ramps/lifts",
      "Designated wheelchair spaces",
      "Priority seating",
      "Audio announcements",
    ],
  },
];

const designFeatures = [
  {
    icon: FaCogs,
    title: "CAD-Led Engineering",
    description:
      "Finite element analysis ensures optimal strength, weight distribution, and perfect chassis fitment.",
  },
  {
    icon: FaShieldAlt,
    title: "Reinforced Structure",
    description:
      "Heavy-duty steel framework tested to withstand harsh African road conditions.",
  },
  {
    icon: FaLeaf,
    title: "Fuel Efficiency",
    description:
      "Aerodynamic profiles that reduce drag and deliver up to 10% fuel savings.",
  },
  {
    icon: FaAward,
    title: "Quality Assured",
    description:
      "Every bus passes rigorous quality checks before handover to the client.",
  },
];

const chassisBrands = [
  "Isuzu",
  "Hino",
  "Fuso",
  "Mercedes-Benz",
  "Scania",
  "Volvo",
  "MAN",
  "Tata",
];

const process = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your requirements, capacity needs, and budget.",
  },
  {
    step: 2,
    title: "Chassis Selection",
    description: "Help you choose the right chassis for your application.",
  },
  {
    step: 3,
    title: "Custom Design",
    description: "Create detailed CAD drawings with your specifications.",
  },
  {
    step: 4,
    title: "Fabrication",
    description: "Build the bus body using premium materials and techniques.",
  },
  {
    step: 5,
    title: "Interior Fit-out",
    description: "Install seating, flooring, lighting, and accessories.",
  },
  {
    step: 6,
    title: "Finishing",
    description: "Paint, branding, and final quality inspection.",
  },
];

const stats = [
  { value: "200+", label: "Buses Built" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Schools Served" },
  { value: "10+", label: "Chassis Brands" },
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

export default function BusBodyPage() {
  return (
    <div>
      <PageHeader
        title='Bus Body Building'
        subtitle='Custom bus bodies designed for African conditions - safe, durable, and efficient.'
        backgroundImage='/school-buses/DSC09530.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Bus Body Building" },
        ]}
      />
      <div className='px-4'>
        {/* Introduction Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Expert Craftsmanship</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Buses Built for{" "}
                  <span className='text-primary'>African Roads</span>
                </h2>
                <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                  HADIID Industries designs and builds bus bodies that are
                  specifically engineered for the unique challenges of African
                  terrain. From school buses to luxury coaches, we deliver
                  vehicles that combine safety, comfort, and durability.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Our experienced team works with manufacturer-supplied chassis
                  to create custom bus bodies that meet international safety
                  standards while being optimized for local conditions.
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
                      src='/school-bus-making/DSC01391.jpg'
                      alt='School bus'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10' />
                  <div className='absolute -top-4 -right-4 border-2 border-primary/30 rounded-2xl w-full h-full -z-10' />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Design Features */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Engineering Excellence
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Every bus we build incorporates advanced engineering principles
                for optimal performance.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {designFeatures.map((feature) => (
                <AnimatedSection key={feature.title}>
                  <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow p-0'>
                    <CardContent className='p-3 text-center'>
                      <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                        <feature.icon className='w-8 h-8 text-primary' />
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Bus Types Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Our Range</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Types of Buses We Build
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                From compact school buses to luxury intercity coaches, we build
                buses for every purpose.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {busTypes.map((bus) => (
                <AnimatedSection key={bus.name}>
                  <Card className='h-full overflow-hidden group hover:shadow-xl transition-all p-0'>
                    <div className='relative aspect-video overflow-hidden'>
                      <Image
                        src={bus.image}
                        alt={bus.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent' />
                      <div className='absolute bottom-4 left-4 right-4'>
                        <div className='flex items-center gap-2 mb-2'>
                          <bus.icon className='w-5 h-5 text-white' />
                          <h3 className='text-white font-bold text-xl'>
                            {bus.name}
                          </h3>
                        </div>
                        <Badge variant='secondary' className='text-xs'>
                          {bus.capacity}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className='p-5'>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {bus.description}
                      </p>
                      <ul className='space-y-2'>
                        {bus.features.map((feature) => (
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

        {/* Chassis Compatibility */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Compatibility</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Works with All Major{" "}
                  <span className='text-primary'>Chassis Brands</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  We have extensive experience working with chassis from leading
                  manufacturers. Our engineers understand the unique
                  characteristics of each brand to ensure perfect fitment and
                  optimal performance.
                </p>
                <div className='flex flex-wrap gap-3'>
                  {chassisBrands.map((brand) => (
                    <Badge
                      key={brand}
                      variant='outline'
                      className='text-sm py-2 px-4'>
                      {brand}
                    </Badge>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
                  <FaBus className='w-12 h-12 mb-6' />
                  <h3 className='text-2xl font-bold mb-4'>Safety First</h3>
                  <p className='text-primary-foreground/90 mb-6'>
                    Every bus we build is designed with passenger safety as the
                    top priority. We incorporate multiple safety features that
                    meet or exceed international standards.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Emergency exit doors and windows</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Fire suppression systems</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Anti-roll reinforcement</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>CCTV camera mounting points</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>First aid and safety equipment storage</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Build Process
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                From concept to completion, we guide you through every step.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {process.map((item) => (
                <AnimatedSection key={item.step}>
                  <div className='bg-muted rounded-2xl p-6 h-full relative'>
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

        {/* School Bus Feature Section */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/schoolbuses/DSC09520.webp'
                      alt='School bus interior'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/schoolbuses/DSC09530.webp'
                      alt='School bus seats'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/schoolbuses/DSC09540.webp'
                      alt='School bus exterior'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/schoolbuses/DSC09550.webp'
                      alt='School bus details'
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Badge className='mb-4'>Featured</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  School Bus <span className='text-primary'>Specialists</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  We have built school buses for over 50 schools across Kenya.
                  Our school buses are specifically designed to ensure the
                  safety and comfort of students during their daily commute.
                </p>
                <div className='space-y-4 mb-8'>
                  {[
                    "High-visibility safety yellow paint",
                    "Stop signs and warning lights",
                    "Padded, high-back seats",
                    "Emergency exit windows",
                    "First aid kit and fire extinguisher mounts",
                    "GPS tracking system ready",
                    "Driver monitoring camera mount",
                    "School logo and branding",
                  ].map((feature) => (
                    <div key={feature} className='flex items-center gap-3'>
                      <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                        <FaCheckCircle className='w-3 h-3 text-primary' />
                      </div>
                      <span className='text-foreground'>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size='lg' className='rounded-full gap-2' asChild>
                  <Link href='/contact-us'>
                    Get School Bus Quote <HiArrowRight />
                  </Link>
                </Button>
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
              Ready to Build Your Bus?
            </h2>
            <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
              Contact us today for a consultation. We&apos;ll help you design
              the perfect bus for your needs.
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
