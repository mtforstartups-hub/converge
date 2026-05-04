import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";
import { Building2, GitCommitHorizontal, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Entity Review | Converge",
  description: "Automated entity structure mapping and compliance resolution.",
};

export default function EntityReviewPage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Entity Review"
        description="Reconstruct multi-layer ownership structures in minutes. Automatically resolve nested LLCs, trusts, and corporate hierarchies to identify ultimate beneficial owners."
      />

      <section className="py-16 md:py-24 border-t border-white/5 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <GridLeftContents
              title="Cognitive Work"
              paras={[
                "Commercial real estate transactions often involve Byzantine ownership structures designed for liability protection and tax efficiency. Unraveling an LLC owned by a Trust, which is managed by a Corporation, which is owned by multiple individuals, typically requires days of manual legal review.",
                "The Entity Review agent maps these structures deterministically. It reads operating agreements, articles of incorporation, and trust documents to build a complete ownership graph. It calculates aggregate ownership percentages across multiple nodes to identify Ultimate Beneficial Owners (UBOs) subject to KYC/AML requirements.",
                "We automatically flag missing signatory authority, conflicting ownership percentages, and incomplete document chains, preventing origination delays.",
              ]}
              stats={[
                { value: "4m", label: "Average 7-layer review time" },
                { value: "100%", label: "UBO identification accuracy" },
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
                    <div className="mb-6">
                      <h4 className="font-serif font-medium text-charcoal">
                        Ownership Graph
                      </h4>
                      <p className="text-sm text-charcoal/80 mt-1">
                        Resolved to individual UBOs
                      </p>
                    </div>
                    <div className="font-mono text-sm space-y-2 border border-border p-4 rounded-sm bg-parchment/50">
                      <div className="flex items-center gap-2 text-charcoal font-medium">
                        <Building2 className="w-4 h-4 text-verified" />
                        123 Main Street Property LLC (Borrower)
                      </div>
                      <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                        <div className="flex items-center gap-2 text-charcoal/80">
                          <GitCommitHorizontal className="w-3 h-3" />
                          <span className="text-xs uppercase tracking-wider">
                            Owned 60% by
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-charcoal">
                          <Building2 className="w-4 h-4 text-charcoal/80" />
                          Main Street Holdings Corp.
                        </div>
                        <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                          <div className="flex items-center gap-2 text-charcoal/80">
                            <GitCommitHorizontal className="w-3 h-3" />
                            <span className="text-xs uppercase tracking-wider">
                              Owned 100% by
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-charcoal font-medium">
                              <User className="w-4 h-4 text-verified" />
                              Michael T. Sterling
                            </div>
                            <span className="text-xs bg-verified/10 text-green-700 px-2 py-0.5 rounded-sm">
                              UBO (60% Total)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-6 border-l border-border ml-2 space-y-2 py-1 mt-2">
                        <div className="flex items-center gap-2 text-charcoal/80">
                          <GitCommitHorizontal className="w-3 h-3" />
                          <span className="text-xs uppercase tracking-wider">
                            Owned 40% by
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-charcoal">
                          <Building2 className="w-4 h-4 text-charcoal/80" />
                          Sterling Family Trust 2018
                        </div>
                        <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                          <div className="flex items-center gap-2 text-charcoal/80">
                            <GitCommitHorizontal className="w-3 h-3" />
                            <span className="text-xs uppercase tracking-wider">
                              Beneficiary
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-charcoal font-medium">
                              <User className="w-4 h-4 text-verified" />
                              Sarah J. Sterling
                            </div>
                            <span className="text-xs bg-verified/10 text-green-700 px-2 py-0.5 rounded-sm">
                              UBO (40% Total)
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
