"use client";

import { FaCar, FaTruck, FaBus } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animated-section";

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

export function VehicleTypesSection() {
  return (
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
                  <h3 className='font-semibold text-lg mb-2'>{vehicle.name}</h3>
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
  );
}
