import { FaWrench, FaSprayCan, FaTools, FaExchangeAlt } from "react-icons/fa";

export const repairServices = [
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

export const vehicleTypes = [
  {
    icon: "FaCar",
    name: "Sedans & SUVs",
    description: "Personal vehicles of all makes and models",
  },
  {
    icon: "FaTruck",
    name: "Trucks & Pickups",
    description: "Light to heavy-duty commercial trucks",
  },
  {
    icon: "FaBus",
    name: "Buses & Coaches",
    description: "School buses, minibuses, and coaches",
  },
  {
    icon: "FaTruck",
    name: "Trailers",
    description: "All types of trailers and semi-trailers",
  },
];

export const repairProcess = [
  {
    step: 1,
    title: "Assessment",
    icon: "FaSearch",
    description:
      "Thorough inspection to document all damage and determine repair scope.",
    duration: "Same day",
  },
  {
    step: 2,
    title: "Quotation",
    icon: "FaFileAlt",
    description:
      "Detailed, itemized quote with parts, labor, and timeline breakdown.",
    duration: "24 hours",
  },
  {
    step: 3,
    title: "Approval",
    icon: "FaCheckCircle",
    description:
      "Review and approval of repair plan, insurance coordination if needed.",
    duration: "1-2 days",
  },
  {
    step: 4,
    title: "Repair",
    icon: "FaTools",
    description:
      "Expert technicians execute repairs with quality control checks.",
    duration: "Varies",
  },
  {
    step: 5,
    title: "Quality Check",
    icon: "FaShieldAlt",
    description:
      "Multi-stage inspection ensures repairs meet our high standards.",
    duration: "1 day",
  },
  {
    step: 6,
    title: "Handover",
    icon: "FaCar",
    description: "Final walkthrough, documentation, and vehicle handover.",
    duration: "Same day",
  },
];

export const turnaroundTimes = [
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

export const accidentRepairStats = [
  { value: "1000+", label: "Vehicles Repaired" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "24hrs", label: "Quote Turnaround" },
];

export const whyChooseUsItems = [
  "Transparent, itemized quotations with no hidden costs",
  "OEM-equivalent parts for all repairs",
  "Skilled, certified technicians",
  "Insurance claim assistance",
  "Courtesy vehicle available (subject to availability)",
  "Written warranty on all repairs",
  "Progress updates via WhatsApp",
  "Secure, covered workshop facility",
];
