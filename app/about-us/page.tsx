import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  StorySection,
  VisionMissionSection,
  ProcessTimeline,
  AboutCTA,
} from "@/components/about";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | Hadiid Industries",
  description:
    "Learn about Hadiid Industries Ltd - Engineering advanced fleet solutions that deliver safety, reliability, and maximum uptime across Africa.",
  path: "/about-us",
  ogImage: "/images/about_us.jpeg",
  keywords: [
    "about HADIID",
    "company history",
    "vehicle manufacturer Kenya",
    "African fleet solutions",
  ],
});

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title='About Hadiid Industries'
        subtitle='Engineering advanced fleet solutions that deliver safety, reliability, and maximum uptime across Africa.'
        backgroundImage='/images/about_us.jpeg'
      />

      <StorySection />

      <VisionMissionSection />

      <ProcessTimeline />

      <AboutCTA />
    </>
  );
}
