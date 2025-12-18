import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  BusBodyIntro,
  DesignFeaturesSection,
  BusTypesSection,
  ChassisCompatibilitySection,
  BusProcessSection,
  SchoolBusFeatureSection,
  BusBodyCTA,
} from "@/components/services/bus-body";
import { generatePageMetadata, serviceMetadata } from "@/lib/seo-config";

const { busBody } = serviceMetadata;

export const metadata: Metadata = generatePageMetadata({
  title: `${busBody.title} | HADIID Industries`,
  description: busBody.description,
  path: busBody.path,
  ogImage: busBody.ogImage,
  keywords: busBody.keywords,
});

export default function BusBodyPage() {
  return (
    <div>
      <PageHeader
        title='Bus Body Building'
        subtitle='Custom bus bodies designed for African conditions - safe, durable, and efficient.'
        backgroundImage='/school-buses/DSC09530.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Bus Body Building" },
        ]}
      />
      <div className='px-4'>
        <BusBodyIntro />
        <DesignFeaturesSection />
        <BusTypesSection />
        <ChassisCompatibilitySection />
        <BusProcessSection />
        <SchoolBusFeatureSection />
      </div>
      <BusBodyCTA />
    </div>
  );
}
