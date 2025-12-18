import { siteConfig } from "@/lib/seo-config";

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/favicon.png`,
    image: `${siteConfig.url}/hadiid-photos/DSC09505.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kampala Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-759-888-333",
      contactType: "customer service",
      areaServed: ["KE", "TZ", "UG", "RW", "ET", "SS"],
      availableLanguage: ["English", "Swahili"],
    },
    email: "inquiries@hadiidindustries.com",
    sameAs: [
      "https://www.facebook.com/people/Hadiid-Industries-Limited/61583242753184/",
      "https://www.instagram.com/hadiidindustrieslimited/",
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/hadiid-photos/DSC09505.jpg`,
    priceRange: "$$",
    telephone: "+254-759-888-333",
    email: "inquiries@hadiidindustries.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kampala Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2501,
      longitude: 36.8769,
    },
    sameAs: [
      "https://www.facebook.com/people/Hadiid-Industries-Limited/61583242753184/",
      "https://www.instagram.com/hadiidindustrieslimited/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema generator
export function ServiceSchema({
  name,
  description,
  image,
  url,
}: Readonly<{
  name: string;
  description: string;
  image: string;
  url: string;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    url: url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema generator
export function BreadcrumbSchema({
  items,
}: Readonly<{
  items: { name: string; url: string }[];
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
