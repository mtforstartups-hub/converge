import { Metadata } from "next";
import AgentDetailHero from "@/components/platform/AgentDetailHero";
import UnifiedIntelligence from "@/components/platform/UnifiedIntelligence";
import BottomCta from "@/components/ui/BottomCta";
import GridLeftContents from "@/components/platform/GridLeftContents";

export const metadata: Metadata = {
  title: "Triage | Converge",
  description:
    "Deep interlinked risk analysis across every document in the loan file.",
};

export default function TriagePage() {
  return (
    <>
      <AgentDetailHero
        badge="Available Now"
        title="Triage Agent"
        description="Ingest chaotic document packages. Automatically classify, split, and extract structured data from unstructured sources with verifiable accuracy."
      />

      <section className="py-16 md:py-24 border-t border-white/5 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <GridLeftContents
              title="Cognitive Work"
              paras={[
                "Borrowers rarely submit clean, perfectly organized document packages. They send massive consolidated PDFs, poorly named files, and mixed formats. The Triage agent brings order to this chaos immediately upon ingestion.",
                "We classify over 400 distinct commercial real estate document types. We automatically split consolidated packages into discrete, identifiable components. We then apply specialized extraction models tailored to each document type—treating a rent roll fundamentally differently from an appraisal report.",
                "Every extracted data point maintains a direct pointer back to its source coordinate in the original document, ensuring complete auditability.",
              ]}
              stats={[
                { value: "< 10s", label: "Average processing time per file" },
                { value: "99%", label: "Classification Accuracy" },
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
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-serif font-medium text-charcoal">
                      Ingestion Queue
                    </h4>
                    <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border border-(--badge-outline) bg-verified/10 text-verified">
                      Processing Complete
                    </div>
                  </div>

                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <th className="h-10 px-2 text-left align-middle font-medium text-charcoal [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            Filename
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium text-charcoal [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            Classified Type
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium text-charcoal [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            Confidence
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium text-charcoal [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] font-medium text-sm">
                            2023_Tax_Return_LLC.pdf
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                            Tax Return
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal">
                            99.8%
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-verified">
                              <span className="w-1.5 h-1.5 rounded-full bg-verified/80"></span>
                              Extracted
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] font-medium text-sm">
                            Operating_Statement_YTD.xlsx
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                            Operating Statement
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal">
                            98.5%
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-verified">
                              <span className="w-1.5 h-1.5 rounded-full bg-verified/80"></span>
                              Extracted
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] font-medium text-sm">
                            Appraisal_Report_Final.pdf
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                            Appraisal
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal">
                            99.1%
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-verified">
                              <span className="w-1.5 h-1.5 rounded-full bg-verified/80"></span>
                              Extracted
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] font-medium text-sm">
                            Rent_Roll_Nov.csv
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                            Rent Roll
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal">
                            97.2%
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-verified">
                              <span className="w-1.5 h-1.5 rounded-full bg-verified/80"></span>
                              Extracted
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-steel/50 data-[state=selected]:bg-steel">
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] font-medium text-sm">
                            Borrower_ID_Scan.jpeg
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm">
                            Identification
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px] text-sm text-charcoal">
                            99.9%
                          </td>
                          <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-verified">
                              <span className="w-1.5 h-1.5 rounded-full bg-verified/80"></span>
                              Extracted
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
