import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactInfo, ContactForm, ContactMap } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | HADIID Industries",
  description:
    "Get in touch with HADIID Industries for custom vehicle body solutions. Request a quote for bus bodies, trailers, truck fabrications, or accident repairs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title='Contact Us'
        subtitle='Get in touch with our expert team for custom vehicle body solutions'
        backgroundImage='/images/schoolbuses/DSC09545.webp'
      />

      <section className='py-6 md:py-8 px-4'>
        <div className='container mx-auto'>
          <div className='text-center max-w-3xl mx-auto md:mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold font-poppins mb-4'>
              Get In <span className='text-primary'>Touch</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </>
  );
}
