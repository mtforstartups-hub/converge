"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does this replace my LOS intake forms?",
    answer:
      "No. Loan Officer Intelligence sits beside your LOS intake and runs the moment a document is uploaded — into the LOS, into a shared drive, or into email. The output flows back into the LOS.",
  },
  {
    question: "How quickly does it process a file?",
    answer:
      "Document classification and extraction is typically complete within sixty seconds of upload. Full pre-credit package readiness — including borrower request list — is generally complete within five minutes for a standard deal.",
  },
  {
    question: "Can broker partners use this directly?",
    answer:
      "Yes. Loan Officer Intelligence supports broker-portal deployments where brokers see the request list and submit completed files without your team chasing items in the middle.",
  },
  {
    question: "What if my borrower sends documents by email?",
    answer:
      "A dedicated intake email address feeds directly into the engine. Documents in, structured deal package out.",
  },
];

export default function LoanOfficerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-28 bg-deep-slate">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-parchment tracking-wide mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-verified/20 bg-midnight/40"
                      : "border-white/5 bg-midnight/20 hover:border-white/10"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer group/faq"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`font-sans text-base lg:text-lg font-medium pr-4 transition-colors duration-200 ${
                        isOpen
                          ? "text-parchment"
                          : "text-parchment/70 group-hover/faq:text-parchment"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-verified/15 rotate-180"
                          : "bg-white/5 group-hover/faq:bg-white/10"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-colors duration-200 ${
                          isOpen ? "text-verified" : "text-steel"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="border-t border-white/5 pt-5">
                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
