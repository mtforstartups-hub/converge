import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import IntelligenceSection from "@/components/homepage/Intelligence";
import ProblemSection from "@/components/homepage/ProblemSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <IntelligenceSection />
    </>
  );
}
