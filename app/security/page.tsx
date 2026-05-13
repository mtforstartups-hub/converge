import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { Shield, Lock, Globe, Server, CheckCircle2, FileText, FileSearch, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Security & Compliance | Converge Finance",
  description:
    "Built for enterprise credit governance. Auditable intelligence, US data residency, and SOC 2 Type II compliance.",
};

const architectureFeatures = [
  {
    icon: <Lock className="w-5 h-5 text-verified" />,
    title: "Encryption",
    description: "Encryption in transit via TLS 1.3. Encryption at rest via AES-256.",
  },
  {
    icon: <Shield className="w-5 h-5 text-verified" />,
    title: "Access Controls",
    description: "Role-based access with multi-factor authentication required for all administrative access.",
  },
  {
    icon: <Server className="w-5 h-5 text-verified" />,
    title: "Network Security",
    description: "VPC isolation with strict ingress and egress controls.",
  },
  {
    icon: <FileSearch className="w-5 h-5 text-verified" />,
    title: "Audit Logging",
    description: "Every action by every user is append-only and retained for seven years.",
  },
];

const certifications = [
  {
    title: "SOC 2 Type II",
    description: "Annual audit completed. Full report available under NDA.",
  },
  {
    title: "Penetration Testing",
    description: "Annual third-party engagement. Summary available under NDA.",
  },
  {
    title: "Vendor Security Assessment",
    description: "Full questionnaire response within five business days.",
  },
  {
    title: "Data Processing Agreements",
    description: "Standard DPA available, customizable for institutional requirements.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[120px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-4xl">
            <Breadcrumbs items={[{ label: "Security & Compliance" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <ShieldCheck className="w-3 h-3 text-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Security & Compliance
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Built for enterprise credit governance.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-light mt-4">
              Auditable intelligence. US data residency. SOC 2 Type II.
              Single-tenant available. Aligned to the security review your team
              already runs.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button href="/contact" title="Talk to our security team" />
              <Button
                type="secondary"
                href="/contact"
                title="Download the security overview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 1: ARCHITECTURE ─── */}
      <section className="py-20 md:py-32 bg-deep-slate border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-verified/80 mb-4">
                Architecture
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-parchment leading-tight mb-6">
                Security architecture, plainly.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-sans mb-8">
                For institutions that require it, Converge supports
                single-tenant deployments in dedicated infrastructure. Data
                never leaves the perimeter you control.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {architectureFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-white/10 bg-midnight/40 hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-verified/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-parchment mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCKS 2 & 3: DATA RESIDENCY AND AI GOVERNANCE ─── */}
      <section className="py-20 md:py-32 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Block 2: Data Residency */}
            <div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-charcoal/5 border border-charcoal/10 mb-8">
                <Globe className="w-6 h-6 text-charcoal/80" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-verified mb-4">
                Data Handling
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Borrower data stays in the United States.
              </h2>
              <div className="space-y-4 text-charcoal/80 font-serif text-lg leading-relaxed">
                <p>
                  All data is hosted in US regions only. No cross-border transfer.
                </p>
                <p>
                  Retention policies follow lending industry norms: borrower
                  documents are retained for the duration of the loan plus seven
                  years, then permanently deleted on request. Data deletion is
                  verifiable, with audit logs to confirm completion.
                </p>
              </div>
            </div>

            {/* Block 3: AI Governance */}
            <div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-charcoal/5 border border-charcoal/10 mb-8">
                <FileText className="w-6 h-6 text-charcoal/80" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-verified mb-4">
                AI Governance
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Models you can audit. Decisions you can explain.
              </h2>
              <div className="space-y-4 text-charcoal/80 font-serif text-lg leading-relaxed">
                <p>
                  Every output from CreditOS is traceable to its source document
                  and its policy clause. Model versions are tracked and frozen
                  for any deal under regulatory review. Bias monitoring runs
                  continuously. Human-in-the-loop architecture is built into the
                  workflow — CreditOS surfaces, your team decides.
                </p>
                <p className="font-medium text-charcoal">
                  The difference between Converge and black-box AI is
                  straightforward: you can always answer the question &quot;why did the
                  model surface this?&quot; — with the document, the policy clause,
                  and the model version, all on one screen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BLOCK 4: COMPLIANCE ─── */}
      <section className="py-20 md:py-32 bg-deep-slate border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-verified/80 mb-4">
              Compliance
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment leading-tight">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group p-6 lg:p-8 rounded-2xl border border-white/10 bg-midnight/40 hover:bg-white/5 hover:border-verified/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-verified/10 flex items-center justify-center mb-6 group-hover:bg-verified/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-verified" />
                </div>
                <h3 className="font-display text-xl font-medium text-parchment mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOCK 5: VENDOR ASSESSMENT SUPPORT & BOTTOM CTA ─── */}
      <section className="py-20 md:py-32 bg-midnight">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-verified/10 border border-verified/20 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-8 h-8 text-verified" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
            Vendor assessment support
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 font-serif leading-relaxed max-w-3xl mx-auto">
            Converge supports vendor security assessments and due diligence reviews end to end. Standard SIG, CAIQ, and customer-specific questionnaires get a five-business-day turnaround. Direct security team contact available to your team during the review.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" title="Talk to our security team" />
            <Button
              type="secondary"
              href="/contact"
              title="Download the security overview"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
