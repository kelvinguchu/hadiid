"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  FaCheckCircle,
  FaCogs,
  FaShieldAlt,
  FaWeight,
  FaRoad,
  FaAward,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trailerTypes = [
  {
    name: "Flatbed Trailers",
    description:
      "Versatile platform trailers for transporting heavy machinery, construction materials, and oversized cargo.",
    image: "/images-2/flat-bed-3.jpg",
    features: [
      "40-53 ft lengths available",
      "Up to 80,000 lbs capacity",
      "Stake pockets & rub rails",
    ],
  },
  {
    name: "Tipper Trailers",
    description:
      "Heavy-duty dump trailers designed for mining, quarry, and construction applications.",
    image: "/images-2/tipper-4.jpg",
    features: [
      "Hyva hydraulic systems",
      "Hardox steel bodies",
      "Side & rear tipping options",
    ],
  },
  {
    name: "Lowbed Trailers",
    description:
      "Specialized for transporting tall and heavy equipment like excavators and bulldozers.",
    image: "/images-2/flat-bed-4.jpg",
    features: [
      "Detachable gooseneck",
      "Hydraulic ramps",
      "Multi-axle configurations",
    ],
  },
  {
    name: "Tanker Trailers",
    description:
      "Engineered for safe transport of petroleum, chemicals, and food-grade liquids.",
    image: "/images-2/oil-carrier.jpg",
    features: [
      "Aluminum & steel options",
      "Multi-compartment designs",
      "ADR compliant",
    ],
  },
  {
    name: "Skeletal Trailers",
    description:
      "Container chassis designed for efficient intermodal transport of ISO containers.",
    image: "/images-2/skeleton.jpg",
    features: [
      "20ft & 40ft compatible",
      "Twist lock securing",
      "Lightweight design",
    ],
  },
  {
    name: "Side Tipper Trailers",
    description:
      "High-volume trailers for agricultural and bulk material transport with side discharge.",
    image: "/images-2/tipper-5.jpg",
    features: [
      "50+ cubic meter capacity",
      "Dual-side tipping",
      "Quick unloading",
    ],
  },
];

const specifications = [
  { label: "Axle Brands", value: "BPW, SAF, Fuwa" },
  { label: "Brake System", value: "Wabco ABS/EBS" },
  { label: "Landing Gear", value: "Jost, Holland" },
  { label: "Suspension", value: "Air, Mechanical, Bogie" },
  { label: "King Pin", value: 'JOST 2" or 3.5"' },
  { label: "Frame Material", value: "High-tensile steel" },
];

const benefits = [
  {
    icon: FaWeight,
    title: "30% Weight Reduction",
    description:
      "Advanced materials and optimized design for higher payload capacity or improved fuel economy.",
  },
  {
    icon: FaShieldAlt,
    title: "Built to Last",
    description:
      "Premium German-engineered components ensure reliability in the harshest conditions.",
  },
  {
    icon: FaCogs,
    title: "CNC Precision",
    description:
      "Computer-controlled fabrication for consistent tolerances and superior weld quality.",
  },
  {
    icon: FaRoad,
    title: "Terrain Ready",
    description:
      "Engineered for highways, mining operations, and demanding off-road environments.",
  },
];

const process = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We discuss your cargo requirements, operating conditions, and specifications.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our engineers create detailed CAD drawings with structural analysis.",
  },
  {
    step: 3,
    title: "Fabrication",
    description:
      "Precision cutting, welding, and assembly using premium materials.",
  },
  {
    step: 4,
    title: "Quality Check",
    description:
      "Rigorous inspection and testing before final painting and delivery.",
  },
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

