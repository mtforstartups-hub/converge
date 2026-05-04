import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";

export const metadata: Metadata = {
  title: "Background Report | Converge",
  description:
    "Automated background and negative news screening for commercial underwriting.",
};

export default function BackgroundReportPage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Background Report"
        description="Scan entities and principals against global watchlists, litigation databases, and negative news sources instantly. Filter the noise; highlight material risk."
      />

      <section className="py-16 md:py-24 border-t border-white/5 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <GridLeftContents
              title="Cognitive Work"
              paras={[
                "Standard background checks return hundreds of pages of raw, unfiltered data. Underwriters waste hours sifting through parking tickets and false-positive name matches trying to locate material litigation or financial distress.",
                "The Background Report agent acts as a precision filter. We ingest raw LexisNexis, OFAC, and court filings, applying cognitive models to discern relevance. We automatically dismiss litigation where the borrower was the plaintiff, filter out minor traffic infractions, and consolidate duplicate reports of the same material event.",
                "The output is a concise, prioritized brief of actual reputational, legal, and financial risks associated with the verified deal principals.",
              ]}
              stats={[
                { value: "0", label: "False positives presented" },
                { value: "Real-time", label: "Continuous monitoring" },
              ]}
            />

            <div className="p-2">
              <div className="border border-steel sticky top-20">
                <div className="border-b border-steel bg-steel/30 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-steel"></div>
                    <div className="w-3 h-3 rounded-full bg-steel"></div>
                    <div className="w-3 h-3 rounded-full bg-steel"></div>
                  </div>
                  <div className="text-xs font-medium text-charcoal uppercase tracking-wider">
                    Platform Output
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-steel pb-4 mb-6">
                      <h4 className="font-serif font-medium text-charcoal">
                        Principal Screening
                      </h4>
                      <p className="text-sm text-charcoal/90 mt-1">
                        Michael T. Sterling (Guarantor)
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border border-steel bg-parchment rounded-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-shield-check w-4 h-4 text-verified/80"
                            aria-hidden="true"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <div className="text-sm font-semibold uppercase tracking-wider text-charcoal/90">
                            Watchlists
                          </div>
                        </div>
                        <div className="text-lg font-medium text-charcoal">
                          Clear
                        </div>
                        <div className="text-xs text-charcoal/90 mt-1">
                          OFAC, PEP, Sanctions
                        </div>
                      </div>
                      <div className="p-4 border border-steel bg-parchment rounded-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-shield-alert w-4 h-4 text-amber-500"
                            aria-hidden="true"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                          </svg>
                          <div className="text-sm font-semibold uppercase tracking-wider text-charcoal/90">
                            Litigation
                          </div>
                        </div>
                        <div className="text-lg font-medium text-charcoal">
                          1 Finding
                        </div>
                        <div className="text-xs text-charcoal/90 mt-1">
                          Material active cases
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border border-amber-200 bg-amber-50/50 rounded-sm">
                      <h5 className="font-medium text-amber-900 mb-2">
                        Active Commercial Litigation
                      </h5>
                      <p className="text-sm text-amber-800/80 mb-3">
                        Principal is currently listed as a defendant in a breach
                        of contract dispute regarding a prior commercial
                        development (Case #2022-CV-1948).
                      </p>
                      <div className="bg-white border border-amber-100 rounded-sm p-3">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-charcoal/90">Jurisdiction</span>
                          <span className="font-medium">Cook County, IL</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-charcoal/90">Filing Date</span>
                          <span className="font-medium">Oct 14, 2022</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-charcoal/90">Claim Amount</span>
                          <span className="font-medium text-charcoal">
                            $1,250,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
