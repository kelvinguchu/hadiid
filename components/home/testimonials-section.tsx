"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "The new bus bodies are not only lighter, increasing our fuel efficiency, but the build quality is far superior to anything we've used before. Highly recommended.",
    author: "John K. Mwangi",
    role: "CEO",
    company: "Trans Sacco",
    rating: 5,
    avatar: "JM",
  },
  {
    id: "testimonial-2",
    quote:
      "HADIID's repair work on our wrecked prime mover was astonishing. It came back looking factory-new. Their professionalism and speed saved us significant downtime.",
    author: "Asha Omar",
    role: "Fleet Manager",
    company: "Coastline Hauliers",
    rating: 5,
    avatar: "AO",
  },
  {
    id: "testimonial-3",
    quote:
      "The custom tipping trailer we ordered was delivered on time and exceeded all specifications. The build is robust and perfectly suited for our demanding work.",
    author: "Peter Kivitu",
    role: "Logistics Director",
    company: "Rift Valley Cargo",
    rating: 5,
    avatar: "PK",
  },
];

function RatingStars({ rating }: Readonly<{ rating: number }>) {
  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: rating }, (_, i) => (
        <FaStar key={`star-${i}`} className='w-4 h-4 text-primary' />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className='py-6 md:py-8 bg-muted/30'>
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-4 mb-8'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>
            Testimonials
          </Badge>
          <div className='flex-1 h-px bg-border' />
        </motion.div>

        <div className='grid lg:grid-cols-12 gap-6 lg:gap-8 items-center'>
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='lg:col-span-4'>
            <h2 className='font-poppins text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4'>
              What Our
              <br />
              <span className='text-primary'>Clients Say</span>
            </h2>
            <p className='text-muted-foreground'>
              Trusted by leading transport and logistics companies across East
              Africa.
            </p>

            {/* Navigation */}
            <div className='flex items-center gap-4 mt-6'>
              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full w-10 h-10'
                  onClick={prevSlide}>
                  <FaChevronLeft className='w-4 h-4' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full w-10 h-10'
                  onClick={nextSlide}>
                  <FaChevronRight className='w-4 h-4' />
                </Button>
              </div>
              <div className='flex gap-1.5'>
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonial Card */}
          <div className='lg:col-span-8'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='bg-card border border-border rounded-lg p-6 md:p-8'>
                <RatingStars rating={currentTestimonial.rating} />

                <blockquote className='mt-4 mb-6'>
                  <p className='text-lg text-foreground leading-relaxed'>
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <div className='flex items-center gap-3 pt-4 border-t border-border'>
                  <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
                    <span className='text-sm font-semibold text-primary-foreground'>
                      {currentTestimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      {currentTestimonial.author}
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
