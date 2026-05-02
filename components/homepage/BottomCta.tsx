"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section className="bg-[#16263A]">
      <div className="max-w-95/100 md:max-w-5/6 text-parchment text-xl md:text-2xl lg:text-3xl xl:text-5xl mx-auto px-4 md:px-10 py-10 md:py-20 font-bold text-center">
        {/* Animated text */}
        <div className="h-14 flex items-center justify-center overflow-hidden">
          <p
            className={`transition-all duration-500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            {messages[index]}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href="/live-deal"
            className={`mt-4 max-w-fit py-2.25 px-4.5 md:py-3 md:px-6 rounded-lg text-sm md:text-base text-parchment bg-verified transform hover:shadow-lg hover:bg-verified/90 hover:-translate-y-1 duration-300 ease-linear`}
          >
            See it on a live deal
          </Link>
        </div>
      </div>
    </section>
  );
}
