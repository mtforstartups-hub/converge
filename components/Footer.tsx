import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020C1B] text-white">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-7 lg:py-10">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold mb-4">
              <Image
                src="/images/logo.svg"
                alt="Converge Logo"
                width={120}
                height={80}
                className="w-auto h-auto"
              />
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
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Product
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="/product/loan-officer-intelligence">
                  Loan Officer Intelligence
                </Link>
              </li>
              <li>
                <Link href="/product/processor-intelligence">
                  Processor Intelligence
                </Link>
              </li>
              <li>
                <Link href="/product/underwriter-intelligence">
                  Underwriter Intelligence
                </Link>
              </li>
              <li>
                <Link href="/platform/credit-intelligence">
                  CreditOS Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="/intelligence">Intelligence</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/proof">Proof</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Resources
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link
                  href="https://www.linkedin.com/company/converge-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/convergefin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/share/1Feueiuj2s/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtu.be/AyLwmPPJyQI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          {/* <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Legal
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
          {/* LEFT */}
          <p>© 2026 Converge Financial Technology Inc. All rights reserved.</p>

          {/* RIGHT */}
          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
