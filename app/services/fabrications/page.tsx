import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  FabricationsIntro,
  FabricationServicesSection,
  CapabilitiesSection,
  IndustriesSection,
  FabricationProcessSection,
  FeaturedProjectSection,
  FabricationsCTA,
} from "@/components/services/fabrications";
import { generatePageMetadata, serviceMetadata } from "@/lib/seo-config";

const { fabrications } = serviceMetadata;

export const metadata: Metadata = generatePageMetadata({
  title: `${fabrications.title} | Hadiid Industries`,
  description: fabrications.description,
  path: fabrications.path,
  ogImage: fabrications.ogImage,
  keywords: fabrications.keywords,
});

export default function FabricationsPage() {
  return (
    <div>
      <PageHeader
        title='Specialized Fabrication'
        subtitle='Custom metalwork and vehicle adaptations for unique operational requirements.'
        backgroundImage='/workers/DSC09770.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Specialized Fabrication" },
        ]}
      />
      <div className='px-4'>
        <FabricationsIntro />
        <FabricationServicesSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <FabricationProcessSection />
        <FeaturedProjectSection />
      </div>
      <FabricationsCTA />
    </div>
  );
}
