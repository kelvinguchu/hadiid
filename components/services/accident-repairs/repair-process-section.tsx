"use client";

import {
  FaSearch,
  FaFileAlt,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa";
import { AnimatedSection } from "../animated-section";

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

export function RepairProcessSection() {
  return (
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
  );
}
