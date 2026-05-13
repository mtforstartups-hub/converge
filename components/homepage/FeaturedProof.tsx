"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturedProof() {
  return (
    <section className="w-full bg-parchment py-20 lg:py-32 overflow-hidden border-y border-charcoal/5">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-charcoal/70 mb-4">
          FEATURED PROOF
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal mb-8 lg:mb-16 leading-tight">
          Lenders are originating differently.
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* CONTENT AREA */}
          <div className="flex-1 max-w-6xl">
            {/* Customer Logo & Name Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10 text-charcoal font-medium">
              <div className="relative w-60 flex items-center justify-center grayscale opacity-80">
                <Image
                  src="/images/brands/brand-2.svg"
                  alt="Bridge Lender Logo"
                  width={180}
                  height={90}
                />
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <span>Bridge lender</span>
                <span className="text-charcoal/20">•</span>
                <span className="text-charcoal/60">$1.4B AUM</span>
              </div>
            </div>

            {/* Challenge & Outcome */}
            <div className="space-y-10 mb-12">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-charcoal/10" />
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-3">
                  Challenge
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.3] italic">
                  &quot;A two-week credit memo turnaround was killing
                  competitive bridge deals.&quot;
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-verified/30" />
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-3">
                  Outcome
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.3]">
                  With Underwriter Intelligence live, the same team approves
                  files in three days —{" "}
                  <span className="text-verified">
                    without adding headcount.
                  </span>
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-verified/30" />

                <p className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.3]">
                  <span className="text-verified text-4xl font-bold">73%</span>{" "}
                  reduction in credit memo turnaround.
                </p>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/impact"
              className="group inline-flex items-center gap-3 text-lg font-medium text-charcoal hover:text-verified transition-colors duration-300"
            >
              <span className="border-b border-charcoal/20 group-hover:border-verified/40 pb-0.5">
                Read the full story
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* HEADLINE METRIC */}
          {/* <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-verified/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-verified leading-none tracking-tighter mb-4">
                  73%
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-charcoal tracking-tight max-w-70 leading-tight">
                  reduction in credit memo turnaround.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
