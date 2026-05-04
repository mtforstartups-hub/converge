import BottomCta from "@/components/ui/BottomCta";
import SharedHero from "@/components/ui/SharedHero";
import Link from "next/link";

const sectionOneItems = [
  {
    heading: "Intelligence document review",
    desc: "Classifies every document in the loan file. Extracts structured data. Resolves conflicts when two documents disagree. Links every data point to the source that produced it. This is not OCR. This is document understanding.",
  },
  {
    heading: "Conflict resolution",
    desc: "When a borrower's income on the application does not match the tax return, Converge identifies the conflict, shows both values, cites both sources, and flags it for review — automatically.",
  },
  {
    heading: "Structured LOS–ready outputs",
    desc: "Instead of manual field entry, Converge produces validated, structured data that flows into your LOS. Clean data in. Fewer exceptions out. Same team, higher throughput.",
  },
];

const sectionTwoItems = [
  {
    heading: "Throughput",
    desc: "More loan files processed per processor. Same headcount, higher output.",
  },
  {
    heading: "Accuracy",
    desc: "Conflicts surfaced before they become exceptions. Data validated at source.",
  },
  {
    heading: "Consistency",
    desc: "Every file processed the same way. No variation based on who handled it.",
  },
];

export default function ProcessorIntelligence() {
  return (
    <>
      <SharedHero
        title="Loan file prep without the manual drag — or the errors."
        description="Your processors are not data entry clerks. They are performing continuous fact maintenance across every document in the loan file — interpreting, comparing, validating, and reconciling information that changes with every upload. Converge performs that cognitive work."
        breadcrumbLabel="Processor Intelligence"
      />

      <section className="bg-parchment text-charcoal py-10 md:py-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sectionOneItems.map((item, index) => (
              <div
                key={index}
                className={`space-y-4 py-6 border-t-2 ${index == 0 ? "border-t-verified" : "border-t-steel"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-display">
                  {item.heading}
                </h3>
                <p className="font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-parchment py-10 md:py-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            {sectionTwoItems.map((item, index) => (
              <div
                key={index}
                className={`space-y-4 py-6 px-2 md:px-4 ${index == sectionTwoItems.length - 1 ? "border-r-none" : "border-b md:border-b-0 md:border-r border-r-steel"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-display">
                  {item.heading}
                </h3>
                <p className="font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="max-w-95/100 md:max-w-5/6 text-xl md:text-2xl mx-auto px-4 md:px-10 py-10 md:py-20 font-bold text-center text-charcoal">
          <div className=" flex items-center justify-center">
            <p>
              Your processors handle 15 active loan files. <br />
              Each file has 40+ documents. <br />
              Each document can change what was previously true. <br />
              Converge keeps it all consistent.
            </p>
          </div>

          <div className="mt-4">
            <Link
              href="/live-deal"
              className="mt-4 max-w-fit py-2.25 px-4.5 md:py-3 md:px-6 rounded-lg text-sm md:text-base text-parchment bg-verified transform hover:shadow-lg hover:bg-verified/90 hover:-translate-y-1 duration-300 ease-linear"
            >
              See it on a live deal
            </Link>
          </div>
        </div>
      </section>

      {/* <BottomCta
        messages={[
          "Your processors handle 15 active loan files.",
          "Each file has 40+ documents.",
          "Each document can change what was previously true.",
          "Converge keeps it all consistent.",
        ]}
        type="secondary"
      /> */}
    </>
  );
}
