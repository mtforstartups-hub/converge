import Link from "next/link";

const items = [
  "SOC 2 Type II",
  "U.S. Data Residency",
  "Auditable Model Decisions",
  "Single-tenant Available",
  "Vendor Review Aligned",
  "SAML / SSO Support",
];

export default function SecurityStrip() {
  return (
    <div className="w-full bg-parchment py-6 border-y border-steel relative z-10">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Title */}
        <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-charcoal mb-4 md:mb-8">
          Built for enterprise credit governance.
        </h2>

        {/* Technical Specs */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="font-mono text-[10px] md:text-xs text-charcoal uppercase tracking-wider whitespace-nowrap py-1.5 px-2.5 rounded-lg border-steel/80  border"
            >
              {item}
            </div>
          ))}

          {/* <Link
            href="/security"
            className="group flex items-center gap-2 text-[10px] md:text-xs text-verified hover:text-verified/80 transition-colors duration-200 font-bold uppercase tracking-widest shrink-0"
          >
            <span>Security</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
