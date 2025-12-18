import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioGrid } from "@/components/portfolio";
import { ServicesCTA } from "@/components/services";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Work | HADIID Industries",
  description:
    "A showcase of our dedication to quality, precision, and craftsmanship. See the HADIID standard in action.",
  path: "/our-work",
  ogImage: "/images/schoolbuses/DSC09496.webp",
  keywords: [
    "portfolio",
    "completed projects",
    "vehicle body gallery",
    "fabrication showcase",
  ],
});

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title='Our Work'
        subtitle='A showcase of our dedication to quality, precision, and craftsmanship. See the HADIID standard in action.'
        backgroundImage='/images/schoolbuses/DSC09496.webp'
      />

      <PortfolioGrid />

      <ServicesCTA />
    </>
  );
}
