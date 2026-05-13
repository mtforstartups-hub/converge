import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "About Us | Converge Finance",
  description:
    "We're building the intelligence layer for credit. Converge brings clarity to complex commercial real estate lending.",
};

const founders = [
  {
    name: "Gaurav Budhrani",
    role: "Co-founder",
    quote:
      "We started Converge because lenders don't lack data. They lack clarity. Our conviction is that the right intelligence layer will unlock a step-change in credit performance.",
  },
  {
    name: "Omar Hussein",
    role: "Co-founder",
    quote:
      "Credit decisions fail when cognitive work is manual. Converge exists to bring order to complexity — so great teams can move faster with greater confidence.",
  },
];

const leadershipTeam = [
  {
    name: "Gaurav Budhrani",
    role: "Co-founder & CEO",
  },
  {
    name: "Omar Hussein",
    role: "Co-founder & CTO",
  },
  // Adding a few placeholder roles to make the grid look full as requested
  {
    name: "Sarah Jenkins",
    role: "Head of Credit Operations",
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Go-to-Market",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative border-b border-white/5">
        <div className="absolute top-0 right-1/4 size-125 bg-verified/5 rounded-full blur-[100px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-4xl">
            <Breadcrumbs items={[{ label: "Company" }, { label: "About" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                About
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              We&apos;re building the intelligence layer for credit.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-serif mt-4">
              Converge was founded by Gaurav Budhrani and Omar Hussein on a
              single conviction: lenders don&apos;t lack data, they lack
              clarity. The right intelligence layer unlocks a step-change in
              credit performance. We&apos;re building that layer.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE STORY ─── */}
      <section className="py-20 md:py-32 bg-deep-slate border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-verified mb-6">
              The story
            </div>
            <div className="space-y-6 font-serif text-lg md:text-xl text-white/80 leading-relaxed">
              <p>
                Converge began with a quiet observation that anyone close to
                commercial real estate lending knows is true: the cognitive work
                behind a credit decision spans twenty to fifty distinct work
                streams, and almost none of it is automated. Document review,
                entity reconstruction, policy matching, risk synthesis — every
                piece of it is done by hand, by senior people, on every deal.
              </p>
              <p>
                We didn&apos;t want to build another workflow tool. We
                didn&apos;t want to build another document parser. We wanted to
                build the intelligence layer that does the cognitive work —
                properly, auditably, at the scale of an enterprise lender.
                That&apos;s CreditOS. That&apos;s the platform. That&apos;s what
                we&apos;ve spent every day building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDING CONVICTION ─── */}
      <section className="py-20 md:py-32 bg-parchment border-b border-charcoal/10 text-charcoal">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="font-mono text-xs uppercase tracking-widest text-verified mb-10 text-center">
            Founding conviction
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {founders.map((founder, i) => (
              <div
                key={i}
                className="p-8 md:p-10 bg-white rounded-2xl border-l-4 border-l-verified border-t border-r border-b border-charcoal/5 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-charcoal mb-1">
                  {founder.name}
                </h3>
                <div className="font-mono text-xs uppercase tracking-widest text-charcoal/50 mb-6">
                  {founder.role}
                </div>
                <p className="font-serif text-lg text-charcoal/80 leading-relaxed italic">
                  &quot;{founder.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEAM ─── */}
      <section className="py-20 md:py-32 bg-white text-charcoal">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Leadership team
            </h2>
            <p className="text-lg text-charcoal/60 font-sans max-w-2xl">
              Our team brings together deep expertise in commercial real estate
              lending, enterprise software, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-12">
            {leadershipTeam.map((member, i) => (
              <div key={i} className="group">
                {/* Placeholder Image */}
                <div className="w-full aspect-square rounded-2xl bg-charcoal/5 border border-charcoal/10 mb-5 overflow-hidden relative">
                  {/* Abstract shapes as placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <svg
                      className="w-1/2 h-1/2 text-charcoal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-1 group-hover:text-verified transition-colors">
                  {member.name}
                </h3>
                <div className="font-mono text-xs uppercase tracking-widest text-charcoal/50">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 md:py-32 bg-midnight text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-verified/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-parchment mb-6">
            Join the team
          </h2>
          <p className="text-lg text-white/60 mb-10 font-sans">
            We&apos;re always looking for exceptional engineers, credit experts,
            and go-to-market operators to help us build the intelligence layer
            for credit.
          </p>
          <Button href="/careers" title="View open roles" />
        </div>
      </section>
    </div>
  );
}
