import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";

export const metadata: Metadata = {
  title: "Comps Agent | Converge",
  description:
    "Automated property comparable benchmarking and market analysis.",
};

export default function CompsPage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Comps Agent"
        description="Benchmark underwritten properties against market realities. Automatically ingest appraiser comps and cross-reference against proprietary market data sets."
      />

      <section className="py-16 md:py-24 border-t border-white/5 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <GridLeftContents
              title="Cognitive Work"
              paras={[
                "An appraisal is an opinion of value; the Comps agent verifies if that opinion is grounded in reality. We extract the appraiser's chosen comparable sales and leases, then independently verify them against market databases.",
                "We automatically identify when an appraiser has ignored closer, more recent sales that would imply a lower valuation. We benchmark underwritten rent assumptions against actual signed leases in the immediate submarket. We calculate standard deviations for price-per-square-foot and cap rates, flagging the subject property if it falls outside the market consensus.",
                "This prevents originations based on overly optimistic valuation models, protecting your portfolio from downside correction risk.",
              ]}
              stats={[
                { value: "10K+", label: "Market records analyzed daily" },
                { value: "Automated", label: "Outlier Detection" },
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
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-serif font-medium text-charcoal">
                        Sales Comparables
                      </h4>
                      <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border border-(--badge-outline) bg-steel/30 text-charcoal/90">
                        Multifamily Submarket
                      </div>
                    </div>
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel/30/30">
                            <th className="h-10 px-2 text-left align-middle font-medium text-charcoal/90 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              Property
                            </th>
                            <th className="h-10 px-2 text-left align-middle font-medium text-charcoal/90 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              Proximity
                            </th>
                            <th className="h-10 px-2 text-left align-middle font-medium text-charcoal/90 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              Date
                            </th>
                            <th className="h-10 px-2 align-middle font-medium text-charcoal/90 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              Price/SqFt
                            </th>
                            <th className="h-10 px-2 align-middle font-medium text-charcoal/90 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              Cap Rate
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel/30 bg-steel/30 font-medium">
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              <div className="flex items-center gap-2">
                                Subject Property
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                              </div>
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal/90">
                              -
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                              -
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              $245
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              6.2%
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel/30">
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              <div className="flex items-center gap-2">
                                1420 West Blvd
                              </div>
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal/90">
                              0.4 mi
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                              Oct 2023
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              $238
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              6.4%
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel/30">
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              <div className="flex items-center gap-2">
                                955 Market St
                              </div>
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal/90">
                              0.8 mi
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                              Aug 2023
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              $252
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              6.0%
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel/30">
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                              <div className="flex items-center gap-2">
                                2100 Grand Ave
                              </div>
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal/90">
                              1.1 mi
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                              Active
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              $260
                            </td>
                            <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-right">
                              5.8%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="p-3 border border-border rounded-sm">
                        <div className="text-xs text-charcoal/90 mb-1">
                          Subject vs Market Avg Price/SqFt
                        </div>
                        <div className="text-sm font-medium text-charcoal">
                          Within 2.1% (In-line)
                        </div>
                      </div>
                      <div className="p-3 border border-border rounded-sm">
                        <div className="text-xs text-charcoal/90 mb-1">
                          Subject vs Market Avg Cap Rate
                        </div>
                        <div className="text-sm font-medium text-charcoal">
                          Within 0.15% (In-line)
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