export default function TrailersPage() {
  return (
    <div>
      <PageHeader
        title='Heavy Duty Trailers'
        subtitle='German-engineered components combined with advanced fabrication techniques for unparalleled reliability and performance.'
        backgroundImage='/lorries/DSC09746.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Heavy Duty Trailers" },
        ]}
      />
      <div className='px-4'>
        {/* Introduction Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Industry Leading</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Trailers Built for{" "}
                  <span className='text-primary'>African Roads</span>
                </h2>
                <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                  At HADIID Industries, we understand that African terrain
                  demands exceptional durability. Our trailers are engineered to
                  withstand the toughest conditions while maximizing your
                  payload capacity and operational efficiency.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Whether you&apos;re transporting goods across the highway,
                  hauling materials from mining sites, or moving equipment to
                  construction zones, our trailers deliver consistent
                  performance year after year.
                </p>
                <div className='flex flex-wrap gap-4'>
                  <Button size='lg' className='rounded-full gap-2' asChild>
                    <Link href='/contact-us'>
                      Request Quote <HiArrowRight />
                    </Link>
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='rounded-full gap-2'
                    asChild>
                    <Link href='tel:+254759888333'>
                      <HiPhone /> Call Now
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className='relative'>
                  <div className='relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      src='/lorries/DSC09750.jpg'
                      alt='Heavy duty trailer'
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

        {/* Benefits Section */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Why Choose Our Trailers?
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Every trailer we build represents our commitment to quality,
                durability, and customer satisfaction.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {benefits.map((benefit) => (
                <AnimatedSection key={benefit.title}>
                  <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow'>
                    <CardContent className='p-6 text-center'>
                      <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                        <benefit.icon className='w-8 h-8 text-primary' />
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {benefit.title}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trailer Types Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Our Range</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Trailer Types We Build
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                From flatbeds to tankers, we manufacture a complete range of
                trailers for every transport need.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {trailerTypes.map((trailer) => (
                <AnimatedSection key={trailer.name}>
                  <Card className='h-full overflow-hidden group hover:shadow-xl transition-all p-0'>
                    <div className='relative aspect-video overflow-hidden'>
                      <Image
                        src={trailer.image}
                        alt={trailer.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
                      <h3 className='absolute bottom-4 left-4 text-white font-bold text-xl'>
                        {trailer.name}
                      </h3>
                    </div>
                    <CardContent className='p-5'>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {trailer.description}
                      </p>
                      <ul className='space-y-2'>
                        {trailer.features.map((feature) => (
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

        {/* Specifications Section */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Premium Components</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Technical Specifications
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  We use only the finest components from globally trusted brands
                  to ensure your trailer performs reliably for years to come.
                </p>

                <div className='grid grid-cols-2 gap-4'>
                  {specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className='bg-background rounded-xl p-4'>
                      <p className='text-sm text-muted-foreground'>
                        {spec.label}
                      </p>
                      <p className='font-semibold text-foreground'>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className='bg-primary rounded-2xl p-8 text-primary-foreground'>
                  <FaAward className='w-12 h-12 mb-6' />
                  <h3 className='text-2xl font-bold mb-4'>
                    Quality Guaranteed
                  </h3>
                  <p className='text-primary-foreground/90 mb-6'>
                    Every trailer comes with a comprehensive warranty and our
                    commitment to after-sales support. We stand behind our work.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>12-month structural warranty</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Genuine spare parts availability</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>24/7 technical support</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <FaCheckCircle className='w-5 h-5' />
                      <span>Nationwide service network</span>
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
                From initial consultation to final delivery, we ensure every
                step meets our exacting standards.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {process.map((item, index) => (
                <AnimatedSection key={item.step}>
                  <div className='relative'>
                    <div className='bg-muted rounded-2xl p-6 h-full'>
                      <div className='w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mb-4'>
                        {item.step}
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {item.description}
                      </p>
                    </div>
                    {index < process.length - 1 && (
                      <div className='hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2'>
                        <HiArrowRight className='w-6 h-6 text-primary' />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className='py-6 md:py-8 bg-primary text-primary-foreground'>
        <div className='container mx-auto text-center'>
          <AnimatedSection>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Build Your Trailer?
            </h2>
            <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
              Get in touch with our team to discuss your requirements and
              receive a detailed quotation.
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
