import Button from "@/components/ui/Button";
import Image from "next/image";

import {
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Lock,
  Server,
  Search,
  Cloud,
} from "lucide-react";
import CreditOSLayersTabs from "@/components/product/CreditOSLayersTabs";
import BottomCtaNew from "@/components/BottomCtaNew";

export default function Product() {
  return (
    <>
      {/* hero section */}
      <section className="w-full bg-midnight">
        <div className="relative w-full min-h-fit">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background Image"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-midnight/70 z-0" />

          <div className="relative z-10 max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 xl:py-32 text-parchment">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-wider text-center lg:text-left max-w-6/10">
              CreditOS.
              <br />
              The intelligence engine behind every Converge decision.
            </h1>

            <p className="text-base sm:text-lg text-parchment/60 mb-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Five layers that work together to turn a borrower&apos;s file into
              a credit-ready package. Built for the complexity of real
              estate-backed lending. Auditable end to end.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start">
              <Button
                href="/live-deal"
                title="See CreditOS on a live deal"
                type="primary"
              />
              <span className="hidden md:flex">
                <Button
                  href="/contact"
                  title="Talk to a credit engineer"
                  type="secondary"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 1 — WHY A PLATFORM, NOT A TOOL */}
      <section className="w-full bg-parchment py-20 lg:py-32">
        <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
                Why a Platform, Not a Tool
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-charcoal leading-tight">
                Credit work is connected. <br className="hidden md:block" />
                Your tools shouldn&apos;t make it disconnected.
              </h2>
            </div>
            <div className="space-y-6 text-charcoal/80 font-serif text-lg lg:text-xl leading-relaxed">
              <p>
                Most lenders today stitch together a document parser, a workflow
                tool, a policy spreadsheet, and a senior underwriter&apos;s
                memory. The seams between those tools is where credit losses
                happen.
              </p>
              <p>
                <strong className="text-charcoal font-semibold">
                  CreditOS is one engine that holds the whole credit picture at
                  once.
                </strong>{" "}
                The same intelligence that reads the document reasons about the
                entity, applies your policy, and watches for risk shifts after
                closing. Nothing falls through, because there are no seams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — THE FIVE CREDITOS LAYERS, IN DEPTH */}
      <CreditOSLayersTabs />

      {/* BLOCK 3 — HOW CREDITOS FITS WITH YOUR LOS */}
      <section className="w-full bg-parchment py-20 lg:py-32 border-t border-white/95">
        <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-verified font-mono text-sm uppercase tracking-widest mb-4">
                <Workflow className="w-5 h-5" />
                System Integration
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-charcoal leading-tight">
                How CreditOS fits <br />
                with your LOS
              </h2>
              <p className="text-lg lg:text-xl font-serif text-charcoal/90 mb-8 italic">
                CreditOS sits before your LOS. It doesn&apos;t replace it.
              </p>

              <div className="space-y-6 text-charcoal/70 font-sans text-base lg:text-lg">
                <p>
                  Your LOS is your system of record. CreditOS is your system of
                  intelligence. The two work together: CreditOS reads, reasons,
                  and structures the deal, then hands a clean, credit-ready file
                  to your LOS for booking and servicing.
                </p>
                <p>
                  We integrate with Encompass, BytePro, ACES, and custom
                  in-house systems. Implementation is typically four to six
                  weeks from kickoff to first live deal.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-parchment/50 backdrop-blur-md p-8 lg:p-10 rounded-2xl border border-white/90 shadow-[0_0_30px_rgba(11,107,96,0.1)] group hover:border-verified/40 transition-colors duration-300">
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Server className="w-6 h-6 text-verified group-hover:scale-110 transition-transform duration-300" />
                  What this means for your stack
                </h3>
                <p className="text-charcoal/80 font-sans text-base lg:text-lg leading-relaxed">
                  No rip-and-replace. No new system of record. Your team works
                  in the LOS they already know — CreditOS makes the file that
                  lands there dramatically better.
                </p>
                <div className="mt-8 flex items-center gap-6 text-verified font-mono text-sm">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Seamless API
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Native Sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — AI GOVERNANCE AND AUDITABILITY */}
      <section className="w-full bg-parchment py-20 lg:py-32 relative overflow-hidden border-y-[0.5px] border-steel">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-verified/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-parchment/50 rounded-full mb-8 border border-verified/90 backdrop-blur-sm">
              <Search className="w-8 h-8 text-verified" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              AI Governance and Auditability
            </h2>
            <p className="text-lg lg:text-xl font-serif text-charcoal/90 mb-12 italic">
              Every decision Converge surfaces is traceable to its source.
            </p>

            <div className="text-left space-y-6 text-charcoal/80 font-sans text-base lg:text-lg leading-relaxed bg-white p-8 lg:p-12 rounded-2xl border border-verified/95 backdrop-blur-sm">
              <p>
                Black-box AI doesn&apos;t pass enterprise credit review.
                CreditOS is built on the opposite premise: every extraction,
                every match, every risk flag points back to the document and the
                policy clause it came from. Open the audit trail and follow any
                decision from output to source.
              </p>
              <p>
                Models are versioned. Policy logic is versioned. Every credit
                decision your team makes with CreditOS can be reconstructed
                exactly, six months or six years later, for any auditor,
                examiner, or LP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — DEPLOYMENT */}
      <section className="w-full bg-midnight py-20 lg:py-32">
        <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Go Live
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-parchment leading-tight">
                Standard deployment: <br />
                four to six weeks.
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 text-parchment/80 bg-midnight/30 p-5 rounded-xl border border-white/5">
                  <Lock className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <span className="font-sans text-sm leading-relaxed">
                    Deployments are cloud-hosted in the United States with
                    single-tenant options for institutions that require them.
                  </span>
                </div>
                <div className="flex items-start gap-4 text-parchment/80 bg-midnight/30 p-5 rounded-xl border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <span className="font-sans text-sm leading-relaxed">
                    Data residency, encryption, and access controls are covered
                    on the Security page.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="group flex flex-col sm:flex-row gap-6 p-6 lg:p-8 bg-midnight/40 rounded-2xl border border-white/5 hover:border-verified/30 transition-colors duration-300">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center font-mono text-xl text-verified font-bold group-hover:scale-110 group-hover:bg-deep-slate transition-all duration-300 shadow-[0_0_15px_rgba(11,107,96,0.1)] group-hover:shadow-[0_0_20px_rgba(11,107,96,0.3)]">
                      1–2
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">
                      Weeks
                    </div>
                    <h4 className="font-display text-xl font-bold text-parchment mb-3">
                      Integration & Policy Capture
                    </h4>
                    <p className="font-sans text-parchment/70 leading-relaxed text-base">
                      Integration with your LOS and document sources, plus
                      credit policy capture in the Policy Engine.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row gap-6 p-6 lg:p-8 bg-midnight/40 rounded-2xl border border-white/5 hover:border-verified/30 transition-colors duration-300">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center font-mono text-xl text-verified font-bold group-hover:scale-110 group-hover:bg-deep-slate transition-all duration-300 shadow-[0_0_15px_rgba(11,107,96,0.1)] group-hover:shadow-[0_0_20px_rgba(11,107,96,0.3)]">
                      3–4
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">
                      Weeks
                    </div>
                    <h4 className="font-display text-xl font-bold text-parchment mb-3">
                      Parallel Run Validation
                    </h4>
                    <p className="font-sans text-parchment/70 leading-relaxed text-base">
                      Parallel run against historical deals to validate accuracy
                      on your portfolio.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row gap-6 p-6 lg:p-8 bg-midnight/40 rounded-2xl border border-white/5 hover:border-verified/30 transition-colors duration-300">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center font-mono text-xl text-verified font-bold group-hover:scale-110 group-hover:bg-deep-slate transition-all duration-300 shadow-[0_0_15px_rgba(11,107,96,0.1)] group-hover:shadow-[0_0_20px_rgba(11,107,96,0.3)]">
                      5–6
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">
                      Weeks
                    </div>
                    <h4 className="font-display text-xl font-bold text-parchment mb-3">
                      Live Deal Cutover
                    </h4>
                    <p className="font-sans text-parchment/70 leading-relaxed text-base">
                      Live deal cutover, with white-glove support from your
                      Converge credit engineer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCtaNew
        title="Bring a deal. We'll run it through the engine."
        para="The fastest way to understand CreditOS is to watch it work on a file your team is underwriting today."
        primaryCta="See it on a live deal"
        secondaryCta="Talk to a credit engineer"
      />
    </>
  );
}
