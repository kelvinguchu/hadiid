import {
  HeroSection,
  FeaturesBar,
  AboutSection,
  WhyChooseUs,
  ServicesOverview,
  ServiceFeature,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='px-4'>
        <FeaturesBar />

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
          imageSrc='/images/kenyan_trailer.jpeg'
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
            imageSrc='/images/bus.png'
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
          imageSrc='/images/truck-body4.jpeg'
          imageAlt='Custom-built truck body'
          reverse
        />

        <TestimonialsSection />

        <CTASection />
      </div>
    </>
  );
}
