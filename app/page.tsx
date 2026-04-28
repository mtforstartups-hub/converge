import BottomCta from "@/components/homepage/BottomCta";
import FAQ from "@/components/homepage/Faq";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import ImpactSection from "@/components/homepage/Impact";
import Industries from "@/components/homepage/Industries";
import IntelligenceSection from "@/components/homepage/Intelligence";
import PlatformSection from "@/components/homepage/PlatformSection";
import Positioning from "@/components/homepage/Positioning";
import ProblemSection from "@/components/homepage/ProblemSection";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <IntelligenceSection />
      <ImpactSection />
      <Testimonials />
      <Industries />
      <PlatformSection />
      <Positioning />
      <FAQ />
      <BottomCta />
    </>
  );
}
