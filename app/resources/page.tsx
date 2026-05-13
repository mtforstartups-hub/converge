"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Type } from "lucide-react";

const featuredContent = [
  {
    type: "Guide",
    title: "The CRE Lender's Guide to Credit Intelligence",
    excerpt:
      "What the category is, what it isn't, and what to evaluate when bringing intelligence into your stack.",
    date: "May 12, 2026",
    readTime: "15 min read",
    link: "/resources/guides/cre-lenders-guide",
    imageColor: "bg-[#0c1821]",
    icon: <BookOpen className="w-5 h-5 text-verified" />,
  },
  {
    type: "Blog",
    title:
      "What 'reads like an expert' actually means — and why most document AI doesn't",
    excerpt:
      "The credit memo is a deliverable. The intelligence behind it isn't. Exploring the limits of standard OCR and LLM wrappers.",
    date: "May 08, 2026",
    readTime: "6 min read",
    link: "/resources/blog/reads-like-an-expert",
    imageColor: "bg-[#121c22]",
    icon: <FileText className="w-5 h-5 text-verified" />,
  },
];

const allContent = [
  {
    type: "Blog",
    title:
      "Entity reconstruction in real estate lending: why it's the hardest problem in underwriting",
    excerpt:
      "Tracing a guarantor's interest through three LLCs and confirming the personal financial statement actually nets out.",
    date: "May 04, 2026",
    readTime: "8 min read",
    link: "/resources/blog/entity-reconstruction",
  },
  {
    type: "Guide",
    title: "Encoding Your Credit Policy as Logic",
    excerpt:
      "A working guide for credit leaders preparing for implementation and encoding variance limits.",
    date: "Apr 28, 2026",
    readTime: "12 min read",
    link: "/resources/guides/encoding-policy",
  },
  {
    type: "Glossary",
    title: "Credit Intelligence",
    excerpt:
      "The structured cognitive work behind a credit decision — entity reconstruction, document interpretation, policy matching...",
    date: "Apr 25, 2026",
    readTime: "2 min read",
    link: "/resources/glossary/credit-intelligence",
  },
  {
    type: "Blog",
    title: "Auditable AI: what your examiners will look for in 2026",
    excerpt:
      "Why 'black box' AI underwriting fails examiner scrutiny and how to structure a defensible audit trail.",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    link: "/resources/blog/auditable-ai",
  },
  {
    type: "Guide",
    title: "The Audit Trail Standard",
    excerpt:
      "What regulators, examiners, and LPs are asking for in 2026 and how to deliver it.",
    date: "Apr 15, 2026",
    readTime: "10 min read",
    link: "/resources/guides/audit-trail-standard",
  },
  {
    type: "Glossary",
    title: "CreditOS",
    excerpt:
      "The five-layer intelligence engine built by Converge to handle document classification, extraction, reasoning, policy match, and risk signals.",
    date: "Apr 10, 2026",
    readTime: "2 min read",
    link: "/resources/glossary/creditos",
  },
];

const tabs = ["All", "Blog", "Guides", "Glossary"];

export default function ResourcesHubPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredContent =
    activeTab === "All"
      ? allContent
      : allContent.filter((item) => item.type === activeTab);

  const getIconForType = (type: string) => {
    switch (type) {
      case "Blog":
        return <FileText className="w-3 h-3" />;
      case "Guide":
        return <BookOpen className="w-3 h-3" />;
      case "Glossary":
        return <Type className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-150 h-150 bg-verified/5 rounded-full blur-[100px] pointer-events-none -mt-40 -mr-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Resources
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Credit intelligence, examined.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Field notes, technical guides, and the working definitions behind
              the language we use. Written for the people doing the work, not
              the people writing about it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED CONTENT ─── */}
      <section className="py-16 bg-parchment border-b border-steel/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="font-mono text-xs uppercase tracking-widest text-verified/80 mb-8">
            Featured
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredContent.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-steel/5 bg-white/98 hover:bg-white/96 hover:border-verified/30 transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div
                  className={`w-full sm:w-48 h-48 sm:h-auto rounded-xl border border-charcoal/10 ${item.imageColor} shrink-0 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-charcoal/5 to-transparent opacity-50" />
                  {item.icon}
                </div>

                <div className="flex flex-col flex-1 py-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full border border-verified/20 bg-verified/10 text-[10px] font-mono uppercase tracking-widest text-verified">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-charcoal/40">
                      {item.date} &middot; {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal leading-tight mb-3 group-hover:text-charcoal/80 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal/60 leading-relaxed font-sans mb-4">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-charcoal/40 group-hover:text-verified transition-colors">
                    Read {item.type.toLowerCase()}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TABS & GRID ─── */}
      <section className="py-16 md:py-24 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-verified text-midnight"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredContent.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group flex flex-col p-6 lg:p-8 rounded-2xl border border-white/5 bg-midnight/30 hover:bg-midnight/60 hover:border-verified/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/40 group-hover:border-verified/30 group-hover:text-verified transition-colors">
                    {getIconForType(item.type)}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-parchment leading-snug mb-3 group-hover:text-white transition-colors line-clamp-3">
                  {item.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed font-sans mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    {item.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-verified transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-20 text-white/40 font-mono text-sm uppercase tracking-widest">
              No content found for this category.
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 md:py-32 bg-midnight border-t border-white/5 relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-verified/5 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-xl px-4 md:px-6 text-center relative z-10">
          <div className="w-12 h-12 rounded-full bg-verified/10 border border-verified/20 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-5 h-5 text-verified" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-medium text-parchment mb-4">
            Get field notes directly.
          </h2>
          <p className="text-white/60 mb-8 font-sans">
            Technical guides, working definitions, and underwriting practice
            insights sent to your inbox. No marketing fluff.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="name@company.com"
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-verified/50 focus:bg-white/10 transition-all font-sans"
            />
            <Button title="Subscribe" href={"/live-deal"} />
          </form>
        </div>
      </section>
    </div>
  );
}
