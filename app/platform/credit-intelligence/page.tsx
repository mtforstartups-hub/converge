import AgentDetailHero from "@/components/platform/AgentDetailHero";
import HowItWorksList from "@/components/platform/credit-intelligence/HowItWorksList";
import KeyCapabilitiesAndOutput from "@/components/platform/credit-intelligence/KeyCapabilitiesAndOutput";
import BottomCta from "@/components/homepage/BottomCta";
import { Metadata } from "next";

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
      <HowItWorksList />
      <KeyCapabilitiesAndOutput />
      {/* <BottomCta /> */}
    </>
  );
}
