import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import ImpactSection from "@/components/homepage/Impact";
import Industries from "@/components/homepage/Industries";
import IntelligenceSection from "@/components/homepage/Intelligence";
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
    </>
  );
}
