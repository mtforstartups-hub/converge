import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";

export const metadata: Metadata = {
  title: "Policy Match | Converge",
  description:
    "Automated credit guideline compliance and programmatic underwriting.",
};

export default function PolicyMatchPage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Policy Match"
        description="Translate your credit manual into executable logic. Automatically verify every deal against your specific underwriting guidelines with absolute precision."
      />

      <section className="py-16 md:py-24 border-t border-white/5 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <GridLeftContents
              title="Cognitive Work"
              paras={[
                "Credit policies are typically static PDFs that require manual interpretation and enforcement by underwriters. This leads to inconsistent application, missed exceptions, and significant put-back risk when selling loans to the secondary market.",
                'The Policy Match agent codifies your exact credit box into deterministic rules. As data is extracted and synthesized, it is continuously evaluated against these rules. We handle complex conditional logic: "If property type is Retail and loan size > $5M, then minimum DSCR is 1.35x, otherwise 1.25x."',
                "Every pass, fail, or required exception is logged with full traceability to the underlying data source, creating a perfect audit trail for credit committees and secondary market buyers.",
              ]}
              stats={[
                { value: "0", label: "Policy exceptions missed" },
                { value: "Real-time", label: "Compliance verification" },
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
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="font-serif font-medium text-charcoal">
                          Programmatic Underwriting
                        </h4>
                        <p className="text-sm text-charcoal/80 mt-1">
                          Core Bridge Lending Matrix v2.4
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-serif font-medium text-charcoal">
                          4/5
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                          Checks Passed
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-steel bg-parchment rounded-sm">
                        <div className="flex items-center gap-3">
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
                            className="lucide lucide-circle-check w-5 h-5 text-verified/80"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-charcoal">
                              DSCR &gt;= 1.25x
                            </div>
                            <div className="text-xs text-charcoal/80">
                              Source: Credit Intelligence Synthesis
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium px-2 py-1 rounded-sm bg-verified/10 text-verified">
                          1.32x
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border bg-background rounded-sm">
                        <div className="flex items-center gap-3">
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
                            className="lucide lucide-circle-check w-5 h-5 text-verified/80"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-charcoal">
                              LTV &lt;= 75%
                            </div>
                            <div className="text-xs text-charcoal/80">
                              Source: Appraisal vs Loan Amount
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium px-2 py-1 rounded-sm bg-verified/10 text-verified">
                          71.4%
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border bg-background rounded-sm">
                        <div className="flex items-center gap-3">
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
                            className="lucide lucide-circle-x w-5 h-5 text-red-500"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-charcoal">
                              Guarantor FICO &gt;= 680
                            </div>
                            <div className="text-xs text-charcoal/80">
                              Source: Tri-Merge Credit Report
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium px-2 py-1 rounded-sm bg-red-50 text-red-700">
                          665
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border bg-background rounded-sm">
                        <div className="flex items-center gap-3">
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
                            className="lucide lucide-circle-check w-5 h-5 text-verified/80"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-charcoal">
                              No Open Bankruptcies
                            </div>
                            <div className="text-xs text-charcoal/80">
                              Source: Background Report
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium px-2 py-1 rounded-sm bg-verified/10 text-verified">
                          Clear
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border bg-background rounded-sm">
                        <div className="flex items-center gap-3">
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
                            className="lucide lucide-circle-check w-5 h-5 text-verified/80"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-charcoal">
                              Occupancy &gt;= 90%
                            </div>
                            <div className="text-xs text-charcoal/80">
                              Source: Rent Roll (Nov 2023)
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium px-2 py-1 rounded-sm bg-verified/10 text-verified">
                          94%
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-sm">
                      <p className="text-sm text-red-800 font-medium">
                        1 exception requires Credit Committee approval.
                      </p>
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
