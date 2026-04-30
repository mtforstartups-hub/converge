import PlatformHero from "@/components/platform/PlatformHero";
import SixAgents from "@/components/platform/SixAgents";
import IntegrationArchitecture from "@/components/platform/IntegrationArchitecture";
import BottomCta from "@/components/homepage/BottomCta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform | Converge",
  description: "One platform. Six agents. The complete lending workflow.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <SixAgents />
      <IntegrationArchitecture />
      <BottomCta />
    </>
  );
}
