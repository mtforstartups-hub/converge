import Link from "next/link";
import { ArrowRight, Home, TerminalSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-midnight min-h-[70vh] flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay (optional, subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: "radial-gradient(#8A9BAE 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-20 mx-auto max-w-[95%] md:max-w-[83.333%] relative z-10 w-full">
        <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-slate/80 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-verified animate-pulse" />
            <span className="font-mono text-sm text-steel tracking-wider uppercase">
              System_Alert_404
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-steel">
                <TerminalSquare size={48} strokeWidth={1.5} />
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment tracking-tight">
              Page Not Found
            </h1>
            
            <p className="font-sans text-steel text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              We couldn't locate the requested endpoint. It may have been archived, moved, or never existed in our system.
            </p>
          </div>

          {/* Code Reference / Technical Details */}
          <div className="w-full max-w-md p-4 rounded-xl bg-deep-slate border border-white/5 text-left flex items-start gap-3 opacity-80 mt-2">
            <span className="text-steel font-mono text-xs mt-1">{`>`}</span>
            <code className="font-mono text-sm text-steel flex-1">
              ERR_NOT_FOUND: The requested resource could not be resolved.
            </code>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-verified text-parchment font-sans font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(11,107,96,0.4)]"
            >
              <Home size={18} />
              <span>Return Home</span>
            </Link>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-parchment font-sans font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              <span>Contact Support</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-steel group-hover:text-parchment" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
