"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

const menuLinks = [
  { title: "Platform", link: "/platform", hasDropdown: true },
  // { title: "Product", link: "/product" },
  { title: "Intelligence", link: "/intelligence" },
  { title: "Industries", link: "/industries" },
  { title: "Proof", link: "/proof" },
];

const platformAgents = [
  {
    name: "Triage",
    description: "Document classification & data extraction",
    link: "/platform/triage",
  },
  {
    name: "Credit Intelligence",
    description: "Deep interlinked risk analysis",
    link: "/platform/credit-intelligence",
  },
  {
    name: "Policy Match",
    description: "Automated credit guideline compliance",
    link: "/platform/policy-match",
  },
  {
    name: "Entity Review",
    description: "Entity structure compliance review",
    link: "/platform/entity-review",
  },
  {
    name: "Background Report",
    description: "Background report risk analysis",
    link: "/platform/background-report",
  },
  {
    name: "Comps",
    description: "Property comparable benchmarking",
    link: "/platform/comps",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger on initial load to handle cases where the user starts halfway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[0.5px] ${
        isScrolled
          ? "bg-midnight/95 backdrop-blur-md border-white/20 shadow-lg py-3"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-95/100 md:max-w-5/6 text-white flex justify-between items-center px-4 md:px-6 lg:px-10">
        <Link href="/" className="text-xl">
          <Image
            src="/images/logo.svg"
            alt="Converge Logo"
            width={160}
            height={80}
            className="w-30 md:w-40 h-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <nav>
            <ul className="flex gap-6 xl:gap-8 items-center">
              {menuLinks.map((item, i) => (
                <li key={i} className="relative group">
                  <Link
                    href={item.link}
                    className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 py-2 transition-colors"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                      />
                    )}
                  </Link>

                  {/* Dropdown for Platform */}
                  {item.title === "Platform" && (
                    <div className="absolute top-full right-0 lg:-left-4 mt-0 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#0c121e] border border-white/10 rounded-xl shadow-2xl p-6 text-left -mt-2">
                        {/* Overview Card */}
                        <Link
                          href="/platform"
                          className="block p-5 rounded-lg bg-[#0e1923] border border-verified/40 mb-6 group/overview hover:bg-[#111e2a] transition-colors"
                        >
                          <h3 className="text-white font-semibold text-[15px] mb-1">
                            Platform Overview
                          </h3>
                          <p className="text-white/60 text-sm flex items-center gap-2">
                            See how six AI agents work as one unified system{" "}
                            <span className="group-hover/overview:translate-x-1 transition-transform">
                              →
                            </span>
                          </p>
                        </Link>

                        {/* Six Agents Section */}
                        <h4 className="text-[11px] font-bold text-white/40 tracking-widest uppercase mb-4 px-1">
                          Six Agents
                        </h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                          {platformAgents.map((agent, index) => (
                            <Link
                              href={agent.link}
                              key={index}
                              className="flex gap-3 items-start group/agent rounded-lg hover:bg-white/5 p-2 -m-2 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-md bg-[#0d1b22] border border-verified/60 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-verified group-hover/agent:bg-verified/80 group-hover/agent:shadow-[0_0_10px_var(--color-verified)] transition-all"></div>
                              </div>
                              <div>
                                <h5 className="text-white font-medium text-sm mb-1 group-hover/agent:text-verified/80 transition-colors">
                                  {agent.name}
                                </h5>
                                <p className="text-white/50 text-xs leading-snug">
                                  {agent.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-5 w-px bg-white/10 hidden lg:block"></div>

          <div className="flex items-center gap-4 xl:gap-5">
            <button className="cursor-pointer text-sm font-medium text-white/80 hover:text-white transition-colors">
              Login
            </button>
            <Button href="/live-deal" title="See it on a live deal" />
          </div>
        </div>

        <MobileMenu links={menuLinks} platformAgents={platformAgents} />
      </div>
    </header>
  );
}
