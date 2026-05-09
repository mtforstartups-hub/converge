"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const messages = [
  "Your team reviews 50 loans a month.",
  "They could review 150 — same headcount.",
];

export default function BottomCta() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      // switch text after fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Added relative and overflow-hidden to contain the new image layer safely
    <section className="bg-midnight relative overflow-hidden">
      {/* Converted to a flex layout to split text and image side-by-side on desktop */}
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 md:px-10 py-5 md:py-8 flex flex-col lg:flex-row items-center justify-between relative z-10 border-b-[0.5px] border-charcoal">
        {/* --- LEFT SIDE: Your Original Code --- */}
        <div className="space-y-4 lg:space-y-10 w-full lg:w-1/2 text-parchment text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium text-center lg:text-left">
          {/* Animated text */}
          <div className="min-h-min flex items-center justify-center lg:justify-start overflow-hidden">
            <p
              className={`transition-all duration-500 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {messages[index]}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 flex justify-center lg:justify-start">
            <Link
              href="/live-deal"
              className={`mt-4 inline-block max-w-fit py-2.25 px-4.5 md:py-3 md:px-6 rounded-lg text-sm md:text-lg text-parchment bg-verified transform hover:shadow-lg hover:bg-verified/90 hover:-translate-y-1 duration-300 ease-linear`}
            >
              See it on a live deal
            </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: The SVG Image Wrapper --- */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative hidden lg:flex justify-end md:min-h-80 lg:min-h-100 pointer-events-none">
          <Image
            src="/images/shape2.svg"
            alt=""
            fill
            className="object-contain lg:object-right"
          />
        </div>
      </div>
    </section>
  );
}
