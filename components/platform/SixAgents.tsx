import SixAgentsTabs from "./SixAgentsTabs";

export default function SixAgents() {
  return (
    <section className="py-16 md:py-24 bg-deep-slate">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment">
          The Six Agents
        </h2>
        <SixAgentsTabs />
      </div>
    </section>
  );
}
