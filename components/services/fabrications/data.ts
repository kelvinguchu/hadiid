import {
  FaCompass,
  FaShieldAlt,
  FaGasPump,
  FaCogs,
  FaWrench,
  FaIndustry,
  FaCarSide,
  FaTools,
} from "react-icons/fa";

export const fabricationServices = [
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
    image: "/lorry-making/DSC01409.jpg",
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
    image: "/lorry-making/DSC01530.jpg",
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
    image: "/lorry-making/DSC01637.jpg",
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
    image: "/lorry-making/DSC01677.jpg",
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
    image: "/lorry-making/DSC09788.jpg",
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
    image: "/lorry-making/DSC01666.jpg",
  },
];

export const fabricationCapabilities = [
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

export const industries = [
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

export const fabricationStats = [
  { value: "300+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Mining Vehicles" },
  { value: "100%", label: "Custom Solutions" },
];

export const fabricationProcess = [
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

export const miningConversionFeatures = [
  "ROPS (Roll Over Protection Systems) installation",
  "Heavy-duty suspension upgrade",
  "Long-range fuel tank (180L capacity)",
  "Fire suppression system",
  "Custom tool storage and equipment racks",
  "LED lighting conversion",
  "Snorkel and air intake modifications",
  "Custom color and branding",
];
