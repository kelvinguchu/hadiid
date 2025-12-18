import {
  FaGraduationCap,
  FaCity,
  FaRoute,
  FaMountain,
  FaUsers,
  FaWheelchair,
  FaCogs,
  FaShieldAlt,
  FaLeaf,
  FaAward,
} from "react-icons/fa";

export const busTypes = [
  {
    name: "School Buses",
    icon: FaGraduationCap,
    description:
      "Safe and reliable school buses designed to protect students on their daily commute.",
    image: "/school-buses/DSC09536.jpg",
    capacity: "25-67 seats",
    features: [
      "Emergency exits on all sides",
      "First aid kit mounting",
      "GPS tracking ready",
      "High-visibility yellow paint",
    ],
  },
  {
    name: "Urban Transit Buses",
    icon: FaCity,
    description:
      "City buses optimized for frequent stops and high passenger turnover.",
    image: "/psv-bus/DSC00980.jpg",
    capacity: "30-60 seats",
    features: [
      "Low floor entry option",
      "Wide doorways for quick boarding",
      "Standing room design",
      "Route display systems",
    ],
  },
  {
    name: "Intercity Coaches",
    icon: FaRoute,
    description:
      "Comfortable long-distance coaches for intercity and cross-border travel.",
    image: "/psv-bus/DSC09816.jpg",
    capacity: "45-55 seats",
    features: [
      "Reclining seats with legroom",
      "Luggage compartments",
      "Entertainment systems",
      "Toilet facilities optional",
    ],
  },
  {
    name: "Safari & Tour Buses",
    icon: FaMountain,
    description:
      "Specially designed for tourism with panoramic views and enhanced comfort.",
    image: "/school-buses/DSC09517.jpg",
    capacity: "20-40 seats",
    features: [
      "Large viewing windows",
      "Pop-up roof option",
      "Premium seating",
      "PA system included",
    ],
  },
  {
    name: "Staff Transport",
    icon: FaUsers,
    description:
      "Employee shuttle buses for corporate and industrial transport needs.",
    image: "/school-bus-making/DSC00979.jpg",
    capacity: "25-50 seats",
    features: [
      "Comfortable seating",
      "Air conditioning",
      "Corporate branding",
      "WiFi ready",
    ],
  },
  {
    name: "Accessible Buses",
    icon: FaWheelchair,
    description:
      "Wheelchair accessible buses for inclusive public transportation.",
    image: "/psv-bus/DSC00992.jpg",
    capacity: "20-35 seats",
    features: [
      "Wheelchair ramps/lifts",
      "Designated wheelchair spaces",
      "Priority seating",
      "Audio announcements",
    ],
  },
];

export const designFeatures = [
  {
    icon: FaCogs,
    title: "CAD-Led Engineering",
    description:
      "Finite element analysis ensures optimal strength, weight distribution, and perfect chassis fitment.",
  },
  {
    icon: FaShieldAlt,
    title: "Reinforced Structure",
    description:
      "Heavy-duty steel framework tested to withstand harsh African road conditions.",
  },
  {
    icon: FaLeaf,
    title: "Fuel Efficiency",
    description:
      "Aerodynamic profiles that reduce drag and deliver up to 10% fuel savings.",
  },
  {
    icon: FaAward,
    title: "Quality Assured",
    description:
      "Every bus passes rigorous quality checks before handover to the client.",
  },
];

export const chassisBrands = [
  "Isuzu",
  "Hino",
  "Fuso",
  "Mercedes-Benz",
  "Scania",
  "Volvo",
  "MAN",
  "Tata",
];

export const busProcess = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your requirements, capacity needs, and budget.",
  },
  {
    step: 2,
    title: "Chassis Selection",
    description: "Help you choose the right chassis for your application.",
  },
  {
    step: 3,
    title: "Custom Design",
    description: "Create detailed CAD drawings with your specifications.",
  },
  {
    step: 4,
    title: "Fabrication",
    description: "Build the bus body using premium materials and techniques.",
  },
  {
    step: 5,
    title: "Interior Fit-out",
    description: "Install seating, flooring, lighting, and accessories.",
  },
  {
    step: 6,
    title: "Finishing",
    description: "Paint, branding, and final quality inspection.",
  },
];

export const busStats = [
  { value: "200+", label: "Buses Built" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Schools Served" },
  { value: "10+", label: "Chassis Brands" },
];

export const schoolBusFeatures = [
  "High-visibility safety yellow paint",
  "Stop signs and warning lights",
  "Padded, high-back seats",
  "Emergency exit windows",
  "First aid kit and fire extinguisher mounts",
  "GPS tracking system ready",
  "Driver monitoring camera mount",
  "School logo and branding",
];
