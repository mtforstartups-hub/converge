"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const categories = [
  "All",
  "Credit Intelligence",
  "AI in Lending",
  "Underwriting Practice",
  "Product Updates",
  "Industry Insights",
];

const blogPosts = [
  {
    title:
      "What 'reads like an expert' actually means — and why most document AI doesn't",
    category: "AI in Lending",
    date: "May 08, 2026",
    readTime: "6 min read",
    slug: "reads-like-an-expert",
  },
  {
    title:
      "Entity reconstruction in real estate lending: why it's the hardest problem in underwriting",
    category: "Underwriting Practice",
    date: "May 04, 2026",
    readTime: "8 min read",
    slug: "entity-reconstruction",
  },
  {
    title:
      "The credit memo is a deliverable. The intelligence behind it isn't.",
    category: "Credit Intelligence",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    slug: "credit-memo-deliverable",
  },
  {
    title: "Auditable AI: what your examiners will look for in 2026",
    category: "Industry Insights",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    slug: "auditable-ai",
  },
  {
    title: 'Why we don\'t call our products "agents"',
    category: "Product Updates",
    date: "Apr 15, 2026",
    readTime: "4 min read",
    slug: "no-agents",
  },
  {
    title: "The three intelligence layers, explained without the marketing",
    category: "Credit Intelligence",
    date: "Apr 10, 2026",
    readTime: "12 min read",
    slug: "three-intelligence-layers",
  },
  {
    title:
      "Policy as logic: how lenders are encoding credit judgment for consistency",
    category: "Underwriting Practice",
    date: "Apr 05, 2026",
    readTime: "9 min read",
    slug: "policy-as-logic",
  },
  {
    title:
      "Bridge lending in a higher-rate world: where intelligence pays back fastest",
    category: "Industry Insights",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    slug: "bridge-lending-higher-rate",
  },
];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 size-125 bg-verified/5 rounded-full blur-[100px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Blog" },
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Section 6.1 &middot; Blog
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Field notes from the credit floor.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              New work, working hypotheses, and lessons from lenders doing
              complex deals at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16 md:py-24 bg-parchment min-h-[60vh]">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          {/* Categories Filter Bar */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-steel/95">
            <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-charcoal/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-verified text-parchment"
                      : "bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-steel bg-parchment/30 hover:bg-parchment/60 hover:border-verified/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal/40 group-hover:text-verified group-hover:bg-verified/10 transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 px-3 py-1 rounded-full border border-steel">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl lg:text-2xl font-medium text-charcoal leading-snug mb-8 group-hover:text-charcoal transition-colors">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-6 border-t border-steel flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs font-mono text-charcoal/40 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-charcoal/20 group-hover:text-verified transition-colors group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-charcoal/40 font-mono text-sm uppercase tracking-widest">
              No field notes found for this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
