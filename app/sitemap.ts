import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service pages - highest priority as per requirement
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/trailers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/lorries/DSC09726.jpg`],
    },
    {
      url: `${baseUrl}/services/truck-fabrications`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/lorry-making/DSC01592.jpg`],
    },
    {
      url: `${baseUrl}/services/bus-body`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/school-buses/DSC09530.jpg`],
    },
    {
      url: `${baseUrl}/services/accident-repairs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/images/ac2.jpeg`],
    },
    {
      url: `${baseUrl}/services/fabrications`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/images-2/oil-carrier.jpg`],
    },
  ];

  return [...mainPages, ...servicePages];
}
