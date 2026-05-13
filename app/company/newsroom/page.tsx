"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, Newspaper, Megaphone, Users, Rocket } from "lucide-react";

const categories = [
  "All",
  "Press coverage",
  "Product announcements",
  "Customer announcements",
  "Company milestones",
];

const newsItems = [
  {
    headline: "Converge Announces Series B Funding to Scale Credit Intelligence Engine",
    source: "TechCrunch",
    date: "May 12, 2026",
    category: "Company milestones",
    excerpt:
      "Converge has raised a new round of funding to expand its CreditOS platform and accelerate the deployment of Agentic Reasoning for enterprise lenders.",
    link: "/company/newsroom/series-b-funding",
  },
  {
    headline: "Underwriter Intelligence 2.0 Now Available",
    source: "Converge Blog",
    date: "April 28, 2026",
    category: "Product announcements",
    excerpt:
      "The latest release of Underwriter Intelligence brings full entity reconstruction automation to complex multi-family deals, natively integrating into existing LOS workflows.",
    link: "/company/newsroom/underwriter-intelligence-2",
  },
  {
    headline: "Summit Capital Deploys CreditOS Across Bridge Lending Portfolio",
    source: "Business Wire",
    date: "April 10, 2026",
    category: "Customer announcements",
    excerpt:
      "Summit Capital has officially gone live with Converge, reducing credit memo turnaround times by 73% without expanding their underwriting team.",
    link: "/company/newsroom/summit-capital-deployment",
  },
  {
    headline: "Why the Future of Lending is Cognitive, Not Just Automated",
    source: "Wall Street Journal",
    date: "March 15, 2026",
    category: "Press coverage",
    excerpt:
      "An in-depth look at how platforms like Converge are moving beyond simple document extraction into genuine credit reasoning and policy matching.",
    link: "#",
  },
  {
    headline: "Converge Named Top 10 Enterprise AI Startup in FinTech",
    source: "Forbes",
    date: "February 22, 2026",
    category: "Press coverage",
    excerpt:
      "Forbes recognizes Converge for its innovative approach to commercial real estate lending and verifiable, auditable AI infrastructure.",
    link: "#",
  },
];

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Press coverage":
        return <Newspaper className="w-4 h-4" />;
      case "Product announcements":
        return <Rocket className="w-4 h-4" />;
      case "Customer announcements":
        return <Users className="w-4 h-4" />;
      case "Company milestones":
        return <Megaphone className="w-4 h-4" />;
      default:
        return <Newspaper className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-verified/5 rounded-full blur-[100px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Company" },
                { label: "Newsroom" },
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Newsroom
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Press, product news, and milestones.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Coverage of Converge, customer announcements, and updates on the platform.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16 md:py-24 bg-deep-slate min-h-[60vh]">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          
          {/* Categories Filter Bar */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-verified text-midnight"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News List */}
          <div className="flex flex-col gap-6 max-w-4xl">
            {filteredNews.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-2xl border border-white/5 bg-midnight/30 hover:bg-midnight/60 hover:border-verified/20 transition-all duration-300"
              >
                {/* Meta details (Date & Source) on the left for desktop */}
                <div className="md:w-48 shrink-0 flex flex-col gap-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {item.date}
                  </div>
                  <div className="text-sm font-medium text-white/60">
                    {item.source}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mt-2 md:mt-auto flex items-center gap-2 text-verified/80">
                    {getCategoryIcon(item.category)}
                    <span className="font-mono text-[10px] uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content on the right */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-parchment leading-snug mb-4 group-hover:text-white transition-colors">
                    {item.headline}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed font-sans mb-6">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-verified transition-colors">
                    Read article
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20 text-white/40 font-mono text-sm uppercase tracking-widest">
              No news items found for this category.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
