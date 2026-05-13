"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, FileText, ShieldCheck, Workflow } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <FileText className="size-10" />,
    title: "Documents arrive",
    desc: "Converge classifies every document, extracts structured data, and links each data point to its source — across the entire loan file.",
  },
  {
    id: "02",
    icon: <Workflow className="size-10" />,
    title: "Evidence is formed",
    desc: "Conflicting information is identified and resolved. Missing documents are flagged. Entity structures are reconstructed.",
  },
  {
    id: "03",
    icon: <ShieldCheck className="size-10" />,
    title: "Facts are validated",
    desc: "Every fact is cross–referenced against the loan file. What changed, what conflicts, what is missing, what requires review.",
  },
  {
    id: "04",
    icon: <ClipboardCheck className="size-10" />,
    title: "Decisions are ready",
    desc: "The deal is matched against credit policy. Exceptions are surfaced. A credit-ready output is produced — fully auditable.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!paused) {
        setActive((prev) => (prev + 1) % steps.length);
      }
    }, 2200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section className="w-full bg-midnight text-parchment">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        {/* TOP TEXT */}
        <div className="text-center mx-auto mb-14">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-parchment/80 mb-4">
            How it works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide mb-6">
            Documents → Evidence → Facts → Decisions
          </h2>
          <p className="text-base sm:text-lg text-parchment/60 leading-relaxed">
            Converge reads your loan files, extracts and validates key
            information, flags risks, compares the deal to your credit policy,
            and shows exactly where every conclusion comes from.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-font/10 rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.id}
              tabIndex={0}
              role="button"
              onMouseEnter={() => {
                setPaused(true);
                setActive(i);
              }}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => {
                setPaused(true);
                setActive(i);
              }}
              onBlur={() => setPaused(false)}
              className={[
                "p-6 lg:p-7 flex flex-col gap-4",
                "border-b sm:border-b-0 sm:border-r border-font/10 last:border-r-0",
                "transition-colors duration-600 ease-in-out",
                active === i
                  ? "bg-parchment text-deep-slate"
                  : "bg-deep-slate text-parchment",
              ].join(" ")}
            >
              {/* Icon */}
              <span
                className={[
                  "transition-colors duration-500 ease-in-out",
                  active === i ? "text-deep-slate" : "text-parchment",
                ].join(" ")}
              >
                {step.icon}
              </span>

              {/* Title */}
              <h3
                className={[
                  "text-sm md:text-base font-medium",
                  "transition-colors duration-600 ease-in-out",
                  active === i ? "text-deep-slate" : "text-parchment",
                ].join(" ")}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={[
                  "text-base leading-relaxed",
                  "transition-colors duration-600 ease-in-out",
                  active === i ? "text-deep-slate/70" : "text-parchment/60",
                ].join(" ")}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
