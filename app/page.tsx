import type { Metadata } from "next";
import {
  HeroSection,
  FeaturesBar,
  PartnersMarquee,
  AboutSection,
  WhyChooseUs,
  ServicesOverview,
  ServiceFeature,
  TestimonialsSection,
  CTASection,
} from "@/components/home";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/hadiid-photos/DSC09505.jpg",
        width: 1200,
        height: 630,
        alt: "HADIID Industries - Expert Vehicle Body Building",
      },
      {
        url: "/hadiid-photos/DSC09506.jpg",
        width: 1200,
        height: 630,
        alt: "HADIID Industries Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
    description: siteConfig.description,
    images: ["/hadiid-photos/DSC09505.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='px-4'>
        <FeaturesBar />
      </div>

      <PartnersMarquee />

      <div className='px-4'>
        <AboutSection />

        <WhyChooseUs />

        <ServicesOverview />

        {/* Trailer Bodies Feature */}
        <ServiceFeature
          title='Trailer'
          titleHighlight='Bodies'
          description='We manufacture a wide range of trailers equipped with original BPW axels, Wabco braking systems, and Hyva tipping gears for guaranteed quality and performance.'
          features={[
            "Flatbed Trailers",
            "Tanker Trailers",
            "Tipping Trailers",
            "Curtain Side Trailers",
            "Drop Side Trailers",
          ]}
          imageSrc='/lorries/DSC09751.jpg'
          imageAlt='Custom trailer fabrication'
          reverse
        />

        {/* Bus Bodies Feature */}
        <div className='bg-card'>
          <ServiceFeature
            title='Bus'
            titleHighlight='Bodies'
            description='Our CAD-designed bus bodies are attractive, robust, and flexible, offering superior performance and savings on fuel and tyres for local road conditions.'
            features={[
              "City Commuter & Shuttle Buses",
              "Luxury & Long-Distance Coaches",
              "Custom Body Conversions",
            ]}
            imageSrc='/school-bus-making/DSC01396.jpg'
            imageAlt='Modern white bus body'
          />
        </div>

        {/* Truck Bodies Feature */}
        <ServiceFeature
          title='Truck'
          titleHighlight='Bodies'
          description='We design and build robust, custom truck bodies for any application, from heavy-duty cargo hauling to specialized utility vehicles, ensuring maximum payload and longevity.'
          features={[
            "Open & Closed Cargo Bodies",
            "Tipper & Dump Truck Bodies",
            "Refrigerated & Insulated Units",
            "Flatbed & Dropside Decks",
            "Custom Utility & Crane Mounts",
          ]}
          imageSrc='/lorry-making/DSC01575.jpg'
          imageAlt='Custom-built truck body'
          reverse
        />

        <TestimonialsSection />
      </div>
      <CTASection />
    </>
  );
}
