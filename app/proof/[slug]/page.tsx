import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

export const metadata = {
  title: "Summit Capital | Proof | Converge Finance",
  description: "How a $1.4B bridge lender cut credit memo turnaround by 73%.",
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen relative bg-parchment text-charcoal overflow-hidden pt-20 md:pt-32 pb-16">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs & Back Link */}
          <div className="flex flex-col gap-6 mb-12">
            <Link
              href="/proof"
              className="group flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-verified transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all case studies
            </Link>
          </div>

          {/* Hero Header */}
          <header className="mb-16 pb-8 border-b border-charcoal/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-midnight flex items-center justify-center font-display font-bold text-white shadow-sm">
                SC
              </div>
              <div>
                <h1 className="font-sans font-bold text-lg text-charcoal tracking-wide">
                  Summit Capital
                </h1>
                <div className="font-mono text-xs uppercase tracking-widest text-charcoal/50 mt-0.5">
                  Private Lender &middot; Bridge
                </div>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-charcoal mb-8">
              How a $1.4B bridge lender cut credit memo turnaround by{" "}
              <span className="text-verified">73%</span>.
            </h2>
          </header>

          {/* Main Content Body */}
          <article className="space-y-16">
            
            {/* Customer Context */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4">Customer context</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed font-serif">
                Summit Capital originates $1.4 billion annually across bridge and value-add commercial real estate loans. As originations doubled over an eighteen-month period, their 12-person credit team became the primary bottleneck. The pain wasn&apos;t decision-making; it was data extraction. Underwriters were spending hours manually reconciling operating statements and tracing complex sponsor structures before they could even begin pricing risk. They needed a way to decouple origination volume from credit team headcount.
              </p>
            </section>

            {/* The Before State */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4">The before state</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed font-serif">
                The pre-Converge workflow required an average of 4.5 hours of manual data entry per deal. Extracting rent rolls, normalizing trailing twelve-month (T12) financials, and verifying entity documents resulted in a 14-day average turnaround time for credit memos. Worse, manual entry meant a 12% error rate in initial models, requiring senior committee members to catch basic reconciliation errors during final review. The opportunity cost was measurable: Summit was losing competitive deals to faster private lenders simply because they couldn&apos;t issue term sheets fast enough.
              </p>
            </section>

            {/* The Click Moment */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4">The click moment</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed font-serif">
                Summit evaluated three OCR vendors and two offshore BPO providers. The OCR tools required constant template retraining for every new property manager&apos;s rent roll. The offshore teams introduced unacceptable latency. The turning point was testing Converge&apos;s Underwriter Intelligence on an active, complex multi-family deal. CreditOS didn&apos;t just extract the data; it reconstructed the entity hierarchy and matched the metrics against Summit&apos;s specific credit policy. The first file required zero rework and was committee-ready in minutes.
              </p>
            </section>

            {/* The After State */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-6">The after state</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl border border-verified/20 bg-verified/5">
                  <div className="font-display text-4xl font-bold text-verified mb-2">73%</div>
                  <div className="text-sm font-medium text-charcoal/80">Reduction in memo turnaround</div>
                  <div className="text-xs text-charcoal/50 mt-1">From 14 days to 3.8 days</div>
                </div>
                <div className="p-6 rounded-xl border border-verified/20 bg-verified/5">
                  <div className="font-display text-4xl font-bold text-verified mb-2">0%</div>
                  <div className="text-sm font-medium text-charcoal/80">Data extraction errors</div>
                  <div className="text-xs text-charcoal/50 mt-1">Down from 12% error rate</div>
                </div>
                <div className="p-6 rounded-xl border border-verified/20 bg-verified/5">
                  <div className="font-display text-4xl font-bold text-verified mb-2">2.1x</div>
                  <div className="text-sm font-medium text-charcoal/80">Origination volume</div>
                  <div className="text-xs text-charcoal/50 mt-1">With the same credit FTE count</div>
                </div>
              </div>
              
              <p className="text-lg text-charcoal/80 leading-relaxed font-serif">
                Today, Summit routes all incoming deal files through Converge. Data extraction is fully automated, allowing senior underwriters to focus purely on risk judgment rather than spreadsheet reconciliation. This shift has not only reduced turnaround times by 73% but has structurally altered Summit&apos;s cost-to-originate, allowing them to underwrite smaller, high-yield bridge loans profitably.
              </p>
            </section>

            {/* The Customer Quote */}
            <section className="py-8 md:py-12 border-t border-b border-charcoal/10">
              <div className="flex gap-4 lg:gap-6">
                <Quote className="w-10 h-10 text-verified shrink-0 opacity-50" />
                <div>
                  <blockquote className="font-display text-2xl md:text-3xl font-medium text-charcoal leading-snug mb-6">
                    &quot;We used to pay our senior underwriters to be data entry clerks for the first three days of a deal. Converge gave them their jobs back. We&apos;re issuing term sheets in 48 hours instead of two weeks, and our variance has effectively disappeared.&quot;
                  </blockquote>
                  <div className="font-sans font-bold text-charcoal">Sarah Jenkins</div>
                  <div className="font-mono text-sm text-charcoal/60 uppercase tracking-widest mt-1">
                    Chief Credit Officer, Summit Capital
                  </div>
                </div>
              </div>
            </section>

          </article>

          {/* Bottom CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-midnight text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-parchment mb-2">Ready to see these results?</h3>
              <p className="text-white/60">Bring a live deal. We&apos;ll show you the output.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button href="/live-deal" title="See Converge on your deals" />
              <Button type="secondary" href="/proof" title="Back to all case studies" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
