import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  TruckFabricationsIntro,
  BodyTypesSection,
  TruckCapabilitiesSection,
  TruckProcessSection,
  OptionalFeaturesSection,
  TruckFabricationsCTA,
} from "@/components/services/truck-fabrications";
import { generatePageMetadata, serviceMetadata } from "@/lib/seo-config";

const { truckFabrications } = serviceMetadata;

export const metadata: Metadata = generatePageMetadata({
  title: `${truckFabrications.title} | HADIID Industries`,
  description: truckFabrications.description,
  path: truckFabrications.path,
  ogImage: truckFabrications.ogImage,
  keywords: truckFabrications.keywords,
});

export default function TruckFabricationsPage() {
  return (
    <div>
      <PageHeader
        title='Truck Body Fabrication'
        subtitle='Transform your cab-and-chassis into a purpose-built transporter engineered for performance and efficiency.'
        backgroundImage='/lorry-making/DSC01632.jpg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Truck Body Fabrication" },
        ]}
      />
      <div className='px-4'>
        <TruckFabricationsIntro />
        <BodyTypesSection />
        <TruckCapabilitiesSection />
        <TruckProcessSection />
        <OptionalFeaturesSection />
      </div>
      <TruckFabricationsCTA />
    </div>
  );
}
