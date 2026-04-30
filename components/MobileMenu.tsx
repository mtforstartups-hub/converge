"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";

type Agent = { name: string; description: string; link: string };

export default function MobileMenu({
  links,
  platformAgents,
}: {
  links: { link: string; title: string; hasDropdown?: boolean }[];
  platformAgents?: Agent[];
}) {
  const [open, setOpen] = useState(false);
  const [openPlatform, setOpenPlatform] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="text-white"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <X /> : <Menu />}
      </button>
      {/* Menu panel */}
      {open && (
        <div className="absolute left-0 top-full w-full max-h-[85vh] overflow-y-auto bg-primary text-white py-6 px-6 sm:px-10 md:px-25 border-t border-t-white/10 shadow-2xl">
          <ul className="flex flex-col gap-6">
            {links.map((item, i: number) => (
              <li key={i} className="border-b border-white/5 pb-2">
                <div className="flex flex-col">
                  {item.title === "Platform" && item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenPlatform(!openPlatform)}
                        className="flex justify-between items-center w-full text-left py-2"
                      >
                        <span className="text-white/90 font-medium text-base">
                          {item.title}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`opacity-70 transition-transform duration-300 ${openPlatform ? "rotate-180 text-accent" : ""}`}
                        />
                      </button>

                      {/* Expanded Platform Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openPlatform ? "max-h-[800px] opacity-100 mt-4 mb-2" : "max-h-0 opacity-0"}`}
                      >
                        <div className="flex flex-col gap-5 pl-4 border-l border-white/10 ml-1">
                          {/* Overview Card */}
                          <Link
                            href="/platform"
                            className="block p-4 rounded-lg bg-[#0e1923] border border-accent/30 hover:bg-[#111e2a] transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            <h3 className="text-white font-semibold text-sm mb-1">
                              Platform Overview
                            </h3>
                            <p className="text-white/60 text-xs">
                              See how six AI agents work as one unified system →
                            </p>
                          </Link>

                          {/* Agents List */}
                          <div>
                            <h4 className="text-[11px] font-bold text-white/40 tracking-widest uppercase mb-4">
                              Six Agents
                            </h4>
                            <div className="flex flex-col gap-5">
                              {platformAgents?.map((agent, index) => (
                                <Link
                                  href={agent.link}
                                  key={index}
                                  onClick={() => setOpen(false)}
                                  className="flex gap-3 items-start group/agent"
                                >
                                  <div className="w-8 h-8 rounded-md bg-[#0d1b22] border border-accent/40 flex items-center justify-center shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/agent:bg-accent/80 transition-colors"></div>
                                  </div>
                                  <div>
                                    <h5 className="text-white/90 font-medium text-[14px] mb-0.5 group-hover/agent:text-accent/80 transition-colors">
                                      {agent.name}
                                    </h5>
                                    <p className="text-white/50 text-[12px] leading-snug">
                                      {agent.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="text-white/90 font-medium text-base block py-2"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
