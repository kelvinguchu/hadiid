import type { Metadata } from "next";

// Base URL for the site - Update this for production
export const siteConfig = {
  name: "Hadiid Industries Ltd",
  shortName: "Hadiid Industries",
  description:
    "Your trusted partner in vehicle body building, fabrication, and repairs. We combine modern technology with expert craftsmanship to deliver unmatched quality.",
  url: "https://www.hadiidindustries.com",
  ogImage: "/images-2/hero.jpg",
  keywords: [
    "vehicle body building",
    "truck fabrication",
    "bus body building",
    "trailer manufacturing",
    "accident repairs",
    "fleet solutions",
    "Kenya",
    "Africa",
    "commercial vehicle",
    "custom fabrication",
    "Hadiid Industries",
  ],
  authors: [{ name: "Hadiid Industries Ltd" }],
  creator: "Hadiid Industries Ltd",
  publisher: "Hadiid Industries Ltd",
  locale: "en_KE",
  type: "website" as const,
  twitter: {
    card: "summary_large_image" as const,
    // Add Twitter handle if available
    // creator: "@hadiid",
    // site: "@hadiid",
  },
  verification: {
    google: "googlefd69541c2b3caf53", // From the verification file in public folder
  },
};

// Shared OpenGraph configuration
export const baseOpenGraph = {
  siteName: siteConfig.name,
  locale: siteConfig.locale,
  type: siteConfig.type,
  url: siteConfig.url,
};

// Generate metadata for pages
export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;
  // Use absolute URL for OG images
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseOpenGraph,
      title,
      description,
      url,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title,
      description,
      images: [absoluteImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Service-specific metadata configurations
export const serviceMetadata = {
  accidentRepairs: {
    title: "Accident Repairs",
    description:
      "Expert collision repair for all vehicle types - from minor dents to major structural damage. Professional restoration with OEM parts and factory finishes.",
    path: "/services/accident-repairs",
    ogImage: "/images/ac2.jpeg",
    keywords: [
      "accident repair",
      "collision repair",
      "vehicle restoration",
      "panel beating",
      "body shop",
      "insurance claims",
    ],
  },
  busBody: {
    title: "Bus Body Building",
    description:
      "Custom bus bodies designed for African conditions - safe, durable, and efficient. School buses, PSV buses, and luxury coaches.",
    path: "/services/bus-body",
    ogImage: "/school-buses/DSC09530.jpg",
    keywords: [
      "bus body building",
      "school bus",
      "PSV bus",
      "coach building",
      "passenger transport",
      "custom bus",
    ],
  },
  fabrications: {
    title: "Specialized Fabrications",
    description:
      "Custom metal fabrication for specialized vehicles and equipment. Industrial-grade solutions for unique applications.",
    path: "/services/fabrications",
    ogImage: "/images-2/oil-carrier.jpg",
    keywords: [
      "metal fabrication",
      "custom fabrication",
      "industrial fabrication",
      "steel work",
      "specialized vehicles",
    ],
  },
  trailers: {
    title: "Heavy Duty Trailers",
    description:
      "Custom trailer manufacturing with premium components - BPW axles, Wabco brakes, and Hyva tippers for maximum reliability.",
    path: "/services/trailers",
    ogImage: "/lorries/DSC09726.jpg",
    keywords: [
      "trailer manufacturing",
      "flatbed trailer",
      "tanker trailer",
      "tipping trailer",
      "BPW axles",
      "heavy duty",
    ],
  },
  truckFabrications: {
    title: "Truck Body Fabrication",
    description:
      "Transform cabin-and-chassis vehicles into purpose-built transporters. Custom truck bodies for cargo, tankers, and specialized applications.",
    path: "/services/truck-fabrications",
    ogImage: "/lorry-making/DSC01592.jpg",
    keywords: [
      "truck body",
      "truck fabrication",
      "cargo truck",
      "tanker truck",
      "custom truck body",
      "commercial vehicle",
    ],
  },
};
