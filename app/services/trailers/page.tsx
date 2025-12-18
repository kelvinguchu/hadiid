import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  TrailersIntro,
  TrailerBenefitsSection,
  TrailerTypesSection,
  SpecificationsSection,
  TrailerProcessSection,
  TrailersCTA,
} from "@/components/services/trailers";
import { generatePageMetadata, serviceMetadata } from "@/lib/seo-config";

const { trailers } = serviceMetadata;

export const metadata: Metadata = generatePageMetadata({
  title: `${trailers.title} | HADIID Industries`,
  description: trailers.description,
  path: trailers.path,
  ogImage: trailers.ogImage,
  keywords: trailers.keywords,
});

export default function TrailersPage() {
  return (
    <div>
      <PageHeader
        title='Heavy Duty Trailers'
        subtitle='German-engineered components combined with advanced fabrication techniques for unparalleled reliability and performance.'
        backgroundImage='/lorries/DSC09746.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Heavy Duty Trailers" },
        ]}
      />
      <div className='px-4'>
        <TrailersIntro />
        <TrailerBenefitsSection />
        <TrailerTypesSection />
        <SpecificationsSection />
        <TrailerProcessSection />
      </div>
      <TrailersCTA />
    </div>
  );
}
