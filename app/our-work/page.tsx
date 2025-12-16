import { PageHeader } from "@/components/ui/page-header";
import { PortfolioGrid } from "@/components/portfolio";
import { ServicesCTA } from "@/components/services";

export const metadata = {
  title: "Our Work - HADIID Industries",
  description:
    "A showcase of our dedication to quality, precision, and craftsmanship. See the HADIID standard in action.",
};

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
