import SixAgentsTabs from "./SixAgentsTabs";

export default function SixAgents() {
  return (
    <section className="py-16 md:py-24 bg-[#0B1B2B]">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-font">
          The Six Agents
        </h2>
        <SixAgentsTabs />
      </div>
    </section>
  );
}
