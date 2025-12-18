import { FaWeight, FaShieldAlt, FaCogs, FaRoad } from "react-icons/fa";

export const trailerTypes = [
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

export const trailerSpecifications = [
  { label: "Axle Brands", value: "BPW, SAF, Fuwa" },
  { label: "Brake System", value: "Wabco ABS/EBS" },
  { label: "Landing Gear", value: "Jost, Holland" },
  { label: "Suspension", value: "Air, Mechanical, Bogie" },
  { label: "King Pin", value: 'JOST 2" or 3.5"' },
  { label: "Frame Material", value: "High-tensile steel" },
];

export const trailerBenefits = [
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

export const trailerProcess = [
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
