import BottomCtaNew from "@/components/BottomCtaNew";
import FeaturedProof from "@/components/homepage/FeaturedProof";
import Hero from "@/components/homepage/Hero";
import ProblemSection from "@/components/homepage/ProblemSection";
import SecurityStrip from "@/components/homepage/SecurityStrip";
import IntelligenceSection from "@/components/homepage/Intelligence";
import PlatformSection from "@/components/homepage/PlatformSection";
// import HowItWorks from "@/components/homepage/HowItWorks";
// import BottomCta from "@/components/homepage/BottomCta";
// import FAQ from "@/components/homepage/Faq";
// import ImpactSection from "@/components/homepage/Impact";
// import Industries from "@/components/homepage/Industries";
// import Positioning from "@/components/homepage/Positioning";
// import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <IntelligenceSection />
      <FeaturedProof />
      <SecurityStrip />
      <BottomCtaNew
        title="See Converge on a real loan file."
        para="Bring a deal you're working. We'll run it through CreditOS live and show you what the intelligence layer surfaces — risk flags, entity gaps, policy matches, the lot. Twenty minutes."
        primaryCta="See it on a live deal"
        secondaryCta="Watch the 2-minute platform overview"
      />
      {/* <HowItWorks />
      <ImpactSection />
      <Testimonials />
      <Industries />
      <Positioning />
      <FAQ />
      <BottomCta /> */}
    </>
  );
}
