import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export const metadata = {
  title: "Careers | Converge Finance",
  description:
    "We're hiring engineers, credit specialists, and operators who want to work on hard problems that matter to the real economy.",
};

const openRoles = [
  {
    title: "Senior Software Engineer, Core Platform",
    department: "Engineering",
    location: "Remote (US)",
    description:
      "Build the distributed systems that power CreditOS. You will focus on scaling our document parsing engine and orchestrating complex LLM reasoning chains at high throughput.",
    link: "/company/careers/senior-software-engineer",
  },
  {
    title: "Credit Operations Lead",
    department: "Credit",
    location: "New York / Remote (US)",
    description:
      "Translate complex commercial real estate underwriting policies into programmable logic. Work directly with engineering to define the bounds of Agentic Reasoning.",
    link: "/company/careers/credit-operations-lead",
  },
  {
    title: "Product Marketing Manager",
    department: "Go-to-Market",
    location: "Remote (US)",
    description:
      "Own the narrative for our Intelligence Layers. You will talk to customers weekly, build high-leverage technical collateral, and shape how the industry understands credit intelligence.",
    link: "/company/careers/product-marketing-manager",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[120px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-4xl">
            <Breadcrumbs items={[{ label: "Company" }, { label: "Careers" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Careers
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Build the intelligence layer for credit.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light mt-4">
              We&apos;re hiring engineers, credit specialists, and operators who
              want to work on hard problems that matter to the real economy. If
              you&apos;ve ever read a credit memo and thought &quot;this should
              be different,&quot; we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT WORKING AT CONVERGE IS LIKE ─── */}
      <section className="py-20 md:py-32 bg-deep-slate border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment leading-tight sticky top-32">
                What working at Converge is like
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                Small team. High bar. Direct work. Most teams are two to four
                people. Decisions are made by the people closest to the problem.
                Engineers talk to credit experts every week — not as a stunt, but
                because that&apos;s how the product gets built.
              </p>
              <p>
                We hire for taste, judgment, and rigour. Resume signals matter
                less than how you think about hard problems. Compensation is
                competitive across cash and equity. We are remote-friendly with a
                preferred hub for US-based hires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPEN ROLES ─── */}
      <section className="py-20 md:py-32 bg-midnight">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-parchment mb-4">
              Open roles
            </h2>
            <p className="text-lg text-white/60 font-sans max-w-2xl">
              Don&apos;t see an exact fit but believe you can accelerate our mission? We&apos;d still love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {openRoles.map((role, i) => (
              <Link
                key={i}
                href={role.link}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-verified/30 transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-parchment mb-3 group-hover:text-white transition-colors">
                    {role.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-mono text-white/50 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      {role.department}
                    </div>
                    <div className="hidden sm:block text-white/20">&bull;</div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </div>
                  </div>

                  <p className="text-white/60 font-sans leading-relaxed max-w-3xl">
                    {role.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-sm font-medium text-verified/80 group-hover:text-verified transition-colors">
                    Apply now
                  </span>
                  <div className="w-10 h-10 rounded-full bg-verified/10 flex items-center justify-center group-hover:bg-verified group-hover:text-midnight transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
