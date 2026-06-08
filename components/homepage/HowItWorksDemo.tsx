"use client";

import { useState, useEffect } from "react";

export default function HowItWorksDemo() {
  const [step, setStep] = useState(3); // Start on step 3 (matching screenshot state) for initial load

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Map step to terminal states
  const getElapsed = () => {
    switch (step) {
      case 0:
        return "00:12 elapsed";
      case 1:
        return "01:05 elapsed";
      case 2:
        return "02:18 elapsed";
      case 3:
        return "03:48 elapsed";
      case 4:
        return "04:15 elapsed";
      case 5:
        return "04:30 elapsed";
      default:
        return "03:48 elapsed";
    }
  };

  const getProgress = () => {
    switch (step) {
      case 0:
        return 15;
      case 1:
        return 40;
      case 2:
        return 65;
      case 3:
        return 87;
      case 4:
        return 95;
      case 5:
        return 100;
      default:
        return 87;
    }
  };

  const getReadyText = () => {
    switch (step) {
      case 0:
        return "ingesting initial batch";
      case 1:
        return "file 40% ready";
      case 2:
        return "file 65% ready";
      case 3:
        return "file 87% ready";
      case 4:
        return "file 95% ready";
      case 5:
        return "file 100% ready";
      default:
        return "file 87% ready";
    }
  };

  const getFindings = () => {
    switch (step) {
      case 0:
        return "00";
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "04";
      default:
        return "03";
    }
  };

  return (
    <div className="bg-deep-slate/90 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto flex flex-col gap-6 backdrop-blur-md">
      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-verified animate-pulse shadow-[0_0_8px_rgba(11,107,96,0.6)]" />
          <span className="font-sans text-xs font-semibold tracking-wider text-verified uppercase">
            Converge · Live
          </span>
        </div>
        <div className="font-mono text-[11px] text-steel tracking-wider uppercase">
          CVG-FILE-7821 - ABC LLC
        </div>
        <div className="font-mono text-[11px] text-steel tracking-wider uppercase">
          {getElapsed()}
        </div>
      </div>

      {/* Ingest Source Bar */}
      <div className="bg-midnight/60 border border-white/5 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
        <span className="font-mono text-[10px] tracking-wider text-steel uppercase">
          Ingest from
        </span>
        <div className="font-serif text-parchment/90 text-sm leading-none">
          LOS <span className="text-white/10 mx-1.5">•</span> CRM{" "}
          <span className="text-white/10 mx-1.5">•</span> Email{" "}
          <span className="text-white/10 mx-1.5">•</span> Borrower portal{" "}
          <span className="text-white/10 mx-1.5">•</span>{" "}
          <span className="text-verified font-semibold">142 documents</span>
        </div>
      </div>

      {/* Timeline Steps Card Stack */}
      <div className="flex flex-col gap-4 relative">
        {/* Connector vertical line behind cards */}
        <div className="absolute left-[33px] sm:left-[37px] top-4 bottom-4 w-[1px] bg-white/10 z-0" />

        {/* Card 01 - Data */}
        <div
          className={`p-5 rounded-xl border transition-all duration-500 z-10 flex items-start gap-4 ${step === 1
              ? "border-verified bg-midnight/80 shadow-[0_0_15px_rgba(11,107,96,0.15)] scale-[1.01]"
              : step > 1
                ? "border-white/10 bg-midnight/40 opacity-100"
                : "border-white/5 bg-midnight/10 opacity-40"
            }`}
        >
          <div className="relative shrink-0">
            {step === 1 && (
              <span className="absolute -inset-1 rounded-full border border-verified/30 animate-ping" />
            )}
            <div
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center font-display font-bold text-sm sm:text-base transition-colors duration-500 ${step >= 1
                  ? "border-verified text-verified bg-verified/5"
                  : "border-white/10 text-steel"
                }`}
            >
              01
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-semibold tracking-[-0.01em] text-parchment text-base">
                Data
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase font-sans">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${step > 1
                      ? "bg-verified"
                      : step === 1
                        ? "bg-verified animate-pulse"
                        : "bg-steel"
                    }`}
                />
                <span className={step >= 1 ? "text-verified" : "text-steel"}>
                  {step > 1 ? "done" : step === 1 ? "extracting..." : "idle"}
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-parchment/70 leading-relaxed text-left">
              Every document ingested, classified, and extracted —{" "}
              <strong className="font-semibold text-parchment">
                the full file, not a sample.
              </strong>
            </p>
          </div>
        </div>

        {/* Card 02 - Conflicts */}
        <div
          className={`p-5 rounded-xl border transition-all duration-500 z-10 flex items-start gap-4 ${step === 2
              ? "border-verified bg-midnight/80 shadow-[0_0_15px_rgba(11,107,96,0.15)] scale-[1.01]"
              : step > 2
                ? "border-white/10 bg-midnight/40 opacity-100"
                : "border-white/5 bg-midnight/10 opacity-40"
            }`}
        >
          <div className="relative shrink-0">
            {step === 2 && (
              <span className="absolute -inset-1 rounded-full border border-verified/30 animate-ping" />
            )}
            <div
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center font-display font-bold text-sm sm:text-base transition-colors duration-500 ${step >= 2
                  ? "border-verified text-verified bg-verified/5"
                  : "border-white/10 text-steel"
                }`}
            >
              02
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-semibold tracking-[-0.01em] text-parchment text-base">
                Conflicts
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase font-sans">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${step > 2
                      ? "bg-verified"
                      : step === 2
                        ? "bg-verified animate-pulse"
                        : "bg-steel"
                    }`}
                />
                <span className={step >= 2 ? "text-verified" : "text-steel"}>
                  {step > 2 ? "done" : step === 2 ? "reconciling..." : "idle"}
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-parchment/70 leading-relaxed text-left">
              Evidence reconciled against{" "}
              <strong className="font-semibold text-parchment">
                source hierarchy
              </strong>{" "}
              — a filing outweighs a form.
            </p>
          </div>
        </div>

        {/* Card 03 - Risk */}
        <div
          className={`p-5 rounded-xl border transition-all duration-500 z-10 flex items-start gap-4 ${step === 3
              ? "border-verified bg-midnight/80 shadow-[0_0_15px_rgba(11,107,96,0.15)] scale-[1.01]"
              : step > 3
                ? "border-white/10 bg-midnight/40 opacity-100"
                : "border-white/5 bg-midnight/10 opacity-40"
            }`}
        >
          <div className="relative shrink-0">
            {step === 3 && (
              <span className="absolute -inset-1 rounded-full border border-verified/30 animate-ping" />
            )}
            <div
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center font-display font-bold text-sm sm:text-base transition-colors duration-500 ${step > 3
                  ? "border-verified text-verified bg-verified/5"
                  : step === 3
                    ? "border-verified text-verified bg-verified/5"
                    : "border-white/10 text-steel"
                }`}
            >
              03
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-semibold tracking-[-0.01em] text-parchment text-base">
                Risk
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase font-sans">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${step > 3
                      ? "bg-verified"
                      : step === 3
                        ? "bg-verified animate-pulse"
                        : "bg-steel"
                    }`}
                />
                <span
                  className={
                    step >= 3
                      ? "text-verified"
                      : "text-steel"
                  }
                >
                  {step > 3 ? "done" : step === 3 ? "assessing..." : "idle"}
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-parchment/70 leading-relaxed text-left">
              Assessments formed and findings surfaced — entity, guarantor,
              background, policy, exceptions.
            </p>
          </div>
        </div>

        {/* Card 04 - Auditability */}
        <div
          className={`p-5 rounded-xl border transition-all duration-500 z-10 flex items-start gap-4 ${step === 4
              ? "border-verified bg-midnight/80 shadow-[0_0_15px_rgba(11,107,96,0.15)] scale-[1.01]"
              : step > 4
                ? "border-white/10 bg-midnight/40 opacity-100"
                : "border-white/5 bg-midnight/10 opacity-40"
            }`}
        >
          <div className="relative shrink-0">
            {step === 4 && (
              <span className="absolute -inset-1 rounded-full border border-verified/30 animate-ping" />
            )}
            <div
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center font-display font-bold text-sm sm:text-base transition-colors duration-500 ${step >= 4
                  ? "border-verified text-verified bg-verified/5"
                  : "border-white/10 text-steel"
                }`}
            >
              04
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-semibold tracking-[-0.01em] text-parchment text-base">
                Auditability
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase font-sans">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${step > 4
                      ? "bg-verified"
                      : step === 4
                        ? "bg-verified animate-pulse"
                        : "bg-steel"
                    }`}
                />
                <span className={step >= 4 ? "text-verified" : "text-steel"}>
                  {step > 4 ? "done" : step === 4 ? "tracing..." : "idle"}
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-parchment/70 leading-relaxed text-left">
              Every finding traced to the{" "}
              <strong className="font-semibold text-parchment">
                document, page, and line.
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Returns To Bar */}
      <div className="bg-midnight/60 border border-white/5 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
        <span className="font-mono text-[10px] tracking-wider text-verified uppercase">
          Returns to
        </span>
        <div className="font-serif text-parchment/80 text-sm leading-none">
          Underwriter <span className="text-white/10 mx-1.5">•</span> Committee{" "}
          <span className="text-white/10 mx-1.5">•</span> Buyer —{" "}
          <span className="text-verified font-semibold">
            cited, traceable, decision-ready
          </span>
        </div>
      </div>

      {/* Progress Footer Bar */}
      <div className="flex justify-between items-center gap-4 text-xs font-mono text-steel tracking-wider uppercase mt-2">
        <div className="flex-1 h-1.5 bg-midnight rounded-full overflow-hidden">
          <div
            className="h-full bg-verified transition-all duration-700 ease-out"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
        <div className="shrink-0 flex gap-4">
          <span>{getReadyText()}</span>
          <span>findings {getFindings()}</span>
        </div>
      </div>
    </div>
  );
}
