import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServiceDetail, ServicesCTA } from "@/components/services";
import { WhyChooseUs } from "@/components/home";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | Hadiid Industries",
  description:
    "From precision accident repairs to custom vehicle fabrication, we provide expert fleet solutions that keep your business moving forward.",
  path: "/services",
  ogImage: "/images-2/hero.jpg",
  keywords: [
    "vehicle services",
    "fleet solutions",
    "commercial vehicle services",
    "Kenya transport solutions",
  ],
});

const services = [
  {
    id: "heavy-duty-trailers",
    title: "Heavy Duty Trailers",
    description:
      "Our trailers combine German-engineered components with advanced fabrication techniques to deliver unparalleled reliability and performance.",
    imageSrc: "/lorries/DSC09726.jpg",
    imageAlt: "Heavy duty trailers",
    features: [
      {
        title: "Quality Components",
        description:
          "Featuring BPW axles, Wabco brakes, Jost landing gears, and Hyva tippers.",
      },
      {
        title: "Lightweight Materials",
        description:
          "30% weight reduction for a higher payload or improved fuel economy.",
      },
      {
        title: "CNC Fabrication",
        description:
          "Ensuring consistent tolerances and superior weld quality on every build.",
      },
      {
        title: "Terrain-Ready",
        description:
          "Suited for highways, demanding mining operations, and off-road use.",
      },
    ],
    href: "/services/trailers",
    reverse: false,
  },
  {
    id: "truck-fabrication",
    title: "Truck Body Fabrication",
    description:
      "We transform cabin-and-chassis vehicles into purpose-built transporters, engineered for load distribution, safety, and maximum operational efficiency.",
    imageSrc: "/lorry-making/DSC01592.jpg",
    imageAlt: "Custom truck body fabrication",
    features: [
      {
        title: "Custom Bodies",
        description:
          "Tankers, flatbeds, tippers, rigid containers, side loaders, and closed-top boxes.",
      },
      {
        title: "Precision Metalworking",
        description:
          "Utilizing cutting, bending, robotic welding, and panel bonding for superior structural integrity.",
      },
      {
        title: "Optional Features",
        description:
          "Custom internal shelving, bulkheads, access ladders, tie-downs, and branded panels.",
      },
    ],
    href: "/services/truck-fabrications",
    reverse: true,
  },
  {
    id: "bus-building",
    title: "Bus Body Building",
    description:
      "We design and build bus bodies to fit manufacturer-supplied chassis, optimized for Africa's conditions with a focus on strength, safety, and efficiency.",
    imageSrc: "/psv-bus/DSC09821.jpg",
    imageAlt: "Custom bus body building",
    features: [
      {
        title: "CAD-Led Design",
        description:
          "Finite-element analysis for optimal strength, weight balance, and fitment.",
      },
      {
        title: "Reinforced Frames",
        description: "Robust assemblies for proven resilience on rough roads.",
      },
      {
        title: "Efficiency Gains",
        description:
          "Aerodynamic profiles delivering up to 10% in fuel and tyre savings.",
      },
      {
        title: "Versatile Configurations",
        description:
          "Urban, intercity, safari, school, and special-purpose builds.",
      },
    ],
    href: "/services/bus-body",
    reverse: false,
  },
  {
    id: "accident-repairs",
    title: "Accident Repairs",
    description:
      "We restore vehicles of all sizes to optimal condition with clear communication and efficient workflows, handling everything from minor dents to major structural damage.",
    imageSrc: "/images/ac2.jpeg",
    imageAlt: "Truck before and after accident repair",
    features: [
      {
        title: "Transparent Estimates",
        description:
          "Itemized breakdowns of parts, labour, paint, and consumables.",
      },
      {
        title: "Predictable Turnaround",
        description: "Minor repairs in 1-3 days; major repairs in 7-14 days.",
      },
      {
        title: "Quality Assurance",
        description:
          "OEM-equivalent parts, multi-stage inspections, and detailed sign-off reports.",
      },
      {
        title: "Skilled Technicians",
        description:
          "Certified panel beaters, welders, painters, and system calibrators.",
      },
    ],
    href: "/services/accident-repairs",
    reverse: true,
  },
  {
    id: "specialized-fabrication",
    title: "Specialized Fabrication",
    description:
      "We deliver bespoke metalwork and vehicle adaptations to meet unique operational needs, from localizing imports to fabricating custom protective gear.",
    imageSrc: "/lorry-making/DSC01666.jpg",
    imageAlt: "Specialized vehicle fabrication",
    features: [
      {
        title: "Vehicle Localization",
        description:
          "Adapting imported vehicles to meet local specifications and road conditions.",
      },
      {
        title: "Protective Gear",
        description:
          "Custom bull bars, tow bars, and heavy-duty steel bumpers.",
      },
      {
        title: "Auxiliary Systems",
        description:
          "Design and installation of extra fuel/water tanks and roll cages.",
      },
      {
        title: "Suspension & Exhaust",
        description:
          "Airbag to leaf-spring conversions and custom exhaust systems.",
      },
    ],
    href: "/services/fabrications",
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title='Our Services'
        subtitle='From precision accident repairs to custom vehicle fabrication, we provide expert fleet solutions that keep your business moving forward.'
        backgroundImage='/images-2/hero-2.jpg'
      />

      {services.map((service) => (
        <div
          key={service.id}
          className={service.id === "bus-building" ? "bg-card" : ""}>
          <ServiceDetail {...service} />
        </div>
      ))}
      <div className='px-4'>
        <WhyChooseUs />
      </div>

      <ServicesCTA />
    </>
  );
}
