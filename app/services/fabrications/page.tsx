"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  FaCheckCircle,
  FaWrench,
  FaCogs,
  FaShieldAlt,
  FaTools,
  FaGasPump,
  FaCarSide,
  FaPhoneAlt,
  FaIndustry,
  FaCompass,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fabricationServices = [
  {
    icon: FaCompass,
    title: "Vehicle Localization",
    description:
      "Adapting imported vehicles to meet local specifications, road conditions, and regulatory requirements.",
    features: [
      "Suspension modifications for local roads",
      "Right-hand to left-hand drive conversion",
      "Electrical system adaptation",
      "Climate control modifications",
      "Local compliance certification",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
  {
    icon: FaShieldAlt,
    title: "Protective Equipment",
    description:
      "Custom-built protective gear to safeguard your vehicle from damage in tough environments.",
    features: [
      "Heavy-duty steel bumpers",
      "Bull bars and grille guards",
      "Rock sliders and side steps",
      "Skid plates (engine, gearbox, fuel tank)",
      "Brush guards and light mounts",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
  {
    icon: FaGasPump,
    title: "Auxiliary Systems",
    description:
      "Additional fuel, water, and storage systems for extended range and utility.",
    features: [
      "Long-range fuel tanks",
      "Auxiliary water tanks",
      "Dual battery systems",
      "Roof racks and cargo systems",
      "Tool boxes and storage solutions",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
  {
    icon: FaCogs,
    title: "Suspension & Chassis",
    description:
      "Upgrades and conversions for improved load capacity and handling.",
    features: [
      "Airbag suspension systems",
      "Leaf spring upgrades",
      "Chassis reinforcement",
      "Lift kit installation",
      "Shock absorber upgrades",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
  {
    icon: FaWrench,
    title: "Exhaust Systems",
    description:
      "Custom exhaust fabrication for performance, clearance, or emission requirements.",
    features: [
      "Stainless steel exhausts",
      "Snorkel systems",
      "Turbo-back systems",
      "DPF delete (off-road only)",
      "Custom manifolds",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
  {
    icon: FaIndustry,
    title: "Industrial Fabrication",
    description: "Custom metalwork for industrial and mining applications.",
    features: [
      "Roll cages and ROPS",
      "Crane and winch mounts",
      "Custom canopies and trays",
      "Mining vehicle modifications",
      "Equipment mounting brackets",
    ],
    image: "/images/specialized-fabiractions1.jpeg",
  },
];

const capabilities = [
  {
    title: "CNC Plasma Cutting",
    description: "Precision cutting for complex shapes and components.",
  },
  {
    title: "TIG & MIG Welding",
    description: "Expert welding for steel, aluminum, and stainless.",
  },
  {
    title: "Hydraulic Bending",
    description: "Accurate bending for tubes and sheet metal.",
  },
  {
    title: "Powder Coating",
    description: "Durable, corrosion-resistant finishing.",
  },
  {
    title: "Sandblasting",
    description: "Surface preparation for optimal coating adhesion.",
  },
  {
    title: "CAD Design",
    description: "Computer-aided design for custom projects.",
  },
];

const industries = [
  {
    name: "Mining & Quarry",
    description:
      "Heavy-duty modifications for mining vehicles operating in extreme conditions.",
    icon: FaIndustry,
  },
  {
    name: "Safari & Tourism",
    description:
      "Safari vehicle conversions with pop-up roofs, seating, and storage.",
    icon: FaCompass,
  },
  {
    name: "Agriculture",
    description:
      "Farm vehicle modifications, sprayer mounts, and utility conversions.",
    icon: FaCarSide,
  },
  {
    name: "Construction",
    description:
      "Site vehicle adaptations, tool storage, and protective equipment.",
    icon: FaTools,
  },
];

const stats = [
  { value: "300+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Mining Vehicles" },
  { value: "100%", label: "Custom Solutions" },
];

const process = [
  {
    step: 1,
    title: "Consultation",
    description:
      "Discuss your requirements, vehicle specifications, and intended use.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our engineers create detailed designs and material specifications.",
  },
  {
    step: 3,
    title: "Quotation",
    description: "Transparent pricing with itemized breakdown of all costs.",
  },
  {
    step: 4,
    title: "Fabrication",
    description:
      "Skilled technicians execute the project with quality materials.",
  },
  {
    step: 5,
    title: "Installation",
    description: "Professional fitting with all necessary adjustments.",
  },
  {
    step: 6,
    title: "Testing",
    description: "Thorough testing and quality assurance before handover.",
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

export default function FabricationsPage() {
  return (
    <div>
      <PageHeader
        title='Specialized Fabrication'
        subtitle='Custom metalwork and vehicle adaptations for unique operational requirements.'
        backgroundImage='/images/specialized-fabiractions1.jpeg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Specialized Fabrication" },
        ]}
      />
      <div className='px-4'>
        {/* Introduction Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <Badge className='mb-4'>Bespoke Solutions</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Custom Fabrication for{" "}
                  <span className='text-primary'>Every Need</span>
                </h2>
                <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                  When off-the-shelf solutions don&apos;t fit your requirements,
                  our specialized fabrication team delivers bespoke metalwork
                  and vehicle modifications tailored to your exact
                  specifications.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  From localizing imported vehicles to fabricating protective
                  equipment for mining operations, we combine engineering
                  expertise with skilled craftsmanship to bring your projects to
                  life.
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
                      src='/images/specialized-fabiractions1.jpeg'
                      alt='Specialized fabrication'
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

        {/* Services Section */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <Badge className='mb-4'>Our Expertise</Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Specialized Services
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Comprehensive fabrication services for vehicles and industrial
                applications.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {fabricationServices.map((service) => (
                <AnimatedSection key={service.title}>
                  <Card className='h-full hover:shadow-xl transition-all border-none shadow-lg'>
                    <CardContent className='p-6'>
                      <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4'>
                        <service.icon className='w-7 h-7 text-primary' />
                      </div>
                      <h3 className='font-bold text-xl mb-2'>
                        {service.title}
                      </h3>
                      <p className='text-muted-foreground text-sm mb-4'>
                        {service.description}
                      </p>
                      <ul className='space-y-2'>
                        {service.features.map((feature) => (
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
                <Badge className='mb-4'>Workshop Capabilities</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  State-of-the-Art{" "}
                  <span className='text-primary'>Equipment</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Our workshop is equipped with modern machinery and tools that
                  enable us to take on complex fabrication projects with
                  precision and efficiency.
                </p>

                <div className='grid grid-cols-2 gap-4'>
                  {capabilities.map((cap) => (
                    <div key={cap.title} className='bg-muted rounded-xl p-4'>
                      <h4 className='font-semibold mb-1'>{cap.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src='/images/specialized-fabiractions1.jpeg'
                    alt='Fabrication workshop'
                    fill
                    className='object-cover'
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className='py-6 md:py-8 bg-card'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Industries We Serve
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Our fabrication services cater to diverse industries with unique
                requirements.
              </p>
            </AnimatedSection>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {industries.map((industry) => (
                <AnimatedSection key={industry.name}>
                  <Card className='h-full border-none shadow-lg hover:shadow-xl transition-shadow text-center'>
                    <CardContent className='p-6'>
                      <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                        <industry.icon className='w-8 h-8 text-primary' />
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {industry.name}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-6 md:py-8 bg-background'>
          <div className='container mx-auto'>
            <AnimatedSection className='text-center mb-6 md:mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Process
              </h2>
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

        {/* Featured Projects */}
        <section className='py-6 md:py-8 bg-muted/30'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10 items-center'>
              <AnimatedSection>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/specialized-fabiractions1.jpeg'
                      alt='Project 1'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/specialized-fabiractions1.jpeg'
                      alt='Project 2'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/specialized-fabiractions1.jpeg'
                      alt='Project 3'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='relative aspect-square rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/specialized-fabiractions1.jpeg'
                      alt='Project 4'
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Badge className='mb-4'>Case Study</Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Mining Vehicle{" "}
                  <span className='text-primary'>Conversion</span>
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  We recently completed a comprehensive modification project for
                  a mining company, converting 20 Toyota Land Cruiser 79 Series
                  vehicles for underground mining operations.
                </p>
                <div className='space-y-4 mb-8'>
                  {[
                    "ROPS (Roll Over Protection Systems) installation",
                    "Heavy-duty suspension upgrade",
                    "Long-range fuel tank (180L capacity)",
                    "Fire suppression system",
                    "Custom tool storage and equipment racks",
                    "LED lighting conversion",
                    "Snorkel and air intake modifications",
                    "Custom color and branding",
                  ].map((item) => (
                    <div key={item} className='flex items-center gap-3'>
                      <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                        <FaCheckCircle className='w-3 h-3 text-primary' />
                      </div>
                      <span className='text-foreground'>{item}</span>
                    </div>
                  ))}
                </div>
                <Button size='lg' className='rounded-full gap-2' asChild>
                  <Link href='/our-work'>
                    View More Projects <HiArrowRight />
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
              Have a Custom Fabrication Project?
            </h2>
            <p className='text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg'>
              Tell us about your requirements. Our engineers will work with you
              to design the perfect solution.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button
                size='lg'
                variant='secondary'
                className='rounded-full gap-2'
                asChild>
                <Link href='/contact-us'>
                  Discuss Your Project <HiArrowRight />
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
