import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { Search } from "lucide-react";

export const metadata = {
  title: "Glossary | Resources | Converge Finance",
  description:
    "Plain-language definitions of every term at the intersection of real estate lending and AI.",
};

const terms = [
  {
    term: "Credit Intelligence",
    category: "Core concept",
    slug: "credit-intelligence",
  },
  { term: "CreditOS", category: "Product", slug: "creditos" },
  {
    term: "Loan Officer Intelligence",
    category: "Product",
    slug: "loan-officer-intelligence",
  },
  {
    term: "Processor Intelligence",
    category: "Product",
    slug: "processor-intelligence",
  },
  {
    term: "Underwriter Intelligence",
    category: "Product",
    slug: "underwriter-intelligence",
  },
  {
    term: "Agentic Reasoning",
    category: "AI concept",
    slug: "agentic-reasoning",
  },
  {
    term: "Credit Policy Engine",
    category: "Product",
    slug: "credit-policy-engine",
  },
  {
    term: "Entity Reconstruction",
    category: "Credit concept",
    slug: "entity-reconstruction",
  },
  { term: "Auditable AI", category: "AI concept", slug: "auditable-ai" },
  { term: "Policy Match", category: "Credit concept", slug: "policy-match" },
  {
    term: "DSCR (Debt Service Coverage Ratio)",
    category: "Lending term",
    slug: "dscr",
  },
  { term: "LTV (Loan-to-Value)", category: "Lending term", slug: "ltv" },
  { term: "Bridge Loan", category: "Lending term", slug: "bridge-loan" },
  {
    term: "Construction Draw Schedule",
    category: "Lending term",
    slug: "construction-draw-schedule",
  },
  {
    term: "Rent Roll Normalization",
    category: "Credit concept",
    slug: "rent-roll-normalization",
  },
  {
    term: "Sponsor Concentration",
    category: "Risk concept",
    slug: "sponsor-concentration",
  },
  {
    term: "Submarket Exposure",
    category: "Risk concept",
    slug: "submarket-exposure",
  },
  {
    term: "Real-Time Risk Signal",
    category: "Product",
    slug: "real-time-risk-signal",
  },
  {
    term: "Loan Origination System (LOS)",
    category: "Lending term",
    slug: "los",
  },
  { term: "Credit Memo", category: "Lending term", slug: "credit-memo" },
];

export default function GlossaryIndexPage() {
  // Group terms alphabetically
  const groupedTerms = terms.reduce(
    (acc, current) => {
      const letter = current.term[0].toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(current);
      return acc;
    },
    {} as Record<string, typeof terms>,
  );

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-verified/5 rounded-full blur-[100px] pointer-events-none -mt-20" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Glossary" },
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Glossary
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              The working definitions behind the language of credit
              intelligence.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Plain-language definitions of every term at the intersection of
              real estate lending and AI. Written so the right reader recognises
              it as insider-confident.
            </p>

            {/* Quick Search Mockup */}
            <div className="relative max-w-md mt-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Search terms..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-verified/50 focus:bg-white/10 transition-all font-sans"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOSSARY LIST ─── */}
      <section className="py-16 md:py-24 bg-deep-slate min-h-[50vh]">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl">
            {sortedLetters.map((letter) => (
              <div key={letter} className="mb-12 last:mb-0">
                <div className="flex items-baseline gap-6 mb-6 pb-2 border-b border-white/10">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-verified/80">
                    {letter}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {groupedTerms[letter]
                    .sort((a, b) => a.term.localeCompare(b.term))
                    .map((item, i) => (
                      <Link
                        key={i}
                        href={`/glossary/${item.slug}`}
                        className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium text-parchment group-hover:text-white transition-colors">
                          {item.term}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-verified/60 transition-colors">
                          {item.category}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
