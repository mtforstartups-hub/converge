import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020C1B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold mb-4">
              CONVERGE{" "}
              <span className="text-white/50 font-normal">FINANCE</span>
            </div>

            <p className="text-sm text-white/60 max-w-sm mb-6">
              Credit intelligence for lenders who originate at scale.
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-md px-3 py-1.5 text-xs text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#1F7A63]" />
              SOC 2 Type II
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Product
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#">Loan Officer Intelligence</Link>
              </li>
              <li>
                <Link href="#">Processor Intelligence</Link>
              </li>
              <li>
                <Link href="#">Underwriter Intelligence</Link>
              </li>
              <li>
                <Link href="#">CreditOS Platform</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#">Intelligence</Link>
              </li>
              <li>
                <Link href="#">Industries</Link>
              </li>
              <li>
                <Link href="#">Proof</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Resources
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
              <li>
                <Link href="#">X</Link>
              </li>
              <li>
                <Link href="#">Facebook</Link>
              </li>
              <li>
                <Link href="#">YouTube</Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Legal
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
          {/* LEFT */}
          <p>© 2026 Converge Financial Technology Inc. All rights reserved.</p>

          {/* RIGHT */}
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
