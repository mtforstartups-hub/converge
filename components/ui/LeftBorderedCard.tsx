export default function LeftBorderedCard({
  type,
  children,
  className = "",
}: {
  type: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`py-10 px-8 md:px-10 border-l-[3px] border-l-verified rounded-lg transition-all duration-300 ${
        type === "primary"
          ? "bg-deep-slate text-parchment border-white/10"
          : "bg-parchment text-charcoal border-charcoal/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
