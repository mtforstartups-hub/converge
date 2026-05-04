import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import HowItWorksList from "@/components/platform/credit-intelligence/HowItWorksList";
import KeyCapabilitiesAndOutput from "@/components/platform/credit-intelligence/KeyCapabilitiesAndOutput";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";

export const metadata: Metadata = {
  title: "Credit Intelligence | Converge",
  description:
    "Deep interlinked risk analysis across every document in the loan file.",
};

export default function CreditIntelligencePage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Credit Intelligence"
        description="Deep interlinked risk analysis across every document in the loan file. The analyst that never misses a footnote — running in 4 minutes."
      />
      <KeyCapabilitiesAndOutput />
      <HowItWorksList />
      <UnifiedIntelligence />
      <BottomCta
        messages={[
          "See the platform in action",
          "We will process your sample loan documents",
          "And show you the output live.",
        ]}
        type="secondary"
      />
    </>
  );
}
