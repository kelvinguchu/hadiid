import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  AccidentRepairsIntro,
  VehicleTypesSection,
  RepairServicesSection,
  RepairProcessSection,
  TurnaroundTimesSection,
  WhyChooseUsSection,
  InsuranceSection,
  AccidentRepairsCTA,
} from "@/components/services/accident-repairs";
import { generatePageMetadata, serviceMetadata } from "@/lib/seo-config";

const { accidentRepairs } = serviceMetadata;

export const metadata: Metadata = generatePageMetadata({
  title: `${accidentRepairs.title} | Hadiid Industries`,
  description: accidentRepairs.description,
  path: accidentRepairs.path,
  ogImage: accidentRepairs.ogImage,
  keywords: accidentRepairs.keywords,
});

export default function AccidentRepairsPage() {
  return (
    <div>
      <PageHeader
        title='Accident Repairs'
        subtitle='Expert collision repair for all vehicle types - from minor dents to major structural damage.'
        backgroundImage='/images/ac2.jpeg'
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Accident Repairs" },
        ]}
      />
      <div className='px-4'>
        <AccidentRepairsIntro />
        <VehicleTypesSection />
        <RepairServicesSection />
        <RepairProcessSection />
        <TurnaroundTimesSection />
        <WhyChooseUsSection />
        <InsuranceSection />
      </div>
      <AccidentRepairsCTA />
    </div>
  );
}
