"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { Mail, Clock, Send, MessageSquare } from "lucide-react";

const routingOptions = [
  {
    type: "Sales and demos",
    email: "hello@convergefi.com",
    response: "Same business day",
  },
  {
    type: "Customer support",
    email: "support@convergefi.com",
    response: "Within 4 hours, business day",
  },
  {
    type: "Security and compliance",
    email: "security@convergefi.com",
    response: "Within 1 business day",
  },
  {
    type: "Partnerships",
    email: "partners@convergefi.com",
    response: "Within 2 business days",
  },
  {
    type: "Press",
    email: "press@convergefi.com",
    response: "Same business day",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[120px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <Breadcrumbs items={[{ label: "Contact Us" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Contact
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              How to reach us.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Different teams handle different inquiries. We respond within one
              business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-parchment border-b border-steel/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* ─── DIRECT ROUTING ─── */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                  Direct routing
                </h2>
                <p className="text-charcoal/60 font-sans">
                  For the fastest response, email the appropriate team directly.
                </p>
              </div>

              <div className="bg-parchment/40 rounded-2xl border border-charcoal/10 overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-charcoal/5 border-b border-charcoal/10 text-xs font-mono uppercase tracking-widest text-charcoal/50">
                  <div className="col-span-4">Inquiry type</div>
                  <div className="col-span-4">Email</div>
                  <div className="col-span-4">Typical response</div>
                </div>

                <div className="flex flex-col">
                  {routingOptions.map((option, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-steel/50 last:border-b-0 hover:bg-steel/20 transition-colors"
                    >
                      <div className="col-span-4 flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-charcoal/30 hidden md:block" />
                        <span className="font-medium text-charcoal">
                          {option.type}
                        </span>
                      </div>
                      <div className="col-span-4 flex items-center gap-3">
                        <Mail className="w-4 h-4 text-charcoal/30 hidden md:block" />
                        <a
                          href={`mailto:${option.email}`}
                          className="text-verified/90 hover:text-verified transition-colors"
                        >
                          {option.email}
                        </a>
                      </div>
                      <div className="col-span-4 flex items-center gap-3 text-charcoal/50 text-sm">
                        <Clock className="w-4 h-4 text-charcoal/30 hidden md:block" />
                        {option.response}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── GENERAL CONTACT FORM ─── */}
            <div className="lg:col-span-5">
              <div className="p-8 md:p-10 rounded-2xl border border-charcoal/10 bg-midnight/90 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-verified/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="font-display text-2xl font-bold text-parchment mb-2">
                    General contact form
                  </h2>
                  <p className="text-sm text-white/50 font-sans mb-8">
                    For inquiries that don&apos;t fit the routing above.
                    Submissions route to the appropriate team based on inquiry
                    type.
                  </p>

                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-verified/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-verified/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                        Work Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-verified/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                        Inquiry Type
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-verified/50 transition-colors">
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Demos</option>
                          <option value="support">Customer Support</option>
                          <option value="partnerships">Partnerships</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-verified/50 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <Button title="Send message" href="/" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
