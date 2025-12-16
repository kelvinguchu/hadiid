"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "school-bus", label: "School Buses" },
  { id: "bus", label: "Bus Bodies" },
  { id: "trailer", label: "Trailers" },
  { id: "truck-body", label: "Truck Bodies" },
  { id: "repair", label: "Accident Repairs" },
  { id: "specialized", label: "Specialized" },
];

const portfolioItems = [
  {
    id: "school-bus-1",
    category: "school-bus",
    title: "School Bus - Yellow Fleet",
    imageSrc: "/images/schoolbuses/DSC09495.webp",
  },
  {
    id: "school-bus-2",
    category: "school-bus",
    title: "School Bus - Interior",
    imageSrc: "/images/schoolbuses/DSC09500.webp",
  },
  {
    id: "school-bus-3",
    category: "school-bus",
    title: "School Bus - Assembly",
    imageSrc: "/images/schoolbuses/DSC09505.webp",
  },
  {
    id: "truck-reconstruction",
    category: "repair",
    title: "Truck Reconstruction",
    imageSrc: "/images/faw.png",
  },
  {
    id: "custom-bull-bar",
    category: "specialized",
    title: "Custom Bull Bar",
    imageSrc: "/images/specialized-fabrications3.jpeg",
  },
  {
    id: "luxury-coach",
    category: "bus",
    title: "Luxury Coach Fabrication",
    imageSrc: "/images/bus.png",
  },
  {
    id: "tipper-truck",
    category: "truck-body",
    title: "Tipper Truck Body",
    imageSrc: "/images/truck-body4.jpeg",
  },
  {
    id: "flatbed-trailer",
    category: "trailer",
    title: "Flatbed Trailer Fleet",
    imageSrc: "/images/kenyan_trailer.jpeg",
  },
  {
    id: "auxiliary-fuel-tank",
    category: "specialized",
    title: "Auxiliary Fuel Tank",
    imageSrc: "/images/specialized-fabrications2.jpeg",
  },
  {
    id: "school-bus-4",
    category: "school-bus",
    title: "School Bus - Side View",
    imageSrc: "/images/schoolbuses/DSC09520.webp",
  },
  {
    id: "axle-fabrication",
    category: "specialized",
    title: "Axle Fabrication",
    imageSrc: "/images/specialized-fabiractions1.jpeg",
  },
  {
    id: "cabin-repair",
    category: "repair",
    title: "Damaged Cabin Repair",
    imageSrc: "/images/ac2.jpeg",
  },
  {
    id: "fuel-tanker",
    category: "truck-body",
    title: "Fuel Tanker Body",
    imageSrc: "/images/truck-body2.jpeg",
  },
  {
    id: "school-bus-5",
    category: "school-bus",
    title: "School Bus - Production Line",
    imageSrc: "/images/schoolbuses/DSC09530.webp",
  },
  {
    id: "truck-body-1",
    category: "truck-body",
    title: "Custom Truck Body",
    imageSrc: "/images/truck-body1.jpeg",
  },
  {
    id: "truck-body-3",
    category: "truck-body",
    title: "Cargo Truck Body",
    imageSrc: "/images/truckbody3.jpeg",
  },
  {
    id: "tipper",
    category: "trailer",
    title: "Tipper Trailer",
    imageSrc: "/images/tipper.jpeg",
  },
  {
    id: "school-bus-6",
    category: "school-bus",
    title: "School Bus - Completed",
    imageSrc: "/images/schoolbuses/DSC09540.webp",
  },
];

export function PortfolioGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;
    if (direction === "prev") {
      setSelectedImageIndex(
        selectedImageIndex > 0
          ? selectedImageIndex - 1
          : filteredItems.length - 1
      );
    } else {
      setSelectedImageIndex(
        selectedImageIndex < filteredItems.length - 1
          ? selectedImageIndex + 1
          : 0
      );
    }
  };

  return (
    <section
      ref={ref}
      className='py-6 md:py-8 bg-background relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

      <div className='container mx-auto px-4 relative'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8'>
          <Badge className='px-4 py-1.5 text-sm font-medium'>
            Our Portfolio
          </Badge>
          <Separator className='flex-1 hidden sm:block' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-center mb-6 md:mb-10'>
          <h2 className='font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Projects That{" "}
            <span className='text-primary'>Define Excellence</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-2 mb-6 md:mb-10'>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}>
              <Button
                variant={activeFilter === category.id ? "default" : "outline"}
                size='sm'
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "shadow-lg shadow-primary/30"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setActiveFilter(category.id)}>
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                type='button'
                className='group relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`View ${item.title}`}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Search icon */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <div className='w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300'>
                    <FaSearch className='h-5 w-5 text-primary-foreground' />
                  </div>
                </div>

                {/* Title */}
                <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <span className='text-white font-semibold text-sm'>
                    {item.title}
                  </span>
                  <div className='text-white/60 text-xs mt-1 capitalize'>
                    {categories.find((c) => c.id === item.category)?.label}
                  </div>
                </div>

                {/* Corner accent */}
                <div className='absolute top-0 right-0 w-16 h-16 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-6 bg-primary/80 transform rotate-45 translate-x-6 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-16'>
            <p className='text-muted-foreground text-lg'>
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'>
              {/* Close button */}
              <button
                className='absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white'
                onClick={() => setSelectedImageIndex(null)}
                aria-label='Close lightbox'>
                <FaTimes className='w-5 h-5' />
              </button>

              {/* Navigation buttons */}
              <button
                className='absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white'
                onClick={() => navigateImage("prev")}
                aria-label='Previous image'>
                <FaChevronLeft className='w-5 h-5' />
              </button>
              <button
                className='absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white'
                onClick={() => navigateImage("next")}
                aria-label='Next image'>
                <FaChevronRight className='w-5 h-5' />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='relative max-w-5xl max-h-[85vh] w-full h-full'>
                <Image
                  src={filteredItems[selectedImageIndex].imageSrc}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  className='object-contain'
                />
              </motion.div>

              {/* Caption */}
              <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-center'>
                <p className='text-white font-semibold text-lg'>
                  {filteredItems[selectedImageIndex].title}
                </p>
                <p className='text-white/60 text-sm mt-1'>
                  {selectedImageIndex + 1} of {filteredItems.length}
                </p>
              </div>

              {/* Background click handler */}
              <button
                className='absolute inset-0 -z-10 cursor-default'
                onClick={() => setSelectedImageIndex(null)}
                aria-label='Close lightbox'
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
