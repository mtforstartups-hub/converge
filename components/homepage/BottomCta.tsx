import React from "react";
import Button from "../ui/Button";

export default function BottomCta() {
  return (
    <section className="bg-primary">
      <div className="max-w-4xl text-font text-4xl md:text-5xl mx-auto pt-20 px-10 md:pt-40 pb-10 md:pb-20 md:px-20 font-bold text-center">
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
