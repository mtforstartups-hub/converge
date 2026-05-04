import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";

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
                          className="lucide lucide-building2 lucide-building-2 w-4 h-4 text-verified"
                          aria-hidden="true"
                        >
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                        123 Main Street Property LLC (Borrower)
                      </div>
                      <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                        <div className="flex items-center gap-2 text-charcoal/80">
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
                            className="lucide lucide-git-commit-horizontal w-3 h-3"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <line x1="3" x2="9" y1="12" y2="12"></line>
                            <line x1="15" x2="21" y1="12" y2="12"></line>
                          </svg>
                          <span className="text-xs uppercase tracking-wider">
                            Owned 60% by
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-charcoal">
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
                            className="lucide lucide-building2 lucide-building-2 w-4 h-4 text-charcoal/80"
                            aria-hidden="true"
                          >
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                          </svg>
                          Main Street Holdings Corp.
                        </div>
                        <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                          <div className="flex items-center gap-2 text-charcoal/80">
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
                              className="lucide lucide-git-commit-horizontal w-3 h-3"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                              <line x1="3" x2="9" y1="12" y2="12"></line>
                              <line x1="15" x2="21" y1="12" y2="12"></line>
                            </svg>
                            <span className="text-xs uppercase tracking-wider">
                              Owned 100% by
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-charcoal font-medium">
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
                                className="lucide lucide-user w-4 h-4 text-verified"
                                aria-hidden="true"
                              >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
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
                            className="lucide lucide-git-commit-horizontal w-3 h-3"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <line x1="3" x2="9" y1="12" y2="12"></line>
                            <line x1="15" x2="21" y1="12" y2="12"></line>
                          </svg>
                          <span className="text-xs uppercase tracking-wider">
                            Owned 40% by
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-charcoal">
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
                            className="lucide lucide-building2 lucide-building-2 w-4 h-4 text-charcoal/80"
                            aria-hidden="true"
                          >
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                          </svg>
                          Sterling Family Trust 2018
                        </div>
                        <div className="pl-6 border-l border-border ml-2 space-y-2 py-1">
                          <div className="flex items-center gap-2 text-charcoal/80">
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
                              className="lucide lucide-git-commit-horizontal w-3 h-3"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                              <line x1="3" x2="9" y1="12" y2="12"></line>
                              <line x1="15" x2="21" y1="12" y2="12"></line>
                            </svg>
                            <span className="text-xs uppercase tracking-wider">
                              Beneficiary
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-charcoal font-medium">
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
                                className="lucide lucide-user w-4 h-4 text-verified"
                                aria-hidden="true"
                              >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
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
