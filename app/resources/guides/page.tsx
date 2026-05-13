import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Guides | Resources | Converge Finance",
  description:
    "Long-form guides for the technical, operational, and strategic decisions that come with bringing credit intelligence into your stack.",
};

const guides = [
  {
    title: "The CRE Lender's Guide to Credit Intelligence",
    description: "What the category is, what it isn't, and what to evaluate.",
    slug: "cre-lenders-guide",
  },
  {
    title: "Encoding Your Credit Policy as Logic",
    description:
      "A working guide for credit leaders preparing for implementation.",
    slug: "encoding-policy",
  },
  {
    title: "The Audit Trail Standard",
    description: "What regulators, examiners, and LPs are asking for in 2026.",
    slug: "audit-trail-standard",
  },
  {
    title: "Implementation Playbook",
    description: "Six weeks from kickoff to live deals.",
    slug: "implementation-playbook",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[120px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Guides" },
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Guides
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Deeper reading for credit teams making the move to intelligence.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Long-form guides for the technical, operational, and strategic
              decisions that come with bringing credit intelligence into your
              stack.
            </p>
          </div>
        </div>
      </section>

      {/* ─── GUIDES LIST ─── */}
      <section className="py-16 md:py-24 bg-parchment min-h-[50vh]">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="font-mono text-xs uppercase tracking-widest text-verified/80 mb-8">
            Launch guides
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {guides.map((guide, i) => (
              <Link
                key={i}
                href={`/resources/guides/${guide.slug}`}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-charcoal/5 bg-white/60 hover:bg-white/80 hover:border-verified/30 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 border border-charcoal/10 flex items-center justify-center text-charcoal/50 mb-6 group-hover:text-verified group-hover:border-verified/20 transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-charcoal leading-snug mb-4 group-hover:text-charcoal transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed font-sans mb-8">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono uppercase tracking-widest text-verified/80">
                    Read Guide
                  </span>
                  <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-verified group-hover:text-midnight transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE PLACEHOLDER ─── */}
      <section className="py-20 md:py-32 bg-deep-slate  border-t border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-parchment mb-4">
            Access the full library.
          </h2>
          <p className="text-white/60 mb-10 font-sans text-lg">
            Our guides are written for active credit professionals and are
            currently gated. Subscribe to access all technical documentation.
          </p>

          <form
            className="max-w-md mx-auto space-y-4 text-left"
            // onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50"
              />
            </div>
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50"
              />
              <input
                type="text"
                placeholder="Title"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50"
              />
            </div>
            <Button title="Get Access" href="/live-deal" />
          </form>
        </div>
      </section>
    </div>
  );
}
