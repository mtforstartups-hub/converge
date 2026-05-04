import BottomCta from "@/components/ui/BottomCta";
import SharedHero from "@/components/ui/SharedHero";

const sectionOneItems = [
  {
    heading: "File completeness tracking",
    desc: 'Converge identifies what is uploaded, what is valid, what is authoritative, and what is still required — distinguishing between "received" and "ready for decision." Your loan officer sees a clear picture, not a checklist.',
  },
  {
    heading: "Borrower communication intelligence",
    desc: "Surfaces the exact gaps that need borrower action. Reduces the back-and-forth cycle from days to hours by identifying all missing items in a single pass — not one email at a time.",
  },
  {
    heading: "Source-linked status",
    desc: "Every document status is traceable. When a file is marked complete, the system shows why. When it is flagged incomplete, the system shows what is missing and where the gap is.",
  },
];

const sectionTwoItems = [
  {
    heading: "Speed",
    desc: "Faster document collection cycle. Fewer borrower touchpoints per loan.",
  },
  {
    heading: "Risk",
    desc: "Gaps identified before they reach underwriting. Missing items caught in the first pass.",
  },
  {
    heading: "Auditability",
    desc: "Every status linked to source documents. Completeness is demonstrable, not assumed.",
  },
];

export default function LoanOfficerIntelligence() {
  return (
    <>
      <SharedHero
        badge="LOAN OFFICER INTELLIGENCE"
        title="Borrower coordination and file completeness — intelligently."
        description="Your loan officers spend hours chasing documents, checking what is missing, and updating systems when files arrive. Converge handles the cognitive load so they can focus on relationships and deal flow."
        breadcrumbLabel="Loan Officer Intelligence"
        href="/loan-officer"
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

      <BottomCta
        messages={[
          "Your loan officers coordinate",
          "30 borrower relationships.",
          "Converge makes each one faster to close.",
        ]}
        type="secondary"
      />
    </>
  );
}
