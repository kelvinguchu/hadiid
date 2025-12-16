import { PageHeader } from "@/components/ui/page-header";
import {
  StorySection,
  VisionMissionSection,
  ProcessTimeline,
  AboutCTA,
} from "@/components/about";

export const metadata = {
  title: "About Us - HADIID Industries",
  description:
    "Learn about HADIID Industries Ltd - Engineering advanced fleet solutions that deliver safety, reliability, and maximum uptime across Africa.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title='About HADIID Industries'
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
