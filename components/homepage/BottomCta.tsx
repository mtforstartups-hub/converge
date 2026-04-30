import React from "react";
import Button from "../ui/Button";

export default function BottomCta() {
  return (
    <section className="bg-[#16263A]">
      <div className="max-w-95/100 md:max-w-5/6 text-font text-4xl md:text-5xl mx-auto px-4 md:px-10 py-10 md:py-20 font-bold text-center">
        Your team reviews 50 loans
        <br />a month.
        <br />
        They could review 150 — same headcount.
        <div className="mt-10">
          <Button href="/live-deal" title="See it on a live deal" />
        </div>
      </div>
    </section>
  );
}
