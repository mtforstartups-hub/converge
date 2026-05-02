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
      className={`py-10 px-8 md:px-10 border-l-[3px] border-l-accent rounded-lg transition-all duration-300 ${
        type === "primary"
          ? "bg-[#0B1B2B] text-font border-white/10"
          : "bg-parchment text-primary border-primary/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
