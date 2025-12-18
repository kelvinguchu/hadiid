import {
  FaTruck,
  FaBoxOpen,
  FaIndustry,
  FaTint,
  FaSnowflake,
  FaRuler,
  FaCogs,
  FaPaintBrush,
} from "react-icons/fa";

export const bodyTypes = [
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

export const truckCapabilities = [
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

export const truckProcess = [
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

export const truckStats = [
  { value: "500+", label: "Bodies Built" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30", label: "Day Turnaround" },
];

export const optionalFeatures = [
  "Internal shelving and compartments",
  "Bulkheads and partitions",
  "Access ladders and walkways",
  "Tie-down rails and cargo nets",
  "Branded panels and signage",
  "Lighting (interior and exterior)",
  "Hydraulic tailgate lifts",
  "Side access doors and curtains",
];
